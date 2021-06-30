import './App.css';

function App() {

  const handleClick = (e) => {
    (e.target.style.width === '50px' || e.target.style.width === '')
        ? e.target.style.width = 'fit-content' 
        : e.target.style.width = '50px';
    const db_json = e.target.childNodes[1]
    if (db_json.style.display === "block") {
      db_json.style.display = "none";
    } else {
      db_json.style.display = "block";
    }
  }

  return (
    <div className="App">
      <div id="slide" onClick={handleClick}>
        Access db.json
        <div id="dbjson">
          <img src="https://i.imgur.com/N14u1t5.png" alt="source: imgur.com" />
        </div>
      </div>
      <div id="app-main-content">
        <div className="header">
          <h1>Reactception</h1>
          <h3>A Componenet Within a Component</h3>
        </div>
        <div className="code-snapshots">
          <img src="https://i.imgur.com/gZrjyVO.png" alt="source: imgur.com" />
        </div>
      </div>
    </div>
  );
}

export default App;


