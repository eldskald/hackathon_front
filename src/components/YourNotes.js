import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import axios from 'axios';
import logout from "../assets/log-out.svg"
import Footer from "./Footer";


export default function YourNotes (){

  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  const token = "";


  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }

  useEffect(() => {
      const promise = axios.get(
        "", config
      );
  
      promise.then((response) => {
        setNotes([...response.data]);
        }
      );
    }, []);

    return(
        <>  
            <Helmet>
                <style>{"body { background-color: ##111317; }"}</style>
            </Helmet>
            <Container >
                <div className="header"><div><h1>suas notas</h1></div> <Link to="/"> <div ><img src={logout}></img></div> </Link> </div>
                <div className="back-ground">
                  <p>notas notas notas</p>
                </div>
                <Footer/>
            </Container>
        </>
    )
}


//Styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;

  img {
    width: 36px;
    height: 36px;
  }

  .header {
    min-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: -330px;
  }

  .back-ground {
    width: 100%;
    min-height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #868686;
    position: relative;
    }

    

  a {
    text-decoration: none;
  }

  h1 {
    font-family: 'Cherry Swash';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: #FFFFFF;
  }


  p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: #222;
    margin-top: 15px;
  }
`;