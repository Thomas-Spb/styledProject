import styled from "styled-components";
import Icon from "../../../../components/icon/Icon.tsx";
import H3 from "../../../../components/h3/H3.tsx";
import Text from "../../../../components/text/Text.tsx";

type ServiceCardPropsTypes = {
    cardId: string
    title: string
    text: string
}

const ServicesCard = (props: ServiceCardPropsTypes) => {
    return (
        <StyledServiceCard>
            <Icon iconId={props.cardId}/>
            <H3 text={`${props.title}`} />
            <Text text={`${props.text}`}/>
        </StyledServiceCard>
    );
};

export default ServicesCard;


const StyledServiceCard = styled.div`
    border: solid 1px #7562e0;
    flex-basis: 30%;
`