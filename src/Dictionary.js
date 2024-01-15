import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
    return (
      <div className="Dictionary mt-5">
        <div className="body-bg">
          <section>
            <h3>Hoot! What word do you want to look up?</h3>
            <form>
                <input type="search" placeholder="Type a word"/>
                <br /><sub>Suggestions: coding, love, galaxy, etc</sub>
            </form>
          </section>
          <footer>👩‍🏫 Coded by Kagiso Makgaba and open-sourced on Github</footer>
        </div>
      </div>
    );
}