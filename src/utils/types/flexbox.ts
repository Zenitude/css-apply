export type FlexboxType = {
    container: {
        width: { size: number, unit: string};
        height: { size: number, unit: string};
        display: string;
        direction: string;
        wrap: string;
        justify: string;
        items: string;
        gap: { size: number, unit: string};
    };
    children: {
        self: string;
        grow: number;
        shrink: number;
        basis: { size: number, unit: string};
    }[];
}

export type FlexboxProps = {
    config: FlexboxType;
    set?: React.Dispatch<React.SetStateAction<FlexboxType>>;
}

export type ChildProps = {
    place: number;
    config: FlexboxType;
}