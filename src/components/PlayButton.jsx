import { FaPlay } from "react-icons/fa";

const PlayVideoButton = () => {
    return (
        <a href="https://www.youtube.com/watch?v=iLIyh0rjD8A" target="_blanck" className="content-play">
        <button className="play-button">
            <FaPlay />
        </button>
        <p>Play Vídeo</p>
    </a>
    );
  };
  
  export default PlayVideoButton;