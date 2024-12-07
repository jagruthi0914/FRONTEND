import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import "./StudentCounselor.css"; // Import CSS for styling

const assignedCounselor = {
  name: "Dr. Sarah Connor",
  email: "sarah.connor@example.com",
  contact: "+1-234-567-890",
};

const mockSessions = {
  upcoming: [
    { id: 1, date: "2024-12-10", time: "10:00 AM", topic: "Stress Management" },
    { id: 2, date: "2024-12-20", time: "2:00 PM", topic: "Career Guidance" },
  ],
  past: [
    { id: 3, date: "2024-11-01", time: "11:00 AM", topic: "Study Strategies", feedback: "Very helpful session." },
  ],
};

const CounselingDiary = () => {
  const [sessions, setSessions] = useState(mockSessions);
  const [openDialog, setOpenDialog] = useState(false);
  const [newSession, setNewSession] = useState({ date: "", time: "", topic: "" });

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSession({ ...newSession, [name]: value });
  };

  const handleBookSession = () => {
    setSessions((prev) => ({
      ...prev,
      upcoming: [...prev.upcoming, { id: prev.upcoming.length + 1, ...newSession }],
    }));
    handleDialogClose();
  };

  return (
    <Box className="counseling-diary" sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Counseling Diary
      </Typography>

      {/* Assigned Counselor Section */}
      <Card className="assigned-counselor-card" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" color="primary">
            Assigned Counselor
          </Typography>
          <Typography>Name: {assignedCounselor.name}</Typography>
          <Typography>Email: {assignedCounselor.email}</Typography>
          <Typography>Contact: {assignedCounselor.contact}</Typography>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Typography variant="h5" gutterBottom>
        Upcoming Sessions
      </Typography>
      {sessions.upcoming.length > 0 ? (
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {sessions.upcoming.map((session) => (
            <Grid item xs={12} sm={6} md={4} key={session.id}>
              <Card className="session-card">
                <CardContent>
                  <Typography>Date: {session.date}</Typography>
                  <Typography>Time: {session.time}</Typography>
                  <Typography>Topic: {session.topic}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No upcoming sessions.</Typography>
      )}

      {/* Past Sessions */}
      <Typography variant="h5" gutterBottom>
        Past Sessions
      </Typography>
      {sessions.past.length > 0 ? (
        <Grid container spacing={2}>
          {sessions.past.map((session) => (
            <Grid item xs={12} sm={6} md={4} key={session.id}>
              <Card className="session-card">
                <CardContent>
                  <Typography>Date: {session.date}</Typography>
                  <Typography>Time: {session.time}</Typography>
                  <Typography>Topic: {session.topic}</Typography>
                  <Typography>Feedback: {session.feedback}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No past sessions.</Typography>
      )}

      {/* Book New Session */}
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleDialogOpen}>
          Book New Session
        </Button>
      </Box>

      {/* Dialog for Booking Session */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Book a New Session</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Date"
            type="date"
            name="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Time"
            type="time"
            name="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Topic"
            type="text"
            name="topic"
            fullWidth
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleBookSession} color="primary">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CounselingDiary;
