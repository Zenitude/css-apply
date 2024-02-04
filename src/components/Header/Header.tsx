import { NavLink } from "react-router-dom";
import { HeaderContainer, Navigation } from "../../utils/styles/Header.style";
import { openDetails } from "../../utils/functions/openDetails";
import { closeDetails } from "../../utils/functions/closeDetails";

export default function Header() {
    return (
        <HeaderContainer>
            <Navigation>
                <NavLink to={"/"}>Accueil</NavLink>
                <details onMouseOver={(e) => openDetails(e)} onMouseLeave={(e) => closeDetails(e)}>
                    <summary>Positions</summary>
                    <ul>
                        <li><NavLink to={"/float"}>Float</NavLink></li>
                        <li><NavLink to={"/position"}>Position</NavLink></li>
                        <li><NavLink to={"/flexbox"}>Flexbox</NavLink></li>
                        <li><NavLink to={"/grid"}>Grid</NavLink></li>
                    </ul>
                </details>
            </Navigation>
        </HeaderContainer>
    )
}
