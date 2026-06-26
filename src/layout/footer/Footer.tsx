import React from 'react';
import styled from "styled-components";
import FlexWrapper from "../../components/FlexWrapper.tsx";

const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column">
                <FooterList>
                    <li>Fullstack Developer</li>
                    <li>UI Designer</li>
                    <li>Data Analyst</li>
                </FooterList>
                <FooterCopyright>@2022 Jayjay Dinero Dinero</FooterCopyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    background-color: #1A1A29`

const FooterList = styled.ul``

const FooterCopyright = styled.p``

