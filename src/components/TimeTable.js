import React, { useState } from 'react';
import './TimeTable.css';

const Timetable = () => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [registeredSubjects, setRegisteredSubjects] = useState({
    Semester1: ['Maths', 'Physics', 'Chemistry', 'Computer Science'],
    Semester2: ['Data Structures', 'Database Systems', 'Discrete Mathematics', 'Operating Systems'],
    Semester3: ['Algorithms', 'Machine Learning', 'Networks', 'Software Engineering'],
  });

  const [timetable, setTimetable] = useState(null);

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);

    // Generate Timetable based on the selected semester and registered subjects
    const subjects = registeredSubjects[semester];
    const newTimetable = generateTimetable(subjects);
    setTimetable(newTimetable);
  };

  // Function to generate timetable based on subjects
  const generateTimetable = (subjects) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timetable = [];

    // Distribute subjects across the week
    let subjectIndex = 0;
    for (let day of days) {
      const dailySchedule = [];
      for (let i = 0; i < 6; i++) { // 6 periods per day
        if (subjectIndex < subjects.length) {
          dailySchedule.push(subjects[subjectIndex]);
          subjectIndex++;
        } else {
          dailySchedule.push('Free'); // Fill the remaining periods with 'Free'
        }
      }
      timetable.push({ day, schedule: dailySchedule });
    }

    return timetable;
  };

  return (
    <div className="timetable-container">
      <h3>Timetable Generator</h3>
      
      {/* Semester Dropdown */}
      <div className="semester-select">
        <label>Select Semester:</label>
        <select onChange={handleSemesterChange} value={selectedSemester}>
          <option value="">-- Select Semester --</option>
          <option value="Semester1">Semester 1</option>
          <option value="Semester2">Semester 2</option>
          <option value="Semester3">Semester 3</option>
        </select>
      </div>

      {/* Display Timetable */}
      {timetable && (
        <div className="timetable">
          <h4>Timetable for {selectedSemester}</h4>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Period 1</th>
                <th>Period 2</th>
                <th>Period 3</th>
                <th>Period 4</th>
                <th>Period 5</th>
                <th>Period 6</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((daySchedule, index) => (
                <tr key={index}>
                  <td>{daySchedule.day}</td>
                  {daySchedule.schedule.map((subject, idx) => (
                    <td key={idx}>{subject}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Timetable;
