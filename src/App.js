import data from "./data/frases.json";

function App() {
  return (
    <div>
      {data.map((e) => (
        <p>{e}</p>
      ))}
    </div>
  );
}

export default App;
