import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from 'axios';
import Header from './Header'
import styled from "styled-components";
import Habit from './Habit';
import Menu from "./Menu";
import { useHistory } from "react-router";
import CreateHabit from "./CreateHabit";
import HabitsContext from "../contexts/HabitsContext";


export default function HabitsPage({load, setLoad}) {
    let history = useHistory();

    const [name, setName] = useState('');
    const [days, setDays] = useState([{day: 0, status: false}, {day: 1, status: false}, 
        {day: 2, status: false}, {day: 3, status: false}, {day: 4, status: false}, 
        {day: 5, status: false},{day: 6, status: false}]);
    const {user} = useContext(UserContext);
    const {habits, setHabits} = useContext(HabitsContext);
    const [newHabit, setNewHabit] = useState(false);

    function updateHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(r => setHabits(r.data));
    }

    useEffect( updateHabits, [] )

    return(
        <>
            <Header />
            <Content>
                <ContentHeader>
                    <h1> Meus hábitos</h1>
                    <Button onClick={() => setNewHabit(true)}>+</Button>
                </ContentHeader>
                <ContentBody>
                    {newHabit ? <CreateHabit updateHabits={updateHabits} name={name} setName={setName} setNewHabit={setNewHabit} days={days} setDays={setDays}/> : ''}
                    {
                        habits.length > 0 ?
                        habits.map( h => <Habit h={h} />) :
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    }
                </ContentBody>
            </Content>
            <Menu history={history} />
        </>
    )
}


const Content = styled.div`
    margin:70px 0;
    background-color:#e5e5e5;
    height: calc(100% - 140px);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    h1 {
        font-size: 23px;
        color: #126BA5;
    }
    p {
        margin: 5px 0 0 15px;
        color: #bababa;
    }
`

const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
`

const ContentBody = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    width:40px;
    height:35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 27px;

`

const Box = styled.form`
    width: 340px;
    height: 180px;
    background-color: #fff;
    border: none;
`
const Days = styled.div`
    display: flex;
`