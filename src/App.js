import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("red");

  async function fetchAbc(){
    let file = await fetch("https://3willowo-cautious-computing-machine-jjr5g9pqj57c55rx-8000.preview.app.github.dev/public/test2.php", {
      method: "GET"
    });
      let file2 = await file.text();
      console.log(file2);
  }
  fetchAbc();

  return (
    <div style={{color:color}} className="App">
      Test test
    </div>
  );
}

export default App;