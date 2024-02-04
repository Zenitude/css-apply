import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    min-height: 70px;
    box-shadow: 0 0 2px var(--black);
`;

export const Navigation = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    summary {
        display: flex;
        flex-direction: row-reverse;
    }
`;