import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SiReact, SiRedux, SiExpress, SiMongodb, SiMysql, SiNodedotjs
} from "react-icons/si";
import { MdWidgets } from "react-icons/md";

const skills = [
  { label: "React", icon: <SiReact size={32} color="#61dafb" /> },
  { label: "Redux", icon: <SiRedux size={32} color="#764abc" /> },
  { label: "Material-UI", icon: <MdWidgets size={32} color="#007fff" /> },
  { label: "Express.js", icon: <SiExpress size={32} color="#ffffff" /> },
  { label: "MongoDB", icon: <SiMongodb size={32} color="#4DB33D" /> },
  { label: "SQL", icon: <SiMysql size={32} color="#00758f" /> },
  { label: "Node.js", icon: <SiNodedotjs size={32} color="#3c873a" /> },
];

export default function Skills() {
  return (
    <>
    <Box id="skills" sx={{ py: 10, backgroundColor: "#1a1a2f", color: "#fff" }}>
      <Typography variant="h4" sx={{ textAlign: "center", color: "#bb86fc", mb: 5 }}>
        My Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map(skill => (
          <Grid key={skill.label} sx={{ width: 120 }}>
            <Paper elevation={6} sx={{
              p: 3, borderRadius: 3, backgroundColor: "#2b2b3d", color: "#fff",
              textAlign: "center", transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(187, 134, 252, 0.4)",
              },
            }}>
              {skill.icon}
              <Typography variant="body2" sx={{ mt: 1 }}>
                {skill.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    <br />
    </>
  );
}
