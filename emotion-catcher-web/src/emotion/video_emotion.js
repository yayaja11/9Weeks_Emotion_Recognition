import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { render } from "@testing-library/react";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// id값 path parameter로 받아옴
const VideoEmotionPage = ({ match }) => {
  const { id } = match.params;
  const [videoUrl, setVideoUrl] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let videoCode;

  useEffect(function () {
    axios
      .get(`http://localhost:4000/video/${id}`)
      .then(function (result) {
        const videoUrl = result.data[0].videoUrl;
        setVideoUrl(videoUrl);
        console.log(result.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  if (videoUrl === null) {
    return (
      /* bootstrap Spinners */
      <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  // videoUrl에서 videoCode 추출하는 부분
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }
  // 영상 시청 이후 모달창 띄우는 부분
  const checkElapsedTime = (e) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.999) {
      setModalIsOpen(true);
    }
  };
  // 비디오 옵션 지정 (추가)
  const options = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // 자동재생 o
      fs: 0, // 전체화면 표시 x
      controls: 1, // 0 : 동영상 컨트롤러 표시 x
      rel: 0, // 관련 동영상 표시 x
    },
  };
  // 감정 인식 데이터 넘겨주는 부분
  const handleExerciseComplete = () => console.log("Data send");
  return (
    <div>
      <div>
        <div>
          <YouTube
            videoId={videoCode}
            containerClassName="embed embed-youtube"
            onStateChange={(e) => checkElapsedTime(e)}
            opts={options}
          />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video End"
        style={modalStyles}
      >
        <div>
          <h3>영상이 모두 종료되었습니다.</h3>
          <button onClick={handleExerciseComplete}>확인</button>
        </div>
      </Modal>
    </div>
  );
};

export default VideoEmotionPage;
