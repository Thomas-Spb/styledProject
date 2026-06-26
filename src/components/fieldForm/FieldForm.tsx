import React from 'react';
import styled from "styled-components";

type FieldFormPropsTypes = {
    name?: string
    type?: string
    placeholder?: string
    id?: string
}

const FieldForm = (props: FieldFormPropsTypes) => {
    return (
        <StyledInput
            type={props.type || 'text'}
            name={props.name}
            placeholder={props.placeholder}
            id={props.id} required
        />

    );
};

export default FieldForm;

const StyledInput = styled.input``