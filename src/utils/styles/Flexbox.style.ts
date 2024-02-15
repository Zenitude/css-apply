import styled from "styled-components";
import { FlexboxProps, ChildProps } from "../types/flexbox";

export const FlexboxMain = styled.main<FlexboxProps>`
    padding: 0 10px;

    fieldset{ 
        display: flex; flex-direction: column; gap: 5px; padding: 5px; 
        label { display: inline-block; width: 100px;}
        input[type="number"] { width: 65px; height: 20px; margin-right: 5px;}
        select { width: 65px; height: 20px;}
        select:is([name="display"], [name="justify"], [name="items"], [name="direction"], [name="wrap"], [name="self"])  { width: 135px}
    
        &:nth-of-type(2) {
            div:is(:nth-of-type(2), :nth-of-type(3)) input[type="number"] {
                width: 135px;
            }
        }
    }
   
    .container {
        margin: 0 auto;
        border: 1px solid var(--black);
        width: ${({config}) => config.container.width ? `${config.container.width.size}${config.container.width.unit}` : "240px"};
        height: ${({config}) => config.container.height ? `${config.container.height.size}${config.container.height.unit}` : "240px"};
        
        ${({config}) => config.container.display === "flex" 
        ? `
            display: ${config.container.display};
            ${(config.container.wrap !== "nowrap" && config.container.direction !== "initial") ? `flex-flow: ${config.container.direction} ${config.container.wrap}` : ""}
            ${(config.container.wrap === "nowrap" && config.container.direction !== "initial") ? `flex-direction:${config.container.direction};` : ""}
            ${(config.container.wrap !== "nowrap" && config.container.direction === "initial") ? `flex-wrap:${config.container.wrap};` : ""}
            ${config.container.justify !== "flex-start" ? `justify-content:${config.container.justify};` : ""}
            ${config.container.items !== "stretch" ? `align-items:${config.container.items};` : ""}
            ${config.container.gap.size !== 0 ? `gap:${config.container.gap.size}${config.container.gap.unit};` : ""}
        
        ` : ""};
    }

    ${({config}) => 
        config.children.map(({self, grow, shrink, basis}, index) => (
            `.child[data-id="${index+1}"] {
                ${(self && self !== "stretch") ? `align-self: ${self}` : ""}
                ${(grow && grow !== 0) ? `flex-grow: ${grow}` : ""}
                ${(shrink && shrink !== 1) ? `flex-shrink: ${shrink}` : ""}
                ${(basis && basis.size !== 0) ? `align-self: ${basis.size}${basis.unit}` : ""}
            }`
        ))
    }
`;


export const Container = styled.div`
  max-width: 1440px;
`;

export const Child = styled.div<ChildProps>`
    border: 1px solid var(--black);
    &.selectedChild {
        border: 2px dashed var(--blue);
    }
`;