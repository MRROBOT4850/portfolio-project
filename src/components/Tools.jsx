import React from "react";
import { Box, Typography, Chip, Card, CardContent } from "@mui/material";
import {
  SiGithub,
  SiGit,
  SiPostman,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code"; 

const tools = [
  { name: "VS Code", icon: <CodeIcon sx={{ fontSize: 20, color: "#007ACC" }} /> },
  { name: "GitHub", icon: <SiGithub size={20} color="#fff" /> },
  { name: "Git", icon: <SiGit size={20} color="#f05032" /> },
  { name: "Postman", icon: <SiPostman size={20} color="#FF6C37" /> },
  { name: "Docker", icon: <SiDocker size={20} color="#2496ED" /> },
  { name: "Vercel", icon: <SiVercel size={20} color="#000" /> },
];

export default function Tools() {
  return (
    <>
    <br />
     <br />
    <Card
      elevation={6}
      sx={{
        backgroundColor: "#1e1e2f",
        borderRadius: 4,
        mb: 6,
        px: 3,
        py: 4,
        color: "#bb86fc",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            textAlign: "center",
            color: "#bb86fc",
          }}
        >
          Tools
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {tools.map(({ name, icon }) => (
            <Chip
              key={name}
              icon={icon}
              label={name}
              sx={{
                backgroundColor: "#2c2c3c",
                color: "#bb86fc",
                fontWeight: "bold",
                fontSize: "0.9rem",
                padding: "0 8px",
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
    </>
  );
}
