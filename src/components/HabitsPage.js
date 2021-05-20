import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from 'axios';
import Header from './Header'
import styled from "styled-components";
import Habit from './Habit';
import Menu from "./Menu";
import { useHistory } from "react-router";


export default function HabitsPage() {
    let history = useHistory();

    const {user} = useContext(UserContext);
    const [habits, setHabits] = useState([])

    useEffect( () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(r => setHabits(r.data));
    }, [] )

    return(
        <>
            <Header />

            <Content>
                <h1> Meus hábitos</h1>
                <Button >+</Button>
                {
                    habits.map( h => <Habit h={h} />)
                }
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Content>
            <Menu history={history} />
        </>
    )
}


const Content = styled.div`
    margin:70px 0;
    background-color:#e5e5e5;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    position: relative;

    h1 {
        margin: 28px 0 0 15px;
        font-size: 23px;
        color: #126BA5;
    }
    p {
        margin: 5px 0 0 15px;
        color: #bababa;
    }
`

const Button = styled.button`
    width:40px;
    height:35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 27px;
    position: absolute;
    top: 15px;
    right: 15px;
`
