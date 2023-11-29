// import { Link } from "react-router-dom";

export default function CardOption({ color, image, children, type }) {
  return (
    <div className={`card  ${color} md:w-72 w-42 h-fit mx-10 shadow-xl md:mt-0 mb-12  hover:scale-105  group ease-in-out transition duration-500 `}>
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-48" />
      </figure>
      <div className="card-body items-center text-center text-pallete ">
        {children}
        {/* <div className="card-actions w-full mt-2 flex justify-end">
          {type === "undangan" ? (
            <Link to="/form" state={{ cek: "undangan" }}>
              <button className="btn bg-pallete  text-white">Buat</button>
            </Link>
          ) : type === "permohonan" ? (
            <Link to="/form" state={{ cek: "permohonan" }}>
              <button className="btn bg-pallete  text-white">Buat</button>
            </Link>
          ) : (
            <Link to="/form" state={{ cek: "izin" }}>
              <button className="btn bg-pallete  text-white">Buat</button>
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
}

function Judul({ children }) {
  return <h2 className="card-title text-2xl  font-bold ">{children}</h2>;
}
function Desc({ children }) {
  return <p className=" leading-5 text-justify font-light">{children}</p>;
}
function Link({ children }) {
  return (
    <div className="card-actions w-full mt-2 flex justify-end">
      
      {children}
    </div>
  );
}

CardOption.Judul = Judul;
CardOption.Desc = Desc;
CardOption.Link = Link;
