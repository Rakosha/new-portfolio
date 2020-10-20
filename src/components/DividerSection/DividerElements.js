import styled from "styled-components"

export const DividerContainer = styled.div`
    min-height:100px;
    padding:0 24px;
    max-height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#17BEBB;
    position: relative;
    

    &:before {
    display: ${({rotate}) => (rotate ? 'block' : 'none')};
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color:${({reverse}) => (reverse ? '#17BEBB' : '#010606')};
    clip-path: polygon(100% 0, 0 -10%, 0 100%);
    }

    &:after {
    display: ${({rotate}) => (rotate ? 'block' : 'none')};
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${({reverse}) => (reverse ? '#010606' : '#17BEBB' )};
    clip-path: polygon(100% 0, 0 100%, 100% 110%);
    }

`
export const DividerHeader = styled.h1`
    text-transform:uppercase;
    letter-spacing:10px;
`