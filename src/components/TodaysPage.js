import axios from 'axios';
import { useEffect, useContext } from "react";
import styled from "styled-components";
import UserContext from '../contexts/UserContext';
import '../styles/index.css';
import Habit from './Habit';
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import { useHistory } from 'react-router';
import Header from './Header';
import Menu from './Menu';

export default function TodaysPage() {
    let history = useHistory();
    const {user} = useContext(UserContext);
    console.log(user)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(r => console.log(r));
    } ,[])
    return(
        <>
            <Header />

            <Content>
                <h1> {dayjs().day()}, {dayjs().date()}</h1>
                <p>Nenhum hábito concluído ainda</p>
                {/* <Habit /> */}
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

