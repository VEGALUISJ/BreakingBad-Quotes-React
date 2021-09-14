import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #0f574e;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  border: 2px solid black;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #007d35;
    cursor: pointer;
  }
`;

function App() {
  const [quotes, setQuote] = useState({});

  const consultAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const result = await api.json();
    setQuote(result[0]);
  };

  //load the quote inmediatly i'm in the app.
  useEffect(() => {
    consultAPI();
  }, []);

  return (
    <Container>
      <Quote quotes={quotes} />
      <Button onClick={consultAPI}>Generate New Quote</Button>
    </Container>
  );
}

export default App;
