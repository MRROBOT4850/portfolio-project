import React from "react";
import { Typography } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypingText() {
const [text] = useTypewriter({
  words: [
    "Full Stack MERN Developer.",
    "Building seamless UIs with React & Material-UI.",
    "Creating robust APIs with Node.js & Express.",
    "Working with MongoDB and SQL databases.",
  ],
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
        Passionate about crafting clean, scalable, and efficient full-stack web applications. 
        Dedicated to continuous learning and delivering quality solutions that make a difference. 
        Looking forward to contributing my skills to dynamic teams and exciting projects.
      </Typography>
    </>
  );
}
