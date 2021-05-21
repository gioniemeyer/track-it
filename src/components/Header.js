import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

export default function Header() {

    const {user} = useContext(UserContext);

    return(
        <HeaderDiv>
            <p>TrackIt</p>
            <img src={user.image} />
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    position: fixed;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0.15);
    width: 100%;
    top:0;
    left:0;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    align-items: center;

    p {
        font-family: 'Playball', cursive;
        font-size: 38px;
        color: #fff;
    }

    img {
        border-radius: 50%;
        width: 51px;
        height: 51px;
    }
`