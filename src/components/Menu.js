import React from "react";
import styled from 'styled-components';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
export default function Menu({history}) {
    const percentage = 66;

    return(
        <MenuDiv>
            <p onClick={() => {history.push('/habitos')}}>Hábitos</p>
            <Progress onClick={() => {history.push('/hoje')}}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
            </Progress>
            <p onClick={() => {history.push('/historico')}}>Histórico</p>
        </MenuDiv>
    )
}

const MenuDiv = styled.div`
    position: fixed;
    height: 70px;
    background-color: #fff;
    width: 100%;
    bottom:0;
    left:0;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    align-items: center;
    p {
        color: #52B6FF;
    }
`

const Progress = styled.div`
    position: absolute;
    width: 91px;
    height: 91px;
    bottom: 15px;
    left: calc(50vw - 45.5px);
` 