import styled from "styled-components";

export default function Habit({h}) {

    return (
        <HabitBox>
            <DescriptionHabit key={h.id}>
                <h1>{h.name}</h1>
                <p>Sequência atual: {h.currentSequence} dias</p>
                <p>Seu recorde: {h.highestSequence} dias</p>
            </DescriptionHabit>
            <Check done = {h.done}>
                <ion-icon name="checkmark-outline"></ion-icon>
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
    background-color: #8FC549;
    border-radius: 5px;
    margin-right:10px;
    
    ion-icon {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #fff;
    font-size: 16px;
}

`