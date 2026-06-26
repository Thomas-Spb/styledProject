import React from 'react';
import styled from "styled-components";
import Icon from "../icon/Icon.tsx";

type LinkPropsType = {
    text: string;
    href: string;
    iconId : string

}

const Link = (props : LinkPropsType) => {
    return (
        <StyledLink href={props.href || '#'}>
            {props.text}{props.iconId  && (
                <Icon iconId={`${props.iconId}`}/>
        )}
        </StyledLink>
    );
};

export default Link;


const StyledLink = styled.a`

`