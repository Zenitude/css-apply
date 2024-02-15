export const defaultFlex = {
    container: {
        width: { size: 240, unit: "px"},
        height: { size: 240, unit: "px"},
        display: "block",
        direction: "row",
        wrap: "nowrap",
        justify: "flex-start",
        items: "stretch",
        gap: { size: 0, unit: "px"},
    },
    children: [
        {self: "stretch", grow: 0, shrink: 1, basis: { size: 0, unit: "px"},},
    ]
}