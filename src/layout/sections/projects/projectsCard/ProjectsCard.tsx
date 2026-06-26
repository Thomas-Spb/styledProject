import React from 'react';
import styled from "styled-components";
import H3 from "../../../../components/h3/H3.tsx";
import Image from "../../../../components/image/Image.tsx";
import Text from "../../../../components/text/Text.tsx";
import Link from "../../../../components/link/Link.tsx";

type ProjectCardProps = {
    src?: string;
    projectTitle?: string
    description?: string
}

const ProjectsCard = (props: ProjectCardProps) => {
    return (
        <StyledProjectsCard>
            <Image  src={`${props.src}`}/>
            <H3 text={`${props.projectTitle }`}/>
            <Text  text={`${props.description }`}/>
            <Link text={'View Live'} />
            <Link text={'Github Repo'}/>
        </StyledProjectsCard>
    );
};

export default ProjectsCard;

const StyledProjectsCard = styled.div`
    border: solid 1px #7562e0;
`