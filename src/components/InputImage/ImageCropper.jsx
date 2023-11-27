import React from "react";
import { useState } from "react";
import Cropper from "react-easy-crop";
const ImageCropper = ({ image, onCropDone, onCropCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(4 / 3);
  const [checked, setChecked] = useState(null);
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onAspectRatioChange = (e) => {
    setAspectRatio(e.target.value);
    setChecked(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full top-0 left-0  z-30 fixed bg-slate-400/80">
      <div className="flex bg-slate-50/50 relative w-[80%] h-[70%]">
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {},
          }}
        />
      </div>
      <div className="w-[80%] bg-white p-4">
        <div className="aspect-ratios w-full flex justify-around">
          <input type="checkbox" name="" value={1 / 1} id="" checked={checked == 1 / 1 ? true : false} onChange={onAspectRatioChange} />
          1:1
          <input type="checkbox" name="" value={5 / 4} id="" checked={checked == 5 / 4 ? true : false} onChange={onAspectRatioChange} />
          5:4
          <input type="checkbox" name="" value={4 / 2} id="" checked={checked == 4 / 2 ? true : false} onChange={onAspectRatioChange} />
          4:2
          <input type="checkbox" name="" value={3 / 2} id="" checked={checked == 3 / 2 ? true : false} onChange={onAspectRatioChange} />
          3:2
          <input type="checkbox" name="" value={5 / 3} id="" checked={checked == 5 / 3 ? true : false} onChange={onAspectRatioChange} />
          5:3
          <input type="checkbox" name="" value={16 / 9} id="" checked={checked == 16 / 9 ? true : false} onChange={onAspectRatioChange} />
          16:9
          <input type="checkbox" name="" value={3 / 1} id="" checked={checked == 3 / 1 ? true : false} onChange={onAspectRatioChange} />
          3:1
        </div>
        <div className=" w-full flex justify-center gap-5 mt-3">
          <button type="button" onClick={onCropCancel} className="btn bg-pallete text-white ">
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onCropDone(croppedArea);
            }}
            className="btn btn-accent text-white "
          >
            Crop & Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
