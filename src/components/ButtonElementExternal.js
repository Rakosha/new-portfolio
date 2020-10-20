import styled from 'styled-components'

export const ButtonExternal = styled.a`
    border-radius:50px;
    background: ${({primary}) => (primary ? '#17BEBB' : '#010606')};
    white-space:nowrap;
    padding: ${({big}) => (big ? '14px 18px' : '12px 30px')};
    color: ${({dark}) => (dark? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor:pointer;
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 200ms ease-in-out;
    
    &:hover{
        transition:all 200ms ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#000000')};
    }`