import axios from 'axios';
import { useEffect, useContext } from "react";
import styled from "styled-components";
import UserContext from '../contexts/UserContext';
import '../styles/index.css';
import TodaysHabit from './TodaysHabit';
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useHistory } from 'react-router';
import Header from './Header';
import Menu from './Menu';
import TodaysHabitContext from "../contexts/TodaysHabitContext";


export default function TodaysPage() {
    let history = useHistory();
    const {user} = useContext(UserContext);
    const {today, setToday} = useContext(TodaysHabitContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(r => setToday(r.data));
        console.log(today);
    } ,[])

    console.log(today);
    
    return(
        <>
            <Header />

            <Content>

            <ContentHeader>
                <h1> {dayjs().locale('pt-br').format('dddd')}, {dayjs().format(`DD`)}/{dayjs().format(`MM`)}</h1>
                </ContentHeader>
                <ContentBody>
                    {
                        today.length > 0 ?
                        today.map( h => <TodaysHabit h={h} />) :
                        <p>Nenhum hábito concluído ainda</p>
                    }
                </ContentBody>
            </Content>
            <Menu history={history} />
        </>
    )
}


const Content = styled.div`
    margin-top:70px;
    background-color:#e5e5e5;
    height: 100vh;
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
