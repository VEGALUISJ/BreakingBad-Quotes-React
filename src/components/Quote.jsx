import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 2rem;
  margin-bottom: 1rem;
  background-color: #fff;
  max-width: 800px;
  border-radius: 5px;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
    font-weight: bold;
  }
`;

const Quote = ({ quotes }) => {
  return (
    <Container>
      <h2>{quotes.quote}</h2>
      <p>-. {quotes.author}</p>
    </Container>
  );
};

export default Quote;
