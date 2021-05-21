import { useContext } from "react";
import styled from 'styled-components';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
 import "react-circular-progressbar/dist/styles.css";
import TodaysHabitContext from '../contexts/TodaysHabitContext';

 export default function Menu({history}) {
    const {today} = useContext(TodaysHabitContext);
    const todaysConcluded = today.filter( item => item.done )
    const percentage = todaysConcluded.length / today.length * 100;
 
    return(
        <MenuDiv>
            <p onClick={() => {history.push('/habitos')}}>Hábitos</p>
            <Progress onClick={() => {history.push('/hoje')}}>
                <CircularProgressbar
                    value={percentage}
                    text={'Hoje'}
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