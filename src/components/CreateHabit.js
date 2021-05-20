import { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import LoadContext from '../contexts/LoadContext';

export default function CreateHabit({name, setName, days, setDays, setNewHabit, updateHabits}) {
    const {user} = useContext(UserContext);
    const {load, setLoad} = useContext(LoadContext);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function addDay(d) {

        const selectedDays = days.map(day => {
            if(d === day.day) {day.status = !day.status}
            return day;
        })

        setDays(selectedDays);
    }

    function saveHabit() {
        setLoad(true);
        let selectedDays = days.filter(d => d.status)
        selectedDays = selectedDays.map(d => d.day)

        const body = {name, days: selectedDays}
        console.log(body.days);
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config);
        request.then(resp => {
            setLoad(false);
            setName('');
            console.log(resp.data);
            setNewHabit(false);
            updateHabits();
        })
    }   

    return(
        <Box>
            <input disabled={load} type='text' placeholder='nome do hábito' value={name} onChange={(e) => setName(e.target.value)}></input>
            <Days>
                <ButtonDay disabled={load} selected={days[0].status} onClick={d => addDay(0)}>D</ButtonDay>
                <ButtonDay disabled={load} selected={days[1].status} onClick={d => addDay(1)}>S</ButtonDay>
                <ButtonDay disabled={load} selected={days[2].status} onClick={d => addDay(2)}>T</ButtonDay>
                <ButtonDay disabled={load} selected={days[3].status} onClick={d => addDay(3)}>Q</ButtonDay>
                <ButtonDay disabled={load} selected={days[4].status} onClick={d => addDay(4)}>Q</ButtonDay>
                <ButtonDay disabled={load} selected={days[5].status} onClick={d => addDay(5)}>S</ButtonDay>
                <ButtonDay disabled={load} selected={days[6].status} onClick={d => addDay(6)}>S</ButtonDay>
            </Days>
            <Buttons>
                <Cancel disabled={load} onClick={() => setNewHabit(false)}>Cancelar</Cancel>
                <Save disabled={load} onClick={saveHabit}>Salvar</Save>
            </Buttons>
        </Box>
    )
}

const Box = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    height: 180px;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;

    input {
        border: 1px solid #D4D4D4;
        margin: 5px auto;
        width: 100%;
        height: 45px;
        border-radius: 5px;
    }
    ::placeholder {
            color: #dbdbdb;
        }

    input:disabled {
        background-color: #F2F2F2;
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
const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
`
const Cancel = styled.button`
    background: transparent;
    border: none;
    color: #52B6FF;
`

const Save = styled.button`
    padding: 7px 17px;
    background-color: #52B6FF;
    color: #fff;
    border-radius: 5px;
    border: none;
    &:disabled {
            opacity: 0.7;
        }
`