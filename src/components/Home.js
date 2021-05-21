import axios from "axios";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import UserContext from '../contexts/UserContext';
import LoadContext from "../contexts/LoadContext";
import Loader from "react-loader-spinner";

export default function Home() {
    let history = useHistory();
    const {setUser} = useContext(UserContext);
    const {load, setLoad} = useContext(LoadContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function LogIn(e) {
        e.preventDefault();
        setLoad(true);
        const body= {email, password};

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body);
        promise.then(resp => {
            setLoad(false);
            setUser(resp.data);
            history.push('/hoje');
            localStorage.setItem('token', resp.data.token);
        });
        promise.catch(e => {
            alert('Infelizmente algum campo não foi preenchido corretamente, tente novamente.')
            setLoad(false);
        });
    }

    return (
        <HomeDiv>
            <img src={logo}></img>
            <Form onSubmit={LogIn}>
                <input disabled={load} type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) } >
                </input>
                <input disabled={load} type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value) } >
                </input>
                <button disabled={load} type='submit'>
                    {load ? <Loader type="ThreeDots" color="#FFF" height={80} width={80} /> : 'Entrar'}    
                </button>
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
            display: flex;
            align-items: center;
            justify-content: center;
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