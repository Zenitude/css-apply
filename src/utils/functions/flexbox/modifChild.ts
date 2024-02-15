import { isNumeric, escape } from "validator";
import { FlexboxType } from "../../types/flexbox";

export const modifChild = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index:number, set:React.Dispatch<React.SetStateAction<FlexboxType>>) => {
    const {value, name} = e.currentTarget;
    const valueClean = escape(value.trim());
    const validValues = {
        self: ["stretch", "flex-start", "center", "flex-end", "baseline"],
        basis: ["px", "rem", "em", "vw", "vh", "%"],
    };
    let isValid: boolean;

    set(prev => {
        const previous = {...prev};
        const child = previous.children[index];
        switch(name) {
            case "self": 
                isValid = validValues.self.includes(valueClean);
                child.self = isValid ? valueClean : "stretch";
                break;

            case "grow": 
                isValid = isNumeric(valueClean);
                child.grow = isValid ? parseInt(valueClean) : 0;
                break;

            case "shrink": 
                isValid = isNumeric(valueClean);
                child.shrink = isValid ? parseInt(valueClean) : 1;
                break;

            case "basis": 
                isValid = isNumeric(valueClean);
                child.basis.size = isValid ? parseInt(valueClean) : 0;
                break;

            case "basisunit":
                isValid = validValues.basis.includes(valueClean);
                child.basis.unit = isValid ? valueClean : "px";
                break;
        }
        return previous;
    })
}