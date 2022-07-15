import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import axios from 'axios';
import Loading from "./Loading";


export default function SingIn (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

  
    function submitLogin(event) {
      event.preventDefault();

      setIsLoading(true);

      const body = {
        email: email,
        password: password
      }

      const promise = axios.post('', body)
      promise
      .then(res => {
        navigate("/registros");
        setError("Logado");
        setIsLoading(false);

      })
      .catch(err => {
        setError("Algo deu errado, tente novamente");
        setIsLoading(false);
      })
    }

    function ErrorDiv() {
        return (
            error ? (
                <ErrorMessage>
                    {error}
                </ErrorMessage>
            ) : (
                <></>
            )
        );
    }

    return(
        <>  
            <Helmet>
                <style>{"body { background-color: #111317; }"}</style>
            </Helmet>
            <Container >
              <form onSubmit={submitLogin}>
                <h1>#markdown</h1>
                <input placeholder="E-mail" type="email" value={email} required onChange={e => setEmail(e.target.value)} disabled={isLoading} />
                <input placeholder="Senha" type="password" value={password} required onChange={e => setPassword(e.target.value)} disabled={isLoading}/>
                <button className="button" type="submit" disabled={isLoading}> {" "} {isLoading ? <Loading /> : "Entrar"}</button>
                <Link to="/cadastro"><p>Primeira vez? Cadastre-se!</p></Link>
              </form>
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

  a {
    text-decoration: none;
  }

  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #666666;
    margin: 4px;

    &::placeholder{
        color: #5D5D5D;
        padding-left: 10px;
    }

  }

  .button {
    width: 303px;
    height: 45px;
    background: #222;
    border-radius: 4.63636px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin: 5px;

    :hover{
        background-color: #E23BE5;
        cursor: pointer;
    }

  }


  h1{
    margin-bottom: 30px;
    font-family: 'Cherry Swash';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    color: #FFFFFF;
  }


  p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 15px;
  }

  form{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  button{
    padding: 0;
    margin:0;
    border: none;
    background: transparent;
}

`;

const ErrorMessage = styled.div`
    margin: 16px 0px;
    font-family: 'Raleway';
    color: #d02525;
    font-weight: 500;
`;
