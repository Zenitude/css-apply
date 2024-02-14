import { Routes, Route } from "react-router-dom";
import { Home, Error, Float, Position, Flexbox, Grid } from "./Paths";

export default function Router() {
    
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/float"} element={<Float />} />
            <Route path={"/position"} element={<Position />} />
            <Route path={"/flexbox"} element={<Flexbox />} />
            <Route path={"/grid"} element={<Grid />} />
            <Route path={"*"} element={<Error />} />
        </Routes>
    )
}
