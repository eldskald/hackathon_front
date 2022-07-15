import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Footer from "./Footer";

// Add markdown page?

const Markdown = () => {
  const [markDown, setMarkdown] = useState();
  return (
    <Container>
        <h1> deixe sua (re)marca</h1>
      <div className="text-box">
        <textarea
          value={markDown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="text-area"
        >
        </textarea>
        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
      <div className="button"> Adicionar nota </div>
    </Container>
  );
};

export default Markdown;

//Style
const Container = styled.div`
  .text-box {
    display: flex;
    margin-top: 40px;
  }
  .text-area {
    width: 35vw;
    height: 540px;
    background: #f1f1f1;
    border-radius: 10px;
    outline: none;
    padding: 10px;
    font-size: 18px;
  }
  .output {
    font-size: 18px;
    width: 35vw;
    min-height: 540px;
    background: #222;
    border-radius: 10px;
    margin-left: 20px;
    padding: 10px;
    color: #fff;
    line-height: 3rem;
    word-break: break-all;
  }

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
    margin-top: 30px;

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
`