import styled from "styled-components"

export const ResumeContainer = styled.div`
    
    background-color:#060204;
    
    @media screen and (max-width:768px)
    {
        padding: 100px 0;
    }
`

export const ResumeWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%auto;
    max-width:1100px;
    margin-right:auto;
    margin-left: auto;
    padding:0 24px;
    justify-content:center;
`


export const ResumeRow = styled.div`
    display:grid;
    grid-auto-columns:minmax(auto,1fr);
    align-items:center;
    grid-template-areas: ${({full}) => (full ? `'col1 col1'` : `'col1 col2'`)};
    padding-top:80px;



    @media screen and (max-width:768px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const MainHeader = styled.div`
    grid-area: col1;
    color:#fff;
    font-size:48px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    margin-bottom:16px;
    text-transform:uppercase;
    align-items:center;
    display:flex;
    justify-content:center;
`

export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;
`

export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
`

export const ColumnHeader = styled.h1`
    color:#fff;
    font-size:48px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    margin-bottom:16px;
`

export const ColumnOuterList = styled.ul`
    margin-left:1rem;
    color:#fff;
    padding-top:10px;

    
    li{
        margin-top:5px;
        margin-bottom:5px;
    }
`

export const ColumnInnerList = styled.ul`
    margin-left:1.5rem;
    color:#fff;
`

export const ListItem = styled.li`
    span{
        color:#000000;
    }
`



