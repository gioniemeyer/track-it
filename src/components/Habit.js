import styled from "styled-components"

export default function Habit({h}) {
    return (
        <HabitBox>
            <DescriptionHabit>
                <h1>Meditar</h1>
                <p>Sequência atual: x dias</p>
                <p>Seu recorde: x dias</p>
            </DescriptionHabit>
            <Check />

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

`
const DescriptionHabit = styled.div`
    background-color: pink;
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
    background-color: #8FC549;
    border-radius: 5px;
    margin-right:10px;
`