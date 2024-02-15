import { useState, useEffect, useContext } from "react";
import { Context } from "../../../utils/context/Context";
import { FlexboxMain, Container, Child } from "../../../utils/styles/Flexbox.style";
import { selectChild } from "../../../utils/functions/flexbox/selectChild";
import { modifContainer } from "../../../utils/functions/flexbox/modifContainer";
import { modifChild } from "../../../utils/functions/flexbox/modifChild";

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

    return (
        <FlexboxMain config={flex}>
            <h1>Flexbox</h1>

            <form>
                <div>
                    <label htmlFor="childs">Nombre d'enfants</label>
                    <input type="number" min={0} name="childs" id="childs" defaultValue={1} onChange={(e) => setNumberChilds(parseInt(e.currentTarget.value))} />
                </div>
                <fieldset>
                    <legend>Container Principal</legend>
                    <div>
                        <label htmlFor="width">width</label>
                        <input type="number" min={240} max={1980} name={"width"} id={"width"} defaultValue={240} onChange={(e) => modifContainer(e, setFlex)}/>
                        <select name={"widthunit"} id={"widthunit"} defaultValue={"px"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vw">vw</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="height">height</label>
                        <input type="number" min={10} id={"height"} name={"height"} defaultValue={240} onChange={(e: React.ChangeEvent<HTMLInputElement>) => modifContainer(e, setFlex)}/>
                        <select name={"heightunit"} id={"heightunit"} defaultValue={"px"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="flexbox">display </label>
                        <select name={"display"} id={"display"} defaultValue={"block"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="block">block</option>
                            <option value="flex">flex</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="direction">flex-direction</label>
                        <select name={"direction"} id={"direction"} defaultValue={"row"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="row">row</option>
                            <option value="row-reverse">row-reverse</option>
                            <option value="column">column</option>
                            <option value="column-reverse">column-reverse</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="wrap">flex-wrap</label>
                        <select name="wrap" id="wrap" defaultValue={"nowrap"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="wrap">wrap</option>
                            <option value="nowrap">nowrap</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="justify">justify-Content</label>
                        <select name="justify" id="justify" defaultValue={"flex-start"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="baseline">baseline</option>
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="items">align-items</label>
                        <select name="items" id="items" defaultValue={"stretch"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="stretch">stretch</option>
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="gap">gap</label>
                        <input type="number" id="gap" name="gap" min="0" defaultValue={0} onChange={(e) => modifContainer(e, setFlex)}/>
                        <select name="gapunit" id="gapunit" defaultValue={"px"} onChange={(e) => modifContainer(e, setFlex)}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vw">vw</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Enfant n°{childSelected+1}</legend>
                    <div>
                        <label htmlFor="self">align-self</label>
                        <select name="self" id="self" defaultValue={"stretch"} onChange={(e) => modifChild(e, childSelected, setFlex)}>
                            <option value="stretch">stretch</option>
                            <option value="flex-start">flex-start</option>
                            <option value="flex-end">flex-end</option>
                            <option value="center">center</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="grow">flex-grow</label>
                        <input type="number" min={0} defaultValue={1} id="grow" name="grow" onChange={(e) => modifChild(e, childSelected, setFlex)}/>
                    </div>
                    <div>
                        <label htmlFor="shrink">flex-shrink</label>
                        <input type="number" min={0} defaultValue={1} id="shrink" name="shrink" onChange={(e) => modifChild(e, childSelected, setFlex)}/>
                    </div>
                    <div>
                        <label htmlFor="basis">flex-basis</label>
                        <input type="number" name="basis" id="basis" defaultValue={0} onChange={(e) => modifChild(e, childSelected, setFlex)}/>
                        <select name="basisunit" id="basisunit" defaultValue={"px"} onChange={(e) => modifChild(e, childSelected, setFlex)}>
                            <option value="px">px</option>
                            <option value="%">%</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vw">vw</option>
                            <option value="vh">vw</option>
                        </select>
                    </div>

                </fieldset>
            </form>

            <section>
                <h2>Code CSS</h2>

                <code>
                    {`
                        .container{
                            width: ${width.size}${width.unit};
                            height: ${height.size}${height.unit};
                            ${display !== "block" ? `display: ${display};` : ""}
                            ${(display !== "block" && direction !== 'row' && wrap === 'nowrap') ? `flex-direction: ${direction};` : "" }
                            ${(display !== "block" && direction === 'row' && wrap !== 'nowrap') ? `flex-wrap: ${wrap};` : "" }
                            ${(display !== "block" && direction !== 'row' && wrap !== 'nowrap') ? `flex-flow: ${direction} ${wrap};` : "" }
                            ${(display !== "block" && justify !== "flex-start") ? `justify-content: ${justify};` : ""}
                            ${(display !== "block" && items !== "stretch") ? `align-items: ${items};` : ""}
                            ${(display !== "block" && gap.size !== 0) ? `gap: ${gap.size}${gap.unit};` : ""}
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

            <div className="flexbox">
                <p>Container</p>
                <Container className="container">
                    {
                        childs.length != 0 && childs.map((_child, index) => <Child key={index} className={childSelected === index ? "selectedChild child" : "child"} data-id={index+1} place={index} config={flex} onClick={(e) => selectChild(e, setChildSelected)}>{index+1}</Child>)
                    }
                </Container>
            </div>

            
        </FlexboxMain>
    )
}
