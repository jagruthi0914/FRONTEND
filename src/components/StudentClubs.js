import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import "./StudentClubs.css";

const availableClubs = [
  { id: 1, name: "Coding Club", description: "Explore programming and hackathons." },
  { id: 2, name: "Drama Club", description: "Perform and enjoy theatrical arts." },
  { id: 3, name: "Photography Club", description: "Learn and practice photography skills." },
  { id: 4, name: "Sports Club", description: "Participate in various sports activities." },
];

const mockActivities = {
  "Coding Club": [
    { date: "2024-12-05", activity: "Hackathon: Build an AI App" },
    { date: "2024-12-15", activity: "Workshop: Introduction to Blockchain" },
  ],
  "Drama Club": [
    { date: "2024-12-10", activity: "Rehearsals for Annual Play" },
    { date: "2024-12-20", activity: "Theatre Improvisation Workshop" },
  ],
  "Photography Club": [
    { date: "2024-12-12", activity: "Photo Walk: Urban Landscape" },
    { date: "2024-12-22", activity: "Editing Workshop: Lightroom Basics" },
  ],
  "Sports Club": [
    { date: "2024-12-08", activity: "Intercollegiate Football Tournament" },
    { date: "2024-12-18", activity: "Badminton Training Session" },
  ],
};

const StudentClubs = () => {
  const [joinedClubs, setJoinedClubs] = useState([]);

  const handleJoinClub = (club) => {
    if (!joinedClubs.includes(club)) {
      setJoinedClubs([...joinedClubs, club]);
    }
  };

  const handleLeaveClub = (club) => {
    setJoinedClubs(joinedClubs.filter((c) => c !== club));
  };

  return (
    <Box className="student-clubs" sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Club Activities
      </Typography>

      {/* Available Clubs */}
      <Typography variant="h5" gutterBottom>
        Available Clubs
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {availableClubs.map((club) => (
          <Grid item xs={12} sm={6} md={4} key={club.id}>
            <Card className="club-card">
              <CardContent>
                <Typography variant="h6" color="primary">
                  {club.name}
                </Typography>
                <Typography>{club.description}</Typography>
              </CardContent>
              <CardActions>
                {joinedClubs.includes(club.name) ? (
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleLeaveClub(club.name)}
                  >
                    Leave Club
                  </Button>
                ) : (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleJoinClub(club.name)}
                  >
                    Join Club
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Joined Club Activities */}
      {joinedClubs.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom>
            Upcoming Activities for Joined Clubs
          </Typography>
          {joinedClubs.map((club) => (
            <Box key={club} className="club-activity-box" sx={{ mb: 3 }}>
              <Typography variant="h6" color="primary">
                {club}
              </Typography>
              <List>
                {mockActivities[club].map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        primary={`Date: ${activity.date}`}
                        secondary={`Activity: ${activity.activity}`}
                      />
                    </ListItem>
                    {index < mockActivities[club].length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default StudentClubs;
