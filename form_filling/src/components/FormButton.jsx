import React from 'react';

export default function FormButton({ onReset }) {
  return (
    <div className="button-group">
      <button type="button" className="btn btn-reset" onClick={onReset}>
        Reset
      </button>
      <button type="submit" className="btn btn-submit">
        Submit
      </button>
    </div>
  );
}