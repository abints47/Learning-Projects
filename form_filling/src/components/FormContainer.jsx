import React, { useState } from 'react';
import FormField from './FormField';
import FormButtons from './FormButton';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  gender: 'Male',
  subjects: { English: true, Maths: false, Physics: false },
  resume: null,
  url: '',
  choice: '',
  about: ''
};

export default function FormContainer() {
  const [formData, setFormData] = useState(initialFormState);

  // Unified Handler for text, select, textareas, and files
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  // Specific Handler for Nested Checkboxes
  const handleCheckboxChange = (subjectName) => {
    setFormData((prev) => ({
      ...prev,
      subjects: {
        ...prev.subjects,
        [subjectName]: !prev.subjects[subjectName]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data: ', formData);
    alert('Form submitted successfully! Check console for data.');
  };

  const handleReset = () => {
    setFormData(initialFormState);
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Form in React</h2>
      <form onSubmit={handleSubmit}>
        
        <FormField label="First Name*" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} />
        <FormField label="Last Name*" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} />
        <FormField label="Enter Email*" name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
        <FormField label="Contact*" name="contact" type="tel" placeholder="Enter Mobile number" value={formData.contact} onChange={handleChange} />

        {/* Gender Radio Group */}
        <div className="form-group">
          <label>Gender*</label>
          <div className="radio-checkbox-group">
            {['Male', 'Female', 'Other'].map((g) => (
              <label key={g}>
                <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Subjects Checkbox Group */}
        <div className="form-group">
          <label>Your best Subject</label>
          <div className="radio-checkbox-group">
            {Object.keys(formData.subjects).map((sub) => (
              <label key={sub}>
                <input type="checkbox" checked={formData.subjects[sub]} onChange={() => handleCheckboxChange(sub)} />
                {sub}
              </label>
            ))}
          </div>
        </div>

        <FormField label="Upload Resume*" name="resume" type="file" onChange={handleChange} />
        <FormField label="Enter URL*" name="url" type="url" placeholder="Enter url" value={formData.url} onChange={handleChange} />
        <FormField label="Select your choice" name="choice" type="select" options={['Option 1', 'Option 2', 'Option 3']} value={formData.choice} onChange={handleChange} />
        <FormField label="About" name="about" type="textarea" placeholder="About your self" value={formData.about} onChange={handleChange} />

        <FormButtons onReset={handleReset} />
      </form>
    </div>
  );
}