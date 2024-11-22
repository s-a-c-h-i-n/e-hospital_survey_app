import React, { useState } from 'react';


const AdminPage = () => {
  // State to manage dropdown selection
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  
  // State to manage dynamic text fields
  const [textFields, setTextFields] = useState(['']);
  
  // Handle dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle dropdown change
  const handleDeptChange = (event) => {
    setSelectedDept(event.target.value);
  };

  // Handle adding new text field
  const handleAddField = () => {
    setTextFields([...textFields, '']);
  };

  // Handle removing the last text field
  const handleRemoveField = () => {
    if (textFields.length > 1) {
      setTextFields(textFields.slice(0, -1));
    }
  };

  // Handle text field change
  const handleFieldChange = (index, event) => {
    const newFields = [...textFields];
    newFields[index] = event.target.value;
    setTextFields(newFields);
  };

  return (
    <div className="form-container">
      <h1>Create a new survey page</h1>
      
      {/* Dropdown */}
      <label>Survey for:</label>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">--Choose an option--</option>
        <option value="Doctor">Doctor</option>
        <option value="Staff">Staff</option>
        <option value="Hospital">Hospital</option>
      </select>
      <br></br>
      <br></br>
      <label>Survey for which department?</label>
      <select value={selectedDept} onChange={handleDeptChange}>
        <option value="ER">ER</option>
        <option value="Cardio">Cardio</option>
        <option value="Pediatrics">Pediatrics</option>
        <option value="Nursing">Nursing</option>
      </select>
        <br></br>
        <br></br>
        <br></br>
      {/* Dynamic Text Fields */}
      {textFields.map((text, index) => (
        <div key={index} className="text-field-container">
          <label>Survey Question {index + 1}:</label>
          <br/>
          <textarea
            type="text"
            value={text}
            onChange={(event) => handleFieldChange(index, event)}
          />
        <br></br>
        <br></br>
        </div>
      ))}

      {/* Buttons */}
      <div>
        <button onClick={handleAddField} className="header-button">Add Question</button>
        <button onClick={handleRemoveField} className="header-button">Remove Question</button>
      </div>
    </div>
  );
}

export default AdminPage;