import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  const startPlaying = () => {
    audio.play();
  };

  const endPlay = () => {
    audio.pause();
  };

  useEffect(() => {
    playing ? startPlaying() : endPlay();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setPlaying(false);
      console.log("ended");
    });
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = (props) => {
  const { url } = props;
  const [playing, toggle] = useAudio(url);
  return (
    <div>
      <audio onClick={toggle} src={url} controls />
    </div>
  );
};

export default Player;
