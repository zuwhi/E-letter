import React from 'react';

export default function Select({ error,label, name, variant, handleChange, value, options }) {
  return (
    <div className={`form-control w-full ${variant}`}>
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="select select-bordered w-full bg-blue-50"
      >
        <option value="">Pilih {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className='text-red-500'>{error}</p>
    </div>
  );
}
