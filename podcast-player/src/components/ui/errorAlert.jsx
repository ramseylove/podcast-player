import { Alert, AlertTitle, Box, Button } from "@mui/material";
import React from "react";

function ErrorAlert({ message = "Sorry there was an error" }) {
  return (
    <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small">
            Close
          </Button>
        }
      >
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
}

export default ErrorAlert;
