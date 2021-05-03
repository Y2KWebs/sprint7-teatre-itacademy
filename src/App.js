import data from "./data/frases.json";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-familily: Sans;
  padding: 10px;
`;

const StyledButton = styled.button`
  width: 100%;
`;
function App() {
  return (
    <StyledDiv>
      {data.map((e) => (
        <StyledDiv>{e}</StyledDiv>
      ))}
    </StyledDiv>
  );
}

export default App;
