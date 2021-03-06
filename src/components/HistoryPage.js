
import styled from "styled-components";
import '../styles/index.css';
import "dayjs/locale/pt-br";
import { useHistory } from 'react-router';
import Header from './Header';
import Menu from './Menu';

export default function TodaysPage() {
    let history = useHistory();
    let token = localStorage.getItem('token');
        return(
        <>
            <Header />
            <Content>
            <ContentHeader>
                <h1> Histórico</h1>
                </ContentHeader>
                <ContentBody>
                        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
