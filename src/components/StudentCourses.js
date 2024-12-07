import React from "react";
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from "@mui/material";
import "./StudentCourses.css"; // Import the CSS file for additional styling

const coursesData = [
  {
    id: 1,
    title: "Introduction to Programming",
    instructor: "Dr. John Doe",
    schedule: "Mon & Wed - 10:00 AM to 11:30 AM",
    materials: [
      { id: 101, title: "Lecture 1 Slides", link: "/materials/programming-lecture1.pdf" },
      { id: 102, title: "Assignment 1", link: "/materials/programming-assignment1.pdf" },
    ],
  },
  {
    id: 2,
    title: "Data Structures",
    instructor: "Prof. Jane Smith",
    schedule: "Tue & Thu - 2:00 PM to 3:30 PM",
    materials: [
      { id: 201, title: "Lecture Notes", link: "/materials/ds-lecture-notes.pdf" },
      { id: 202, title: "Exercise Problems", link: "/materials/ds-exercise.pdf" },
    ],
  },
];

const CoursesModule = () => {
  return (
    <Box className="courses-container">
      <Typography variant="h4" className="courses-header">
        My Courses
      </Typography>
      <Grid container spacing={3}>
        {coursesData.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card className="course-card">
              <CardContent>
                <Typography variant="h6" className="course-title">
                  {course.title}
                </Typography>
                <Typography variant="body2" className="course-instructor">
                  Instructor: {course.instructor}
                </Typography>
                <Typography variant="body2" className="course-schedule">
                  Schedule: {course.schedule}
                </Typography>
                <Typography variant="subtitle1" className="materials-header">
                  Materials:
                </Typography>
                <ul className="materials-list">
                  {course.materials.map((material) => (
                    <li key={material.id}>
                      <Button
                        className="material-link"
                        href={material.link}
                        target="_blank"
                      >
                        {material.title}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" className="view-more-btn">
                  View More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesModule;
