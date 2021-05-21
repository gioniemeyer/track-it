import styled from "styled-components";
import { AiOutlineCheck } from 'react-icons/ai';
import {useContext} from 'react';
import TodaysHabitContext from '../contexts/TodaysHabitContext';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

export default function TodaysHabit({h}) {
    const {today, setToday} = useContext(TodaysHabitContext);
    const {user} = useContext(UserContext);

    function toggleConclusion(h) {
        const array = today.map(item => {
            if(h.id === item.id) {
                item.done = !item.done;
                if(!h.done) {
                    if(item.currentSequence === item.highestSequence) {
                        item.highestSequence = item.highestSequence - 1;
                        item.currentSequence = item.currentSequence - 1;
                    } else {
                        item.currentSequence = item.currentSequence - 1;
                    }
                } else {
                     item.currentSequence ++;
                }
                
                if(item.currentSequence > item.highestSequence) {
                    item.highestSequence ++;
                }
            }
            return item;
        })
        
        setToday(array);
        
        (!h.done) ? sendToServerNegative(h) : sendToServerPositive(h);
    }

    function sendToServerPositive(h) {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const body = {};
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`, body, config);
        promise.then(() => console.log('foi'));
        promise.catch(() => console.log('não foi'));
    }

    function sendToServerNegative(h) {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const body = {};
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`, body, config);
        promise.then(() => console.log('foi'));
        promise.catch(() => console.log('não foi'));
    }

    return (
        <HabitBox>
            <DescriptionHabit key={h.id}>
                <h1>{h.name}</h1>
                <p>Sequência atual: <Span checked = {h.done}> {h.currentSequence} {h.currentSequence === 1 ? 'dia' : 'dias'}</Span> </p>
                <p>Seu recorde: <Span checked = {h.done}>{h.highestSequence} {h.currentSequence === 1 ? 'dia' : 'dias'}</Span></p>
            </DescriptionHabit>
            <Check checked = {h.done} onClick={() => toggleConclusion(h)} done = {h.done}>
                <AiOutlineCheck />
            </Check>

        </HabitBox>
    )
}

const HabitBox = styled.div`
    width: 340px;
    height: 94px;
    background-color:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
    h1{
        color: #666666;
        font-size:20px;
    }
    p {
        color: #666666;
        font-size: 12px;
    }
`

const DescriptionHabit = styled.div`
    margin-left: 10px;
`

const Span = styled.span`
    color: ${props => props.checked ? '#8FC549' : '#666666'};
`
const Check = styled.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    margin-right:10px;
    background-color: ${props => props.checked ? '#8FC549' : '#EBEBEB'};
    
    svg {
    background-color: transparent;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    margin: auto auto;
    }
`