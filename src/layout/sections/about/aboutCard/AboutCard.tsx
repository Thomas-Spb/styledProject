import styled from "styled-components";
import Icon from "../../../../components/icon/Icon.tsx";
import H3 from "../../../../components/h3/H3.tsx";

type AboutCardPropsTypes = {
    title: string
    cardId: string
}


const AboutCard = (props: AboutCardPropsTypes) => {
    return (
        <StyledAboutCard>
            <Icon iconId={props.cardId}/>
            <H3 text={`${props.title}`} />
        </StyledAboutCard>
    );
};

export default AboutCard;

const StyledAboutCard = styled.div`
    background-color: #7562E0
`