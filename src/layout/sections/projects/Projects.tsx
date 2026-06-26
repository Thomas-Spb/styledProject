import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper.tsx";
import H2 from "../../../components/h2/H2.tsx";
import Text from "../../../components/text/Text.tsx";
import ProjectsCard from "./projectsCard/ProjectsCard.tsx";
import project1 from '../../../assets/images/projectsImg/TWINDER.png'
import project2 from '../../../assets/images/projectsImg/LIVENTS.png'
import project3 from '../../../assets/images/projectsImg/MOOVE.png'


const Projects = () => {
    return (
        <StyledProjectsCard>
            <FlexWrapper direction={'column'}>
                <H2 text={'Featured projects:'}/>
                <Text text={'I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects'}/>
                <StyledProjectsCards>
                    <ProjectsCard
                        src={project1}
                        projectTitle="TWINDER"
                        description="A live Geolocation app for finding tweets and twitter users around you."
                    />
                    <ProjectsCard
                        src={project2}
                        projectTitle="LIVENTS"
                        description="A video streaming app with live Geolocation, for streaming events."
                    />
                    <ProjectsCard
                        src={project3}
                        projectTitle="MOOVE"
                        description="Mobile app for booking instant pickup & dropoff accross major cities."
                    />

                </StyledProjectsCards>
            </FlexWrapper>
        </StyledProjectsCard>
    );
};

export default Projects;


const StyledProjectsCard = styled.section`
    background-color: #1A1A29
`

const StyledProjectsCards = styled.div`
display: flex`