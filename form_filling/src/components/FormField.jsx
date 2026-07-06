import React from 'react';

export default function FormField({ label, name, type = 'text', value, onChange, placeholder, options }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      
      {type === 'textarea' ? (
        <textarea
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows="4"
        />
      ) : type === 'select' ? (
        <select name={name} className="form-control" value={value} onChange={onChange}>
          <option value="">Select your Ans</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={type === 'file' ? undefined : value}
          onChange={onChange}
        />
      )}
    </div>
  );
}