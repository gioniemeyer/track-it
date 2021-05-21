import styled from "styled-components";
import Trash from "../images/Trash.png";
import axios from 'axios';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Habit({h, updateHabits}) {
    const {user} = useContext(UserContext);
    let token = localStorage.getItem('token');

    function deleteHabit() {
        const answer = window.confirm('Are you sure you wish to delete this item?'); 
        if(answer) {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token || token}`
            }
        }
        const t = h.id; 
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`, config);
        request.then(updateHabits);
        request.catch(() => alert('Não foi possível deletar o hábito. :('));}
        return;
    }

    return (
        <Box>
            <HeaderBox>
                <h1>{h.name}</h1>
                <img onClick={deleteHabit}src={Trash}></img>
            </HeaderBox>
            <Days>
                <ButtonDay selected={h.days.includes(0)} >D</ButtonDay>
                <ButtonDay selected={h.days.includes(1)} >S</ButtonDay>
                <ButtonDay selected={h.days.includes(2)} >T</ButtonDay>
                <ButtonDay selected={h.days.includes(3)} >Q</ButtonDay>
                <ButtonDay selected={h.days.includes(4)} >Q</ButtonDay>
                <ButtonDay selected={h.days.includes(5)} >S</ButtonDay>
                <ButtonDay selected={h.days.includes(6)} >S</ButtonDay>
            </Days>
        </Box>
    )
}

const Box = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    height: 100px;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
`

const HeaderBox = styled.div `
    display: flex;
    justify-content: space-between;
    h1 {
        margin: 5px auto;
        width: 100%;
        height: 45px;
        border-radius: 5px;
        color: #000;
    }

    img {
        width: 15px;
        height: 15px;
    }
`

const ButtonDay = styled.button`
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    color: ${props => props.selected ? '#fff' : '#D4D4D4'};
    background-color: ${props => props.selected ? '#CFCFCF' : '#fff'};
    width: 30px;
    height: 30px;
    margin-right: 5px;
`
const Days = styled.div`
    display: flex;
    justify-content: flex-start;
`
