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
    let token = localStorage.getItem('token');
    const {user} = useContext(UserContext);
    const {today, setToday} = useContext(TodaysHabitContext);
    const todaysConcluded = today.filter( item => item.done )
    const percentage = todaysConcluded.length / today.length * 100;

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token || token}` 
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promise.then(r => setToday(r.data));
    } ,[])

    
    return(
        <>
            <Header />

            <Content>

            <ContentHeader>
                <h1> {dayjs().locale('pt-br').format('dddd')}, {dayjs().format(`DD`)}/{dayjs().format(`MM`)}</h1>
                <P done={percentage !== 0}>{percentage > 0 ? `${percentage}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</P>
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
`

const P = styled.p`
    margin-top: 4px;
    color: ${props => props.done ? '#8FC549' : '#bababa'};
`

const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 15px;
`

const ContentBody = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
