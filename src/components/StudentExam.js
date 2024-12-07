import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import "./StudentExam.css";

// Submenu Components
const CGPA = () => (
  <Box>
    <Typography variant="h6">Cumulative Grade Point Average (CGPA)</Typography>
    <Typography>View your CGPA details semester-wise.</Typography>
  </Box>
);

const ExamSheets = () => (
  <Box>
    <Typography variant="h6">Exam Sheets</Typography>
    <Typography>Download your exam answer sheets for review.</Typography>
  </Box>
);

const TakeExam = () => (
  <Box>
    <Typography variant="h6">Take Exam</Typography>
    <Typography>Participate in online exams scheduled by your institution.</Typography>
  </Box>
);

const CourseInternals = () => (
  <Box>
    <Typography variant="h6">Course Internals</Typography>
    <Typography>View and track your internal assessment marks.</Typography>
  </Box>
);

const subTopics = [
  { id: 1, label: "CGPA", component: <CGPA /> },
  { id: 2, label: "Exam Sheets", component: <ExamSheets /> },
  { id: 3, label: "Take Exam", component: <TakeExam /> },
  { id: 4, label: "Course Internals", component: <CourseInternals /> },
];

const ExamSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box className="exam-section" sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Exam Section
      </Typography>

      {/* Submenu Navigation */}
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {subTopics.map((topic, index) => (
            <Tab key={topic.id} label={topic.label} />
          ))}
        </Tabs>
      </Paper>

      {/* Submenu Content */}
      <Box className="submenu-content">
        {subTopics[activeTab]?.component}
      </Box>
    </Box>
  );
};

export default ExamSection;
