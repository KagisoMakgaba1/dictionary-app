import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse (response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {

    setResults(null);
    setPhotos(null);

    // documentation: https://dictionaryapi.dev
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
     axios.get(apiUrl).then(handleResponse).catch(error => {
      console.error("Dictionary API error:", error);
     });

     let pexelsApiKey =
       "563492ad6f91700001000001dd6daddb1e034ae686a3b5eb6c9f4b6c";
       let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
       let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse).catch(error => {
      console.error("Pexels API error:", error);
    })}


function handleSubmit(event) {
        event.preventDefault();
        search();
    }

     function updateKeyword (event) {
        setKeyword(event.target.value);
    }

  


    if (loaded) {
      return (
        <div className="Dictionary mt-5">
          <section>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a word..."
                onChange={updateKeyword}
                defaultValue={props.defaultKeyword}
              />
              <br />
              <sub>Suggested words: coding, love, galaxy, book...</sub>
            </form>
          </section>

          <section>
            <div className="row">
              <div className="col">
                <a
                  href={`https://www.google.com/search?q=lyrics+with+${keyword}`}
                  target="_blank"
                  rel="noreferrer"
                  className="extra-info-button"
                >
                  🎶 Lyrics with <i>{keyword}</i>
                </a>
              </div>
              <div className="col">
                <a
                  href={`https://www.google.com/search?q=books+with+${keyword}`}
                  target="_blank"
                  rel="noreferrer"
                  className="extra-info-button"
                >
                  📚 Books with <i>{keyword}</i>
                </a>
              </div>
              <div className="col">
                <a
                  href={`https://www.google.com/search?q=films+with+${keyword}`}
                  target="_blank"
                  rel="noreferrer"
                  className="extra-info-button"
                >
                  🎥 Films with <i>{keyword}</i>
                </a>
              </div>
            </div>
          </section>
          <Results results={results} />

          <Photos photos={photos} />
        </div>
      );
  } else {
    load();
    return "Loading..."
  }
}
