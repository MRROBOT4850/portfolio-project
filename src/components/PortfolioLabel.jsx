import React from "react";
import { Box, Typography } from "@mui/material";

export default function PortfolioLabel() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 12,
        left: 12,
        zIndex: 1200,
        backgroundColor: "#1e1e2f",
        px: 2,
        py: 0.5,
        borderRadius: 1,
        boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "#bb86fc",
          fontWeight: "bold",
          fontFamily: "monospace",
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
          letterSpacing: 1,
        }}
      >
        Portfolio
      </Typography>
    </Box>
  );
}
