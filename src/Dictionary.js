import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
    return (
        <div className="Dictionary">
            <div className="body-bg">
            <section>
                <h3 className="fs-5">Hoot! What word do you want to look up?</h3>
            <form >
                <input type="search" className="Search-Bar" placeholder="Type a word" autoFocus={true}  />
                <br /><sub>Suggestions: galaxy, flower, rabbit, etc.</sub>
            </form>
            </section>
            
            <div className="App-footer text-center">👩‍💻 Coded by Kagiso Makgaba and is open-sourced on GitHub and is hosted on Netlify<br />
      </div>
            </div>
        </div>
    )
}