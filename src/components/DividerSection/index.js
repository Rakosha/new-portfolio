import React from 'react'
import {DividerContainer,DividerWrapper,DividerHeader} from "./DividerElements"

const DividerSection = ({id,first,headerText,rotate,reverse}) => {
    return (
        <DividerContainer id={id} first={first} rotate={rotate} reverse={reverse}>
            <DividerHeader>{headerText}</DividerHeader>
        </DividerContainer>
    )
}

export default DividerSection
