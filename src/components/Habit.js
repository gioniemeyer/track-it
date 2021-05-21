import styled from "styled-components";

export default function Habit({h}) {
console.log(h)
    return (
        <Box>
            <h1>{h.name}</h1>
            <Days>
                <ButtonDay selected={h.days.includes(0)} >D</ButtonDay>
                <ButtonDay selected={h.days.includes(1)} >S</ButtonDay>
                <ButtonDay selected={h.days.includes(2)} >T</ButtonDay>
                <ButtonDay selected={h.days.includes(3)} >Q</ButtonDay>
                <ButtonDay selected={h.days.includes(4)} >Q</ButtonDay>
                <ButtonDay selected={h.days.includes(5)} >S</ButtonDay>
                <ButtonDay selected={h.days.includes(6)} >S</ButtonDay>
            </Days>
        </Box>
    )
}

const Box = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    height: 90px;
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;

    h1 {
        margin: 5px auto;
        width: 100%;
        height: 45px;
        border-radius: 5px;
        color: #000;
    }
`

const ButtonDay = styled.button`
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    color: ${props => props.selected ? '#fff' : '#D4D4D4'};
    background-color: ${props => props.selected ? '#CFCFCF' : '#fff'};
    width: 30px;
    height: 30px;
    margin-right: 5px;
`
const Days = styled.div`
    display: flex;
    justify-content: flex-start;
`
const Save = styled.button`
    padding: 7px 17px;
    background-color: #52B6FF;
    color: #fff;
    border-radius: 5px;
    border: none;
    &:disabled {
            opacity: 0.7;
        }
`