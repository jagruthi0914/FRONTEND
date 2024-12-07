import React, { useState } from 'react';
import './Cgpa.css';
// Sample data for subjects, marks, and CGPA for each semester
const semesterData = [
  {
    semester: 'Semester 1',
    subjects: [
      { subject: 'Mathematics', marks: 85, cgpa: 8.5 },
      { subject: 'Physics', marks: 78, cgpa: 7.8 },
      { subject: 'Chemistry', marks: 90, cgpa: 9.0 },
      { subject: 'English', marks: 75, cgpa: 7.5 },
    ],
  },
  {
    semester: 'Semester 2',
    subjects: [
      { subject: 'Computer Science', marks: 88, cgpa: 8.8 },
      { subject: 'Biology', marks: 92, cgpa: 9.2 },
      { subject: 'History', marks: 80, cgpa: 8.0 },
    ],
  },
  {
    semester: 'Semester 3',
    subjects: [
      { subject: 'Engineering Mechanics', marks: 82, cgpa: 8.2 },
      { subject: 'Electrical Engineering', marks: 76, cgpa: 7.6 },
      { subject: 'Programming', marks: 89, cgpa: 8.9 },
      { subject: 'Philosophy', marks: 70, cgpa: 7.0 },
    ],
  }
];

// Function to calculate total CGPA for a given semester
const calculateTotalCGPA = (semester) => {
  const totalMarks = semester.subjects.reduce((acc, curr) => acc + curr.marks, 0);
  const totalSubjects = semester.subjects.length;
  return (totalMarks / totalSubjects).toFixed(2);
};

const CGPA = () => {
  // State for selected semester and total CGPA
  const [selectedSemester, setSelectedSemester] = useState(semesterData[0].semester);
  const [totalCGPA, setTotalCGPA] = useState(calculateTotalCGPA(semesterData[0]));

  // Handle semester change
  const handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    setSelectedSemester(selectedSemester);

    // Find selected semester data from semesterData
    const selectedSemesterData = semesterData.find(semester => semester.semester === selectedSemester);
    setTotalCGPA(calculateTotalCGPA(selectedSemesterData));
  };

  const selectedSemesterData = semesterData.find(semester => semester.semester === selectedSemester);

  return (
    <div className="cgpa-container">
      <h2>Subject-wise CGPA</h2>

      {/* Semester Dropdown */}
      <div className="semester-selector">
        <label htmlFor="semester">Select Semester: </label>
        <select
          id="semester"
          value={selectedSemester}
          onChange={handleSemesterChange}
          className="semester-dropdown"
        >
          {semesterData.map((semester, index) => (
            <option key={index} value={semester.semester}>
              {semester.semester}
            </option>
          ))}
        </select>
      </div>

      {/* Semester-wise CGPA */}
      <div className="semester-section">
        <h3>{selectedSemester}</h3>
        <table className="cgpa-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks Obtained</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            {selectedSemesterData.subjects.map((subject, idx) => (
              <tr key={idx}>
                <td>{subject.subject}</td>
                <td>{subject.marks}</td>
                <td>{subject.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Semester Total CGPA */}
        <p><strong>Total CGPA for {selectedSemester}: {totalCGPA}</strong></p>
      </div>
    </div>
  );
};

export default CGPA;
