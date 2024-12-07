import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Rating,
  Grid,
  Paper,
} from "@mui/material";
import "./StudentFeedback.css";

const FeedbackSystem = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const facultyList = [
    "Dr. John Doe",
    "Dr. Jane Smith",
    "Prof. Alan Walker",
    "Dr. Emily Davis",
  ];

  const handleSubmit = () => {
    if (!selectedFaculty || rating === 0 || !comments.trim()) {
      alert("Please fill in all fields before submitting!");
      return;
    }

    // Mock submission logic
    setSuccessMessage(`Feedback submitted for ${selectedFaculty}!`);
    setSelectedFaculty("");
    setRating(0);
    setComments("");
  };

  return (
    <Box className="feedback-system" sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Feedback System
      </Typography>
      <Paper sx={{ p: 3, mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              select
              label="Select Faculty"
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
              fullWidth
              required
            >
              {facultyList.map((faculty, index) => (
                <MenuItem key={index} value={faculty}>
                  {faculty}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography component="legend">Rate Faculty</Typography>
            <Rating
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              size="large"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              fullWidth
              multiline
              rows={4}
              placeholder="Write your feedback here..."
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
            >
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
        {successMessage && (
          <Typography variant="h6" color="success" sx={{ mt: 3 }}>
            {successMessage}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default FeedbackSystem;
