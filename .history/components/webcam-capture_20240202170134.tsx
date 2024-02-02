"use client";

import { useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  return (
    <div className="flex gap-12">
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot();
            setImgSrc(imageSrc);
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
    {imgSrc && (
      <img
        src={imgSrc}
      />
    )}
    </div>
  );
};
