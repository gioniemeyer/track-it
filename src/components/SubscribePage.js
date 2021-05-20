import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";

export default function SubscribePage({load, setLoad}) {
    let history = useHistory();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    function Subscribe(e) {
        e.preventDefault();
        setLoad(true);
        const body = {email, name, image: picture, password};

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);
        promise.then(() => {
            setLoad(false);
            history.push('/')});
        promise.catch(e => {
            alert('Infelizmente algum campo não foi preenchido corretamente, tente novamente.');
            setLoad(false);
        })
    }

    return (
        <HomeDiv>
            <img src={logo}></img>
            <Form onSubmit={Subscribe}>
                <input disabled={load} type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) } >
                </input>
                <input disabled={load} type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value) } >
                </input>
                <input disabled={load} type='text' placeholder='nome' value={name} onChange={e => setName(e.target.value) } >
                </input>
                <input disabled={load} type='url' placeholder='foto' value={picture} onChange={e => setPicture(e.target.value) } >
                </input>
                <button disabled={load} type='submit'>Entrar</button>
            </Form>
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

        button:disabled {
            opacity: 0.7;
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
        ::placeholder {
            color: #dbdbdb;
        }

        input:disabled {
            background-color: #F2F2F2;
        }

`