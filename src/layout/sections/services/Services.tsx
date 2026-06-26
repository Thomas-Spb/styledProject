import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper.tsx";
import H2 from "../../../components/h2/H2.tsx";
import ServicesCard from "./servicesCard/ServicesCard.tsx";

const Services = () => {
    return (
        <StyledSectionServices>
            <FlexWrapper direction={"column"}>
                <H2 text={`The services i offer:`}/>
                <StyledServicesCards>
                    <ServicesCard
                        cardId={"rulerPen"}
                        title={'UI & UX DESIGNING'}
                        text={'I design beautiful web iterfaces with Figma and Adove XD'}
                    />
                    <ServicesCard
                        cardId={"rulerPen"}
                        title={'WEB DEVELOPMENT'}
                        text={'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'}
                    />
                    <ServicesCard
                        cardId={"rulerPen"}
                        title={'MOBILE DEVELOPMENT'}
                        text={'I am an expert mobile developer. I have experience using Flutter and React Native.'}
                    />
                    <ServicesCard
                        cardId={"rulerPen"}
                        title={'VERSION CONTROL'}
                        text={'I can use version control systems well, and Git & Mecurial are my go-to tool.'}
                    />
                    <ServicesCard
                        cardId={"rulerPen"}
                        title={'NPM AND NODEJS'}
                        text={'I have core understanding of NPM. I can also develop general purpose applications with NodeJS'}
                    />
                    <ServicesCard
                        cardId={"rulerPen"}
                        title={'WEB SCRAPING'}
                        text={'I can collect content and data from the internet then manipulate and analyze as needed.'}
                    />
                </StyledServicesCards>
            </FlexWrapper>
        </StyledSectionServices>
    );
};

export default Services;

const StyledSectionServices = styled.section`
    background-color: #1A1A29;
`

const StyledServicesCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`