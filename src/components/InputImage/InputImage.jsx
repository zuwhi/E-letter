import { useState } from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";

export default function InputImage({error, variant, handleChange, handlegambar, gambar,name ,surat}) {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState(gambar);
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");
    context.globalCompositeOperation = "destination-over";

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(imageObj1, imgCroppedArea.x, imgCroppedArea.y, imgCroppedArea.width, imgCroppedArea.height, 0, 0, imgCroppedArea.width, imgCroppedArea.height);

      const dataURL = canvasEle.toDataURL("image/png");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
      handlegambar(dataURL);
    };
  };
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };
  function resetImage() {
    setImgAfterCrop("")
     handleChange({ target: { name: name, value: ''} });
    setCurrentPage("choose-img");
    
  }

  return (
    <div className={`${variant} w-full h-full`}>
      {currentPage === "choose-img" ? (
        <div className="w-full h-full  flex flex-col justify-center items-center">
          <img src={gambar} className="cropped-img" />
          <div className="flex items-center  gap-2 mt-5">
            <FileInput error={error} handleChange={handleChange} onImageSelected={onImageSelected}>
              Pilih Gambar
            </FileInput>
            {gambar !== "" ? (
              <button onClick={resetImage} className="btn bg-pallete text-white ">
                Reset
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : currentPage === "crop-img" ? (
        <ImageCropper image={image} onCropDone={onCropDone} onCropCancel={onCropCancel} />
      ) : (
        <div className="w-full h-full  flex flex-col justify-around items-center">
          <img src={imgAfterCrop} className="cropped-img" />
          <div className="flex items-center  gap-2 mt-5">
            <FileInput onImageSelected={onImageSelected}>Ubah Gambar</FileInput>
            <button onClick={resetImage} className="btn bg-pallete text-white ">
              Reset
            </button>
          </div>
          {/* {console.log(imgAfterCrop)} */}
        </div>
      )}
    </div>
  );
}
