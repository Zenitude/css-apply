import { useState, useEffect, useContext } from "react";
import { Context } from "../../../utils/context/Context";
import { selectChild } from "../../../utils/functions/selectChild";
import { FlexboxMain, Container, Child } from "../../../utils/styles/Flexbox.style";

export default function Flexbox() {
    const { flex, setFlex } = useContext(Context)!;
    const [ childSelected, setChildSelected ] = useState(0);
    const [ childs, setChilds ] = useState([{}]);
    const [ numberChilds, setNumberChilds] = useState(1);
    const { width, height, display, direction, wrap, justify, items, gap } = flex.container;

    useEffect(() => {
        setChilds(() => {
            let previous = [];
            for(let i = 0 ; i <= numberChilds ; i++) {
                if(i === 0) {previous = [];}
                else previous.push({});
            }
            return previous;
        });
    }, [numberChilds])

    useEffect(() => {
        setFlex(prev => {
            const previous = {...prev};
            for(let i = 0 ; i <= childs.length ; i++) {
                if(i === 0) {previous.children = [];}
                else {
                    const children = previous.children;
                    previous.children = [...children, {
                        self: "stretch", 
                        grow: 0, 
                        shrink: 1, 
                        basis: {size: 0, unit: "px"}
                    }]
                }
            }
            return previous;
        })
    }, [childs, setFlex])

    const modifChild = (e: React.ChangeEvent<HTMLInputElement>, index:number) => {
        const {value, name} = e.currentTarget;
        const parent = e.currentTarget.parentElement;
        let selectBasis, valueBasis;

        setFlex(prev => {
            const previous = {...prev};
            const child = previous.children[index];
            switch(name) {
                case "self": 
                    previous.children[index] = {...child, self: value};
                    break;
                case "grow" : 
                    previous.children[index] = {...child, grow: parseInt(value)};
                    break;
                case "shrink": 
                    previous.children[index] = {...child, shrink: parseInt(value)};
                    break;
                case "basis" : 
                    selectBasis = parent!.querySelector('select') as HTMLSelectElement;
                    valueBasis = selectBasis.value;
                    previous.children[index] = {...child, basis: { size: parseInt(value), unit: valueBasis}};
                    break;
            }
            return previous;
        })
    }

    return (
        <FlexboxMain config={flex}>
            <h1>Flexbox</h1>

            <form>
                <div>
                    <label htmlFor="childs">Nombre d'enfants</label>
                    <input type="number" min={0} name="childs" id="childs" defaultValue={1} onChange={(e) => setNumberChilds(parseInt(e.currentTarget.value))}/>
                </div>
                <fieldset>
                    <legend>Container Principal</legend>
                    <div>
                        <label htmlFor="width">Width</label>
                        <input type="number" min={240} max={1980} id={"width"} defaultValue={240}/>
                        <select name="widthmesure" id="widthmesure" defaultValue={"px"}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vw">vw</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="height">Height</label>
                        <input type="number" min={10} id={"height"} defaultValue={240}/>
                        <select name="heightmesure" id="heightmesure" defaultValue={"px"}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vw">vw</option>
                        </select>
                    </div>
                    <div>
                        <input type="checkbox" name="flexbox" id="flexbox" />
                        <label htmlFor="flexbox">display: flex;</label>
                    </div>
                    <div>
                        <input type="checkbox" name="activeJustify" id="activeJustify" />
                        <label htmlFor="justify">justify-Content</label>
                        <input type="text" id="justify" name="justify" defaultValue={"flex-start"}/>
                    </div>
                    <div>
                        <input type="checkbox" name="activeItems" id="activeItems" />
                        <label htmlFor="items">align-items</label>
                        <input type="text" id="items" name="items" defaultValue={"stretch"}/>
                    </div>
                    <div>
                        <input type="checkbox" name="activeGap" id="activeGap" />
                        <label htmlFor="gap">gap</label>
                        <input type="number" id="gap" name="gap" min="0" defaultValue={0} />
                        <select name="gapmesure" id="gapmesure" defaultValue={"px"}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vw">vw</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Enfant n°{childSelected+1}</legend>
                    <div>
                        <input type="checkbox" name="activeSelf" id="activeSelf"/>
                        <label htmlFor="self">align-items</label>
                        <input type="text" id="self" name="self" defaultValue={"stretch"} onChange={(e) => modifChild(e, childSelected)}/>
                    </div>
                    <div>
                        <label htmlFor="grow">flex-grow</label>
                        <input type="number" min={0} defaultValue={1} id="grow" name="grow" onChange={(e) => modifChild(e, childSelected)}/>
                    </div>
                    <div>
                        <label htmlFor="shrink">flex-shrink</label>
                        <input type="number" min={0} defaultValue={1} id="shrink" name="shrink" onChange={(e) => modifChild(e, childSelected)}/>
                    </div>
                    <div>
                        <label htmlFor="basis">flex-basis</label>
                        <input type="number" name="basis" id="basis" defaultValue={0} onChange={(e) => modifChild(e, childSelected)}/>
                        <select name="basisUnit" id="basisUnit" defaultValue={"px"}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vw">vw</option>
                        </select>
                    </div>

                </fieldset>
            </form>

            <div className="flexbox">
                <p>Container</p>
                <Container className="container">
                    {
                        childs.length != 0 && childs.map((_child, index) => <Child key={index} className="child" data-id={index+1} place={index} config={flex} onClick={(e) => selectChild(e, setChildSelected)}>{index+1}</Child>)
                    }
                </Container>
            </div>

            <section>
                <h2>Code CSS</h2>

                <code>
                    {`
                        .container{
                            width: ${width.size}${width.unit};
                            height: ${height.size}${height.unit};
                            display: ${display};
                            flex-flow : ${direction} ${wrap};
                            ${justify !== "initial" ? `justify-content: ${justify};` : ""}
                            ${items !== "stretch" ? `align-items: ${items};` : ""}
                            ${gap.size !== 0 ? `gap: ${gap.size}${gap.unit};` : ""}
                        }
                    `}
                </code>
                {
                    flex.children.length !== 0
                    ? (<>
                        {
                            flex.children.map(({self, grow, shrink, basis}, index) => (
                                <div key={index}>
                                    <code>
                                        {`
                                            .child[data-id="${index+1}"] {
                                                ${self !== "stretch" ? `align-self: ${self};` : ""}
                                                flex : ${grow} ${shrink} ${basis.size}${basis.unit};
                                            }
                                        `}
                                    </code>
                                    <br />
                                </div>
                            ))
                        }
                    </>) : ("")
                }
            </section>
        </FlexboxMain>
    )
}
