import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import "./Studentpayment.css";
const FeePayment = () => {
  const [feeType, setFeeType] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [upiId, setUpiId] = useState("");
  const [internetBankingDetails, setInternetBankingDetails] = useState({
    bankName: "",
    accountNumber: "",
  });

  const feeTypes = [
    { label: "Hostel Fee", value: "hostel" },
    { label: "Semester Fee", value: "semester" },
    { label: "Exam Fee", value: "exam" },
    { label: "Other Fees", value: "other" },
  ];

  const handleSubmit = () => {
    if (
      !feeType ||
      !amount ||
      isNaN(amount) ||
      Number(amount) <= 0 ||
      !email ||
      !phoneNumber ||
      !paymentMethod
    ) {
      alert("Please fill all required fields with valid information.");
      return;
    }

    // Mock submission logic
    alert(`Payment submitted successfully!`);
  };

  const renderPaymentDetails = () => {
    switch (paymentMethod) {
      case "creditCard":
      case "debitCard":
        return (
          <Box>
            <TextField
              label="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
              fullWidth
              required
            />
            <TextField
              label="Expiry Date (MM/YY)"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
              fullWidth
              required
            />
            <TextField
              label="CVV"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
              fullWidth
              required
              type="password"
            />
            <TextField
              label="Cardholder Name"
              value={cardDetails.name}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, name: e.target.value })
              }
              fullWidth
              required
            />
          </Box>
        );
      case "upi":
        return (
          <Box>
            <TextField
              label="UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              fullWidth
              required
            />
            <Typography sx={{ mt: 2 }}>OR Scan QR Code:</Typography>
            <Box className="upi-scanner">
              <img
                src="jpg"
                alt="UPI QR Code"
                className="upi-qr"
              />
            </Box>
          </Box>
        );
      case "internetBanking":
        return (
          <Box>
            <TextField
              label="Bank Name"
              value={internetBankingDetails.bankName}
              onChange={(e) =>
                setInternetBankingDetails({
                  ...internetBankingDetails,
                  bankName: e.target.value,
                })
              }
              fullWidth
              required
            />
            <TextField
              label="Account Number"
              value={internetBankingDetails.accountNumber}
              onChange={(e) =>
                setInternetBankingDetails({
                  ...internetBankingDetails,
                  accountNumber: e.target.value,
                })
              }
              fullWidth
              required
            />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box className="fee-payment" sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Fee Payment Portal
      </Typography>
      <Paper sx={{ p: 3, mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              select
              label="Fee Type"
              value={feeType}
              onChange={(e) => setFeeType(e.target.value)}
              fullWidth
              required
            >
              {feeTypes.map((type, index) => (
                <MenuItem key={index} value={type.label}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
              required
              type="number"
              placeholder="Enter amount to pay"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              type="email"
              placeholder="Enter your email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              required
              type="tel"
              placeholder="Enter your phone number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              fullWidth
              multiline
              rows={3}
              placeholder="Optional remarks for the payment"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Payment Method:</Typography>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel
                value="creditCard"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel
                value="debitCard"
                control={<Radio />}
                label="Debit Card"
              />
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              <FormControlLabel
                value="internetBanking"
                control={<Radio />}
                label="Internet Banking"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>{renderPaymentDetails()}</Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
            >
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FeePayment;
