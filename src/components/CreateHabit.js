import { useState } from 'react';
import styled from 'styled-components';

export default function CreateHabit() {

    const [title, setTitle] = useState({});
    <Box>
        <input type='text' placeholder='nome do hábito' value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
    </Box>
}

const Box = styled.div`
    width: 340px;
    height: 180px;
    background-color: #fff;
    border: none;
`