import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Alert,
} from '@mui/material';
import './StudentAttendence.css'; 

const attendanceData = [
  { subject: "Mathematics", totalClasses: 50, attendedClasses: 45 },
  { subject: "Computer Science", totalClasses: 40, attendedClasses: 36 },
  { subject: "Physics", totalClasses: 30, attendedClasses: 25 },
  { subject: "Chemistry", totalClasses: 25, attendedClasses: 20 },
  { subject: "Biology", totalClasses: 35, attendedClasses: 30 },
];

const StudentAttendance = () => {
  const calculatePercentage = (attended, total) => {
    return Math.round((attended / total) * 100);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const handleAttendanceAlert = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <Container maxWidth="lg" className="attendance-page">
      <Box className="page-header">
        <Typography variant="h4" className="page-title">Attendance Summary</Typography>
        <Typography variant="body1" className="page-subtitle">
          Track your attendance for each subject to stay updated.
        </Typography>
      </Box>

      {alertVisible && (
        <Alert severity="warning" className="attendance-alert">
          Attendance for one or more subjects is below 75%! Please take action.
        </Alert>
      )}

      <TableContainer component={Paper} className="attendance-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Subject</strong></TableCell>
              <TableCell align="center"><strong>Total Classes</strong></TableCell>
              <TableCell align="center"><strong>Classes Attended</strong></TableCell>
              <TableCell align="center"><strong>Attendance %</strong></TableCell>
              <TableCell align="center"><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((subject, index) => {
              const attendancePercentage = calculatePercentage(subject.attendedClasses, subject.totalClasses);
              const attendanceStatus = attendancePercentage >= 75 ? "Satisfactory" : "Low";

              if (attendancePercentage < 75 && !alertVisible) {
                handleAttendanceAlert();
              }

              return (
                <TableRow key={index}>
                  <TableCell>{subject.subject}</TableCell>
                  <TableCell align="center">{subject.totalClasses}</TableCell>
                  <TableCell align="center">{subject.attendedClasses}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LinearProgress
                        variant="determinate"
                        value={attendancePercentage}
                        sx={{
                          width: '100%',
                          mr: 1,
                          bgcolor: attendancePercentage < 75 ? '#ffcccb' : '#e0e0e0',
                        }}
                      />
                      {attendancePercentage}%
                    </Box>
                  </TableCell>
                  <TableCell align="center" style={{ color: attendancePercentage >= 75 ? 'green' : 'red' }}>
                    {attendanceStatus}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StudentAttendance;
