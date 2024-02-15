import { isNumeric, escape } from "validator";
import { FlexboxType } from "../../types/flexbox";

export const modifContainer = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, set: React.Dispatch<React.SetStateAction<FlexboxType>>) => {
    const { value, name } = e.currentTarget;
    const valueClean = escape(value.trim());
    const validValues = {
        with : ["px", "%", "rem", "em", "vw"],
        height: ["px", "%", "rem", "em", "vh"],
        display: ["block", "flex"],
        direction: ["row", "row-reverse", "column", "column-reverse"],
        wrap: ["wrap", "nowrap", "initial"],
        justify: ["flex-start", "center", "flex-end", "baseline"],
        items: ["stretch", "flex-start", "center", "flex-end", "baseline"],
        gap: ["px", "%", "rem", "em", "vw", "vh"],
    }

    let isValid;
            
    set(prev => {
        const container = {...prev.container};

        switch(name) {
            case "width": 
                isValid = isNumeric(valueClean);
                container.width.size = isValid ? parseInt(valueClean) : 240;
                break;

            case "widthunit": 
                isValid = validValues.with.includes(valueClean);
                container.width.unit = isValid ? valueClean : "px";
                break;

            case "height": 
                isValid = isNumeric(valueClean);
                container.height.size = isValid ? parseInt(valueClean) : 240;
                break;

            case "heightunit": 
                isValid = validValues.height.includes(valueClean);
                container.height.unit = isValid ? valueClean : "px";
                break;

            case "display": 
                isValid = validValues.display.includes(valueClean);
                container.display = isValid ? valueClean : "block";
                break;

            case "direction": 
                isValid = validValues.direction.includes(valueClean);
                container.direction = isValid ? valueClean : "row";
                break;

            case "wrap": 
                isValid = validValues.wrap.includes(valueClean);
                container.wrap = isValid ? valueClean : "nowrap";
                break;

            case "justify": 
                isValid = validValues.justify.includes(valueClean);
                container.justify = isValid ? valueClean : "flex-start";
                break;

            case "items": 
                isValid = validValues.items.includes(valueClean);
                container.items = isValid ? valueClean : "stretch";
                break;

            case "gap": 
                isValid = isNumeric(valueClean);
                container.gap.size = isValid ? parseInt(valueClean) : 0 ;
                break;

            case "gapunit": 
                isValid = validValues.gap.includes(valueClean);
                container.gap.unit = isValid ? valueClean : "px";
                break;
        }

        return {...prev, container};
    })
}