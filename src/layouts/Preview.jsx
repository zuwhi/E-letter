
const Preview = ({ children, componenRef }) => {



  return (
    <div className="col-span-6 w-full ">
      <div className="konten md:fixed md:w-[56%] w-full  pb-28 bg-gray-400 h-full overflow-y-auto ">
        <div className=" bg-slate-300 h-fit shadow-2xl flex items-center justify-center scale-90 -mt-3  overflow-y-hidden">
          <div className="bg-white w-full h-[170vh] py-5 text-black font-times" ref={componenRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
