import { useRef } from "react";

export default function FileInput({ error, onImageSelected, children }) {
  const inputRef = useRef();
  const HandleChangeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };
  const onChooseImg = () => {
    inputRef.current.click();
  };
  return (
    <>
      <input className="hidden" ref={inputRef} onChange={HandleChangeImage || ""} type="file" accept="image/*" name="image" id="" />
      <div className="">
        <button type="button" className="btn bg-pallete text-white " onClick={onChooseImg}>
          {children}
        </button>
        <p className="text-red-500">{error}</p>
      </div>
    </>
  );
}
