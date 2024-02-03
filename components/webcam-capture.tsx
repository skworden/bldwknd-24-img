import { useRef, useState, type FC } from "react";
import Webcam from "react-webcam";

export const WebcamCapture: FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | undefined>();

  const capturePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  };

  const deletePhoto = () => {
    setImgSrc(undefined);
  };

  return (
    <div className="p-12 flex gap-6 flex-col flex-1 lg:flex-row">
      <div className="flex-1 flex flex-col gap-6 max-w-3xl">
        <button
          className={`${
            imgSrc ? "bg-blue-500" : "bg-green-500"
          } text-white font-semibold p-4 flex items-center justify-center rounded-full w-full`}
          onClick={capturePhoto}
        >
          {imgSrc ? "Retake photo" : "Take photo"}
        </button>
        <Webcam
          audio={false}
          className="rounded-xl"
          height="100%"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: "user" }}
          width="100%"
        />
      </div>
      {imgSrc && (
        <div className="flex-1 flex flex-col gap-6">
          <button
            className="bg-red-500 text-white font-semibold p-4 flex items-center justify-center rounded-full w-full"
            onClick={deletePhoto}
          >
            Delete photo
          </button>
          <img className="rounded-xl flex-1 flex-shrink-0" src={imgSrc} />
        </div>
      )}
    </div>
  );
};
