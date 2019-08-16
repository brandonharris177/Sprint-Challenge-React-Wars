import React from "react";
import styled from "styled-components";


const Names = styled.h2`
    color: white;
`;

const Years = styled.h3`
    text-shadow: 3px 2px #B067DE;
`;

const CreateCharacter = (props) => {
    return (
        <>
            <Names>{props.name}</Names>
            <Years>{props.year}</Years>
        </>
    )
};

export default CreateCharacter