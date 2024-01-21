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
    // documentation: https://dictionaryapi.dev
     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
     axios.get(apiUrl).then(handleResponse);

     let pexelsApiKey =
       "XwsNI1LGL6ZH5E0zkceJXb5WP19Huuv8iPehPjycCZkCyf4c7YROWQPd";
       let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
       let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse)}


function handleSubmit(event) {
        event.preventDefault();
        search();
    }

     function updateKeyword (event) {
        setKeyword(event.target.value);
    }

    /*useEffect(() => {
    load();
  }, );*/


    if (loaded) {
      return (
    <div className="Dictionary mt-5">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Type a word..." onChange={updateKeyword} defaultValue={props.defaultKeyword}/>
          <br />
          <sub>Suggested words: coding, love, galaxy, book...</sub>
        </form>
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
