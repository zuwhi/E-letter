import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypingText() {
  const [text] = useTypewriter({
    words: ["Permohonan", "Undangan", "Izin "],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 200,
    deleteSpeed: 200,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <>
      <div className="flex items-end whitespace-nowrap">
        <h1 className=" md:text-3xl text-xl font-bold text-slate-500  mr-2"> Kamu bisa buat Surat</h1>
        <h1 className="md:text-3xl whitespace-nowrap text-xl font-bold text-blue-500">{text}</h1>
        <span className=" text-blue-600 text-2xl">
          <Cursor />
        </span>
      </div>
    </>
  );
}
