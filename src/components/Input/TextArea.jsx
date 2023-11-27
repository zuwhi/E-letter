export default function TextArea({ error, label, name, placeholder, handleChange, value }) {
    const inputClass = `bg-blue-50 px-4 py-2 input min-h-[5rem] input-bordered w-full mt-2 rounded-xl ${error ? "border-red-500" : ""}`;

  return (
    <div className="w-full mt-2">
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="10"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={inputClass}
      ></textarea>
      <p className="text-red-500">{error}</p>
    </div>
  );
}
