import React from 'react';
import styled from "styled-components";


type ImagePropsType = {
    src?: string
}

const Image = (props: ImagePropsType) => {
    return (
        <StyledImage src={props.src}/>
    );
};

export default Image;

const StyledImage = styled.img`
    object-fit: cover;
`