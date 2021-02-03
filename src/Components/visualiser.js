import { useRef } from "react";
const Visualizer = ({ currentSong, isPlaying }) => {
  const canvasRef = useRef(null);
  const playingSongRef = useRef(null);
  let c, canvas, source, data;
  if (canvasRef.current !== null) {
    canvas = canvasRef.current;
    if (canvas !== null) {
      c = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 4;
    }
  }
  let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;

  const setAudioElement = () => {
    source = audioCtx.createMediaElementSource(playingSongRef.current);
    source.connect(analyser);
    source.connect(audioCtx.destination);
    data = new Uint8Array(analyser.frequencyBinCount);
    console.log(data);
  };

  const draw = () => {
    data = [...data];
    let space = canvas.width / data.length;
    data.forEach((value, i) => {
      if (data) {
        c.beginPath();
        c.moveTo(space * i, canvas.height); //x,y
        c.lineTo(space * i, canvas.height - value); //x,y
        c.strokeStyle = "#000";
        c.stroke();
      }
    });
  };

  //   if (isPlaying) {
  //     audioCtx.resume();
  //   }
  const magic = () => {
    if (data !== undefined) {
      requestAnimationFrame(magic);
      analyser.getByteFrequencyData(data);
      draw(data);
    }
  };

  ////*
  const log = () => {
    console.log(data);
  };
  return (
    <div className="visualizer">
      <canvas ref={canvasRef} onClick={log}></canvas>
      <audio
        src={currentSong.audio}
        onLoadedMetadata={() => {
          setAudioElement();
        }}
        ref={playingSongRef}
      ></audio>
    </div>
  );
};
export default Visualizer;
