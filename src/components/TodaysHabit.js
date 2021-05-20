import styled from "styled-components";
import { AiOutlineCheck } from 'react-icons/ai';
import {useContext} from 'react';
import HabitsContext from '../contexts/HabitsContext';

export default function TodaysHabit({h}) {
    const {habits, setHabits} = useContext(HabitsContext);

    function toggleConclusion() {
        
    }
    return (
        <HabitBox>
            <DescriptionHabit key={h.id}>
                <h1>{h.name}</h1>
                <p>Sequência atual: {h.currentSequence} dias</p>
                <p>Seu recorde: {h.highestSequence} dias</p>
            </DescriptionHabit>
            <Check onClick={toggleConclusion} done = {h.done}>
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
`
const DescriptionHabit = styled.div`
    margin-left: 10px;
    h1{
        font-size:20px;
    }
    p {
        font-size: 12px;
    }
`
const Check = styled.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    margin-right:10px;
    
    svg {
    background-color: #8FC549;
    color: #fff;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    margin: auto auto;
    }
`