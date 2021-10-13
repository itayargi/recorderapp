import React, { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";
import useRecorder from "./components/UseRecorder";

function App() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
const btnText = isRecording ? "recording..." : "start recording"
  // example audio urls:
  const url1 = "http://streaming.tdiradio.com:8000/house.mp3";
  const url2 =
    " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3";
  const url3 =
    "http://streaming.tdiradio.com:8000/house.mp3";
 
    const playerArr = [
      url3,url2, url1
    ]

   const renderPlayers = ()=>{
     return playerArr.map((url,index)=>(
       <div  key={index}>
      {url ? <Player url={url} /> : "loading..."}
      <hr/>
      </div>
     ))
   }
  
  return (
    <div className="App">
      <h2>List of files:</h2>
     {renderPlayers()}
      <button onClick={startRecording} disabled={isRecording}>
        {btnText}
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
      {audioURL && <Player url={audioURL} />}
    </div>
  );
}

export default App;
