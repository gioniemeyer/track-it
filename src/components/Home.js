import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <HomeDiv>
            <img src={logo}></img>
            <Form>
                <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) } >
                </input>
                <input type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value) } >
                </input>
            </Form>
            <button>Entrar</button>
            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </HomeDiv>
    )
}

const HomeDiv = styled.div`
    font-family: 'Lexend Deca', sans-serif;
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
    font-family: 'Lexend Deca', sans-serif;
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