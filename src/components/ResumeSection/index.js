import React from 'react'
import { ResumeContainer,ResumeWrapper,ResumeRow, Column1, Column2,ColumnHeader,ColumnOuterList,ListItem,ColumnInnerList,MainHeader } from './ResumeElements'

const ResumeSection = () => {
    return (
        <ResumeContainer>
            <ResumeWrapper>
                <ResumeRow>
                    <Column1>
                        <ColumnHeader>Front-end</ColumnHeader>
                        <ColumnOuterList>
                            <ListItem>HTML5
                                <ColumnInnerList>
                                    <li>Canvas</li>
                                </ColumnInnerList>
                            </ListItem>
                            <ListItem>CSS
                                <ColumnInnerList>
                                    <li>CSS Grid</li>
                                    <li>CSS Flex-box</li>
                                    <li>BEM Convention</li>
                                    <li>SASS/SCSS/LESS</li>
                                </ColumnInnerList>
                            </ListItem>
                            <ListItem>JavaScript
                                <ColumnInnerList>
                                    <li>AnimeJS</li>
                                    <li>jQuery</li>
                                </ColumnInnerList>
                            </ListItem>
                            <ListItem>React
                                <ColumnInnerList>
                                    <li>Hooks / Custom Hooks</li>
                                    <li>Context API</li>
                                    <li>Styled Components</li>
                                    <li>Redux</li>
                                </ColumnInnerList>
                            </ListItem>
                            <ListItem>GatsbyJS</ListItem>
                            <ListItem>Material UI</ListItem>
                        </ColumnOuterList>
                    </Column1>
                    <Column2>
                        <ColumnHeader>Back-end</ColumnHeader>
                        <ColumnOuterList>
                            <ListItem>GraphQL
                                <ColumnInnerList>
                                    <ListItem>GatsbyJS + GraphQL</ListItem>
                                </ColumnInnerList>
                            </ListItem>
                            <ListItem>Pyhton <span>(want to learn)</span></ListItem>
                            <ListItem>Ubuntu Command Line</ListItem>
                            <ListItem>VIM Editor</ListItem>
                            <ListItem>Firebase
                                <ColumnInnerList>
                                    <ListItem>Authentication</ListItem>
                                    <ListItem>Realtime Database</ListItem>
                                    <ListItem>Hosting</ListItem>
                                    <ListItem>Storage</ListItem>
                                </ColumnInnerList>
                            </ListItem>
                            <ListItem>MySQL
                                <ColumnInnerList>
                                    <ListItem>MySQLWorkbench</ListItem>
                                </ColumnInnerList>
                            </ListItem>
                            <ListItem>FileZilla</ListItem>
                        </ColumnOuterList>
                    </Column2>
                </ResumeRow>
            </ResumeWrapper>
        </ResumeContainer>
    )
}

export default ResumeSection
