import styled from 'styled-components'

export const Container = styled.div`
    background-color:#010606;
    @media screen and (max-width:768px)
    {
        padding: 100px 0;
    }
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    z-index:1;
    padding:0 24px;
    padding-top:50px;
    padding-bottom:50px;
    height:auto;
    width:100% auto;
    max-width:1100px;
    margin-right:auto;
    margin-left: auto;
    justify-content:center;
`

export const Header = styled.h1`
    color:#17BEBB;
    margin-top:24px;
    margin-bottom:24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight:600;
`