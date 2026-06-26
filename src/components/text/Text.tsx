import styled from "styled-components";

type TextPropsTypes = {
    text: string
}


const Text = (props: TextPropsTypes) => {
    return (
        <StyledText>
            {props.text}
        </StyledText>
    );
};

export default Text;

const StyledText = styled.p`
    color: #FFFFFF;
`

