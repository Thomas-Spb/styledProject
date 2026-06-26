import styled from "styled-components";

type H2PropsType = {
    text?: string
}

const H2 = (props:H2PropsType) => {
    return (
        <StyledH2>{props.text}</StyledH2>
    );
};

export default H2;

const StyledH2 = styled.h2 `
    color: #7562E0;
`
