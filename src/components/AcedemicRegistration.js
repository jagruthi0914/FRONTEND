import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Divider,
} from '@mui/material';
import './AcedemicRegistration.css';
const courses = [
  { id: 1, name: "Mathematics", semester: "Fall", instructor: "Dr. Smith", credits: 3, timetable: "Mon-Wed-Fri 10:00 AM - 12:00 PM" },
  { id: 2, name: "Computer Science", semester: "Fall", instructor: "Dr. Johnson", credits: 4, timetable: "Mon-Wed-Fri 2:00 PM - 4:00 PM" },
  { id: 3, name: "Physics", semester: "Spring", instructor: "Dr. Lee", credits: 3, timetable: "Tue-Thu 9:00 AM - 11:00 AM" },
  { id: 4, name: "Chemistry", semester: "Spring", instructor: "Dr. Patel", credits: 3, timetable: "Mon-Wed 1:00 PM - 3:00 PM" },
  { id: 5, name: "Biology", semester: "Fall", instructor: "Dr. Brown", credits: 2, timetable: "Tue-Thu 3:00 PM - 5:00 PM" },
  { id: 6, name: "History", semester: "Fall", instructor: "Dr. Walker", credits: 2, timetable: "Mon-Wed-Fri 1:00 PM - 2:00 PM" },
];
const AcademicRegistration = () => {
  const [selectedSemester, setSelectedSemester] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showConflictAlert, setShowConflictAlert] = useState(false);

  const filteredCourses = courses.filter(course => course.semester === selectedSemester);

  const handleCourseSelect = (course) => {
    setSelectedCourses((prev) => {
      if (prev.includes(course)) {
        return prev.filter(item => item !== course);
      }
      return [...prev, course];
    });
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedCourses([]);
    setShowConflictAlert(false);
  };

  const handleRegister = () => {
    const timetableConflict = selectedCourses.some(
      (course, i, arr) => arr.findIndex(c => c.timetable === course.timetable) !== i
    );
    if (timetableConflict) {
      setShowConflictAlert(true);
    } else {
      setShowConflictAlert(false);
      alert("Courses successfully registered!");
    }
  };

  return (
    <Container maxWidth="lg" className="academic-registration-page">
      <Box className="page-header">
        <Typography variant="h4" className="page-title">Academic Registration</Typography>
      </Box>

    
      <Box className="semester-selection" sx={{ mb: 4 }}>
        <Typography variant="h6">Select Semester</Typography>
        <select value={selectedSemester} onChange={handleSemesterChange} className="semester-select">
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
        </select>
      </Box>

      <Typography variant="h6" className="section-title">
        Available Courses for {selectedSemester} Semester
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Grid container spacing={2}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Box className="course-card">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCourses.includes(course)}
                    onChange={() => handleCourseSelect(course)}
                    color="primary"
                  />
                }
                label={
                  <div>
                    <Typography variant="subtitle1" className="course-name">{course.name}</Typography>
                    <Typography variant="body2" className="course-details">Instructor: {course.instructor}</Typography>
                    <Typography variant="body2" className="course-details">Credits: {course.credits}</Typography>
                    <Typography variant="body2" className="course-details">Timetable: {course.timetable}</Typography>
                  </div>
                }
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      
      {showConflictAlert && (
        <Alert severity="error" className="conflict-alert">
          Timetable conflict detected! Please select courses with non-overlapping schedules.
        </Alert>
      )}

    
      <Box sx={{ mt: 4 }} className="register-section">
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          disabled={selectedCourses.length === 0}
        >
          Confirm Registration
        </Button>
      </Box>

      {/* Selected Courses */}
      {selectedCourses.length > 0 && (
        <Box sx={{ mt: 5 }} className="selected-courses">
          <Typography variant="h6" className="section-title">Selected Courses</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Course Name</TableCell>
                <TableCell>Instructor</TableCell>
                <TableCell>Credits</TableCell>
                <TableCell>Timetable</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>{course.credits}</TableCell>
                  <TableCell>{course.timetable}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Container>
  );
};

export default AcademicRegistration;
