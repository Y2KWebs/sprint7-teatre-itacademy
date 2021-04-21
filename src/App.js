import data from "./data/frases.json";
import styled from "styled-components";
import React, { useState } from "react";

const StyledDiv = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  width: 80%;
  padding: 10px;
`;

const StyledButton = styled.button`
  width: 50%;
  padding: 30px;
`;
function App() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <StyledButton
        disabled={index < 1}
        onClick={() => setIndex((currentIndex) => currentIndex - 1)}
      >
        Anterior
      </StyledButton>
      <StyledButton
        disabled={index >= data.length - 1}
        onClick={() => setIndex((currentIndex) => currentIndex + 1)}
      >
        Siguiente
      </StyledButton>
      {data.map((e, indexData) => (
        <StyledDiv display={indexData === index}>{e}</StyledDiv>
      ))}
    </div>
  );
}

export default App;
