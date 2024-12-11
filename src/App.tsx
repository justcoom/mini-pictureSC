import React from 'react';
import styled from "styled-components";
import {MainImage} from "./components/MainImage";
import {StyledHeader} from "./components/StyledHeader.styled";
import {StyledText} from "./components/StyledText";
import {StyledButton} from "./components/StyledButton";


function App() {
    return (
        <div className="App">
            <Box>
                <MainImage src={"/images/Rectangle.png"}/>
                <MainBlock>
                    <StyledHeader>Headline</StyledHeader>
                    <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
                    <StyledButton btnType={"primary"}>See more</StyledButton>
                    <StyledButton btnType={"secondary"}>Save</StyledButton>
                </MainBlock>
            </Box>
        </div>
    );
}

export default App;

const Box = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
    
    margin: 50px auto 0;
`

const MainBlock = styled.main`
    padding: 0 20px;
`

