import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import '../style.css'


export default function Footer(){


    return(
        <Bottom>
            <div className="links">
                <Link to="/" > <div className="button">ajuda?</div> </Link>
                <Link to="/" > <div className="button">bônus?</div> </Link>
            </div>
            <Link to="/markdown" ><div className="add"> + </div></Link>
        </Bottom>
    )
}


const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  width:100%;
  height: 70px;
  background: #6D6D6D;
  font-weight: 700;  
  font-family: 'Raleway';

.links{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 50px 25px 50px;
}

.add{
    position: absolute;
    width: 81px;
    height: 81px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 15px;
    text-align: center;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #FFFFFF;
    background-color: #222;
    font-size: 50px;

    :hover{
        background-color: #E23BE5;
        cursor: pointer;
    }
}

.button {
    width: 100%;
    height: 45px;
    background: #222;
    border-radius: 4.63636px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20.976px;
    text-align: center;
    color: #FFFFFF;
    margin-top: -11px;

    padding: 8px 14px 8px 14px;

    :hover{
        background-color: #E23BE5;
        cursor: pointer;
    }
  }

a {
    text-decoration: none;
    color: #222;
    font-size: 18px;
  }
`