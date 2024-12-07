import React, { useState } from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import styles from "./Hallticket.css";

const HallTicket = () => {
  const [hallTickets, setHallTickets] = useState([
    {
      examName: "Semester 1 Final Exam",
      dateIssued: "2024-01-15",
      downloadLink: "/halltickets/sem1.pdf",
    },
    {
      examName: "Semester 2 Midterm Exam",
      dateIssued: "2024-03-01",
      downloadLink: "/halltickets/sem2mid.pdf",
    },
    {
      examName: "Semester 2 Final Exam",
      dateIssued: "2024-05-10",
      downloadLink: "/halltickets/sem2final.pdf",
    },
  ]);

  const handleDownload = (link) => {
    // Simulate file download
    window.open(link, "_blank");
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.header}>Hall Ticket Issuance</Typography>
      <Typography className={styles.subHeader}>View and download your exam hall tickets below:</Typography>
      
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Exam Name</TableCell>
              <TableCell>Date Issued</TableCell>
              <TableCell>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hallTickets.map((ticket, index) => (
              <TableRow key={index}>
                <TableCell>{ticket.examName}</TableCell>
                <TableCell>{ticket.dateIssued}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<CloudDownloadIcon />}
                    onClick={() => handleDownload(ticket.downloadLink)}
                    className={styles.downloadButton}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HallTicket;
