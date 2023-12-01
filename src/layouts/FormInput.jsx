const FormInput = ({ dataSurat, setSurat, setImg, children, type, formik }) => {
  function reset() {
    const defaultTemplate = {
      pembuka: "Sehubungan dengan adanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deserunt? Alias maiores architecto.",
    };
    setSurat(defaultTemplate);
    formik.resetForm();
    localStorage.removeItem(dataSurat);
    // localStorage.removeItem("imageIzin");
  }

  return (
    <div className="col-span-5 md:h-full min-h-screen md:px-10 px-3 w-full  bg-slate-100 flex flex-col">
      <div className="w-full flex my-4 justify-between">
        <div className="flex items-center">
          <h1 className="md:text-2xl font-bold text-pallete ">Lengkapi Formulir Surat {type || ""}</h1>
        </div>
        <div className=" flex justify-end gap-2 items-center">
          <button
            type="reset"
            className="bg-pallete rounded-lg px-3 py-2 h-11  text-white font-semibold"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};

export default FormInput;
