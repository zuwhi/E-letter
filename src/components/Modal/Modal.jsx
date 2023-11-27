// import { useState } from "react";
// import Input from "../Input/Input";
// import OpenAI from "openai";

// const openaii = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export default function Modal({ variant }) {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await openaii.createCompletion({ model: "text-davinci-002", prompt: input, max_tokens: 100 });
//       setOutput(response.data.choices[0].text);
//     } catch (error) {
//       console.error("Error fetching data from OpenAI:", error);
//     }
//   };

//   return (
//     <>
//       <button className={`${variant}`} onClick={() => document.getElementById("my_modal_3").showModal()}>
//         open modal
//       </button>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box w-11/12 max-w-5xl">
//           <form method="dialog">
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>

//           <form onSubmit={handleSubmit}>
//             <Input label="keyword" placeholder="masukkan keyword" name="keyword" value={input} onChange={(e) => setInput(e.target.value)}></Input>
//             <button type="submit" className="btn bg-pallete mt-5">
//               Cari
//             </button>
//           </form>

//           <Input label="keyword" placeholder="masukkan keyword" name="keyword" value={output || ""}></Input>
//         </div>
//       </dialog>
//     </>
//   );
// }
