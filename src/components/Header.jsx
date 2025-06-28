import React from "react";
import { Box, Typography, Button, Avatar, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TypingText from "./TypingText";
import profilePhoto from './shivam.jpeg';


export default function Header({ githubUsername, linkedinUsername }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 8,
        px: 2,
        py: 4,
        backgroundColor: "#121212",
        color: "#f5f5f5",
        borderRadius: 3,
        maxWidth: 600,
        mx: "auto",
        boxShadow: "0 0 20px rgba(187, 134, 252, 0.6)",
      }}
    >
      <Avatar
        alt="Your Name"
        src={profilePhoto}
        sx={{
          width: 150,
          height: 150,
          mx: "auto",
          mb: 3,
          border: "3px solid #bb86fc",
          boxShadow: "0 0 15px #bb86fc",
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ color: "#bb86fc", fontWeight: "bold" }}
      >
        Shivam Chaudhary
      </Typography>
      <Box sx={{ mb: 3 }}>
        <TypingText
          sx={{
            color: "#e0b3ff",
            fontSize: "1.25rem",
            fontWeight: "500",
          }}
        />
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="outlined"
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{
            borderColor: "#bb86fc",
            color: "#bb86fc",
            fontWeight: "bold",
            px: 3,
            "&:hover": {
              backgroundColor: "#bb86fc",
              color: "#121212",
            },
          }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          href={`https://linkedin.com/in/${linkedinUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LinkedInIcon />}
          sx={{
            borderColor: "#bb86fc",
            color: "#bb86fc",
            fontWeight: "bold",
            px: 3,
            "&:hover": {
              backgroundColor: "#bb86fc",
              color: "#121212",
            },
          }}
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
}
