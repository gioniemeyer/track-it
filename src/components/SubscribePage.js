import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";

export default function SubscribePage() {
    let history = useHistory();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    function Subscribe() {
        const body = {email, name, image: picture, password};

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);
        promise.then(history.push('/'));
        promise.catch(e => alert('Infelizmente algum campo não foi preenchido corretamente, tente novamente.'))
    }

    return (
        <HomeDiv>
            <img src={logo}></img>
            <Form>
                <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) } >
                </input>
                <input type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value) } >
                </input>
                <input type='text' placeholder='nome' value={name} onChange={e => setName(e.target.value) } >
                </input>
                <input type='url' placeholder='foto' value={picture} onChange={e => setPicture(e.target.value) } >
                </input>
            </Form>
            <button onClick={Subscribe}>Entrar</button>
            <Link to='/'>
                <p>Não tem uma conta? Faça login!</p>
            </Link>

        </HomeDiv>
    )
}

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 60px auto;
        img {
            height: 180px;
        }
        button{
            width: 98%;
            background-color: #52B6FF;
            border: none;
            border-radius: 5px;
            color: #fff;
            height:45px;
        }
        p{
            text-decoration: underline;
            color: #52B6FF;
            font-size: 14px;
            margin-top: 25px;
        }
`

const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 100%;
        input {
            margin:5px;
            height:45px;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
        }
`