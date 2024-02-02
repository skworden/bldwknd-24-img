"use client";

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState("");

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setImgSrc(imageSrc);
      }
    }
  }, [webcamRef]);

  return (
    <div className="flex lg:flex-col gap-12">
      <button
        className="bg-gray-900 text-white p-4 flex items-center justify-center rounded-full"
        onClick={capture}
      >
        Capture photo
      </button>
      <div className="flex gap-12">
        <div className="flex-1">
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            width={1280}
          />
        </div>
        {imgSrc && (
          <div className="flex-1">
            <img src={imgSrc} />{" "}
          </div>
        )}
      </div>
    </div>
  );
};
