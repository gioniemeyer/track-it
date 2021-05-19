import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";

export default function Home({setUser}) {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function LogIn(e) {
        e.preventDefault();

        const body= {email, password};

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
        promise.then(resp => {
            setUser(resp.data);
            history.push('/hoje');
        });
        promise.catch(e => alert('Infelizmente algum campo não foi preenchido corretamente, tente novamente.'));
    }

    return (
        <HomeDiv>
            <img src={logo}></img>
            <Form onSubmit={LogIn}>
                <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) } >
                </input>
                <input type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value) } >
                </input>
                <button type='submit'>Entrar</button>
            </Form>
            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
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