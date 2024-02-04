import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error, Float, Position, Flexbox, Grid } from "./Paths";

export default function Router() {
    const [ flex, setFlex ] = useState({
        container: {
            width: { size: 240, unit: "px"},
            height: { size: 240, unit: "px"},
            display: "flex",
            direction: "initial",
            wrap: "nowrap",
            justify: "normal",
            items: "normal",
            gap: { size: 0, unit: "px"},
        },
        children: [
            {self: "stretch", grow: 0, shrink: 1, basis: { size: 0, unit: "px"},},
        ]
    });
    console.log(flex);
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/float"} element={<Float />} />
            <Route path={"/position"} element={<Position />} />
            <Route path={"/flexbox"} element={<Flexbox config={flex} set={setFlex}/>} />
            <Route path={"/grid"} element={<Grid />} />
            <Route path={"*"} element={<Error />} />
        </Routes>
    )
}
