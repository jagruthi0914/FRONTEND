import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import styles from "./Library.css";

const Library = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([
    {
      title: "Introduction to Algorithms",
      issueDate: "2024-01-10",
      returnDate: "2024-02-10",
      returned: false,
    },
  ]);

  const [availableBooks, setAvailableBooks] = useState([
    { title: "Clean Code", availableCopies: 5 },
    { title: "Eloquent JavaScript", availableCopies: 3 },
    { title: "Design Patterns", availableCopies: 2 },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [newBorrowerName, setNewBorrowerName] = useState("");

  const handleRegisterForBorrow = (book) => {
    setSelectedBook(book);
    setOpenDialog(true);
  };

  const handleConfirmBorrow = () => {
    if (!newBorrowerName) {
      alert("Please enter your name to register!");
      return;
    }

    if (selectedBook.availableCopies === 0) {
      alert("No copies available for this book!");
      setOpenDialog(false);
      return;
    }

    // Update borrowed books
    const newBorrow = {
      title: selectedBook.title,
      issueDate: new Date().toISOString().split("T")[0],
      returnDate: new Date(new Date().setDate(new Date().getDate() + 30))
        .toISOString()
        .split("T")[0],
      returned: false,
    };
    setBorrowedBooks((prev) => [...prev, newBorrow]);

    // Update available books count
    setAvailableBooks((prev) =>
      prev.map((book) =>
        book.title === selectedBook.title
          ? { ...book, availableCopies: book.availableCopies - 1 }
          : book
      )
    );

    setOpenDialog(false);
    alert("Successfully registered for borrowing!");
  };

  const calculateLateFee = (returnDate) => {
    const today = new Date();
    const dueDate = new Date(returnDate);

    if (today > dueDate) {
      const lateDays = Math.ceil((today - dueDate) / (1000 * 60 * 60 * 24));
      return lateDays * 5; // Example: $5 per day
    }
    return 0;
  };

  return (
    <Box className={styles.container}>
      <Typography className={styles.header}>Library Management</Typography>

      {/* Borrowed Books Section */}
      <Typography className={styles.subHeader}>Borrowed Books</Typography>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Title</TableCell>
              <TableCell>Issue Date</TableCell>
              <TableCell>Return Date</TableCell>
              <TableCell>Late Fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrowedBooks.map((book, index) => (
              <TableRow key={index}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.issueDate}</TableCell>
                <TableCell>{book.returnDate}</TableCell>
                <TableCell>${calculateLateFee(book.returnDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Available Books Section */}
      <Typography className={styles.subHeader}>Available Books</Typography>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Title</TableCell>
              <TableCell>Available Copies</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {availableBooks.map((book, index) => (
              <TableRow key={index}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.availableCopies}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleRegisterForBorrow(book)}
                    disabled={book.availableCopies === 0}
                  >
                    Register to Borrow
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Borrow Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Register for Borrowing</DialogTitle>
        <DialogContent>
          <Typography>{selectedBook?.title}</Typography>
          <TextField
            fullWidth
            label="Your Name"
            value={newBorrowerName}
            onChange={(e) => setNewBorrowerName(e.target.value)}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmBorrow} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Library;
