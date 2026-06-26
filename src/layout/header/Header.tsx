import styled from "styled-components";
import Logo from "../../components/logo/Logo.tsx";
import Menu from "../../components/menu/Menu.tsx";

function Header() {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    );
}

export default Header;


const StyledHeader = styled.header`
    background-color: #181824;
    display: flex;
    justify-content: space-between;
`