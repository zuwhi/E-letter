// Radio.jsx
export default function Radio({ label, name, variant, handleChange, value, options }) {
    return (
      <div className={`form-control w-full ${variant}`}>
        <label className="label" htmlFor={name}>
          <span className="label-text">{label}</span>
        </label>
        <div className="flex items-center gap-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={`${name}_${option.value}`}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={handleChange}
                className="radio radio-bordered"
              />
              <label htmlFor={`${name}_${option.value}`} className="ml-2">{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
  