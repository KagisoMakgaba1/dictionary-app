import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <header>
          <h2 className="mt-5">dic·tion·ar·y</h2>
          <hr />
          <h3>Hoot! What word do you want to look up?</h3>
        </header>
        <main>
          <Dictionary defaultKeyword="Programmer" />
        </main>
        <footer>
          <small>
            <p>
              👩‍💻 Coded by Kagiso Makgaba and open-sourced on{" "}
              <a
                href="https://github.com/KagisoMakgaba1/dictionary-app"
                className="App-link"
                target="_blank"
                rel="noreferrer noopener"
                alt="Link to Dictionary App GitHub Repository"
              >
                Github
              </a>
              , and hosted on{" "}
              <a
                href="https://taupe-truffle-3cec5e.netlify.app"
                className="App-link"
                target="_blank"
                rel="noreferrer noopener" alt="Link to dictionary app on Netlify"
              >
                {" "}
                Netlify
              </a>
            </p>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
