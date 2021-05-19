import axios from 'axios';
import { useEffect } from "react";
import styled from "styled-components";
import '../styles/index.css';
import Habit from './Habit';


export default function TodaysPage({user}) {
    console.log(user);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(r => console.log(r));
    } ,[])
    return(
        <div className='container'>
            <Header>
                <p>TrackIt</p>
                <img src='https://img.estadao.com.br/thumbs/640/resources/jpg/8/6/1603832656468.jpg' />
            </Header>
            <Content>
                <h1>Terça-feira, 18/05</h1>
                <p>Nenhum hábito concluído ainda</p>
                {/* <Habit /> */}
            </Content>
            <Menu>
                <p>Hábitos</p>
                <p>Histórico</p>
            </Menu>
        </div>
    )
}

const Header = styled.div`
    position: absolute;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0.15);
    width: 100%;
    top:0;
    left:0;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    align-items: center;

    p {
        font-family: 'Playball', cursive;
        font-size: 38px;
        color: #fff;
    }

    img {
        border-radius: 50%;
        width: 51px;
        height: 51px;
    }
`

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

const Menu = styled.div`
    position: absolute;
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