import React from 'react';
import styled from "styled-components";

type ButtonPropsTypes = {
    text: string;
}

const Button = (props: ButtonPropsTypes) => {
    return (
        <StyledButton>
            {props.text}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button ``