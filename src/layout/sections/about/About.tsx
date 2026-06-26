import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper.tsx";
import Text  from "../../../components/text/Text.tsx";
import H2 from "../../../components/h2/H2.tsx";
import AboutCard from "./aboutCard/AboutCard.tsx";

const About = () => {
    return (
        <StyledSectionAbout>
            <FlexWrapper direction={"column"}>
            <H2 text={`About me:`}/>
                <Text text={`Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile developer. I have honed my skills in Web Development and advance i have core understanding of advance UI design principles.
                    Here are the major skiills i have.`}/>

                <StyledAboutDescription>
                    <StyledAboutSpan>5+</StyledAboutSpan>
                    Years of experience. Specialised in building apps, while ensuring a seamless
                    web experience for end users.
                </StyledAboutDescription>

                <StyledAboutCards>
                    <AboutCard
                        title={'UI & UX DESIGNING'}
                        cardId={"rulerPen"}
                    />
                    <AboutCard
                        title={'WEB DEVELOPMENT'}
                        cardId={"code"}
                    />
                    <AboutCard
                        title={'MOBILE DEVELOPMENT'}
                        cardId={"android"}
                    />
                    <AboutCard
                        title={'WEB SCRAPING WITH PYTHON'}
                        cardId={"python"}
                    />
                </StyledAboutCards>
            </FlexWrapper>
        </StyledSectionAbout>
    );
};

export default About;

const StyledSectionAbout = styled.section`
    background-color: #1A1A29;
`

const StyledAboutDescription = styled.p``

const StyledAboutSpan = styled.span``

const StyledAboutCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`