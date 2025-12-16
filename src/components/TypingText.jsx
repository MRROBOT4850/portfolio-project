import React from "react";
import { Typography } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypingText() {
const [text] = useTypewriter({
  words: [
  "Deploying web applications on Azure.",
  "Automating CI/CD pipelines with Docker & GitHub Actions.",
  "Full Stack MERN Developer.",
  "Building seamless, responsive UIs with React & Material-UI.",
  "Developing secure and scalable backend APIs using Node.js & Express.",
  "Managing and working with MongoDB and SQL databases.",
]
,
  loop: 0,
  delaySpeed: 2000,
});
  return (
    <>
      <Typography
        variant="h6"
        sx={{ 
          fontStyle: "italic", 
          mb: 1, 
          minHeight: 40, 
          color: "#d1c4e9" 
        }}
      >
        {text}
        <Cursor cursorColor="#bb86fc" />
      </Typography>
      <Typography
        variant="body1"
        sx={{ 
          color: "#ccc", 
          maxWidth: 500, 
          mx: "auto", 
          mb: 4,
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
     Passionate about building and deploying full-stack web apps on Azure, with hands-on experience in Docker and CI/CD with GitHub Actions.
    
    Successfully deployed 4 web applications, delivering scalable, cloud-native solutions with a focus on automation and quality
      </Typography>
    </>
  );
}
