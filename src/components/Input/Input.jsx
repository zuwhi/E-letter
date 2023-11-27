export default function Input({ error,label, placeholder, name, variant, type = "text", handleChange, value,  }) {
  const inputClass = `bg-blue-50 input input-bordered w-full ${error ? "border-red-500" : ""}`;
  return (
    <div className={`form-control w-full ${variant}`}>
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} onChange={handleChange} value={value} className={inputClass} />
      <p className="text-red-500">{error }</p>
    </div>
  );
}
