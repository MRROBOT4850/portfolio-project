import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Chip
} from "@mui/material";
import {
  SiReact, SiRedux, SiExpress, SiMongodb, SiMysql, SiNodedotjs
} from "react-icons/si";
import { MdWidgets, MdLocationOn } from "react-icons/md";

const techIconMap = {
  React: <SiReact size={18} color="#61dafb" />,
  Redux: <SiRedux size={18} color="#764abc" />,
  "Material-UI": <MdWidgets size={18} color="#007fff" />,
  "Express.js": <SiExpress size={18} color="#ffffff" />,
  MongoDB: <SiMongodb size={18} color="#4DB33D" />,
  SQL: <SiMysql size={18} color="#00758f" />,
  "Node.js": <SiNodedotjs size={18} color="#3c873a" />,
  Geocoder: <MdLocationOn size={18} color="#61dafb" />, // simple icon
};

const projects = [
   {
    title: "FixItNow",
    description: "Backend for the platform in which users to request services and workers to accept or reject jobs .",
    technologies: ["Node.js", "Express.js", "MongoDB", "Geocoder"],
    website: "https://fixitnow-backend-d40h.onrender.com/api-docs/",
  },
  {
    title: "Anonymous Chat Room",
    description: "WebSocket chat room (anonymous) using Express.js, no DB.",
    technologies: ["Node.js", "Express.js", "Material-UI"],
    website: "https://ghost-talk-tan.vercel.app/",
  },
  {
    title: "Movie App",
    description: "Fullstack Web-app powered by TMDB API and MongoDB.",
    technologies: ["React", "Material-UI"],
    website: "https://movie-maniacs.vercel.app/",
  },
  {
    title: "Encryption Visualization Lab",
    description: "Visual AES, Caesar, RSA encryption demos.",
    technologies: ["React", "Material-UI", "Crypto-Js"],
    website: "https://cipher-visualization-lab.vercel.app",
  },
 
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: "#121212", color: "#f5f5f5" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 6,
          color: "#bb86fc",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          px: 3,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map(({ title, description, technologies, website }) => (
          <Box
            key={title}
            sx={{
              width: { xs: "100%", sm: "47%", md: "30%" },
              minWidth: "280px",
              maxWidth: "360px",
              flexGrow: 1,
            }}
          >
            <Card
              elevation={6}
              sx={{
                height: "100%",
                backgroundColor: "#1e1e2f",
                borderRadius: 4,
                color: "#e0e0e0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 24px rgba(187, 134, 252, 0.4)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: "#e0b3ff" }} gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }} color="gray">
                  {description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {technologies.map((tech) => (
                    <Chip
                      key={tech}
                      icon={techIconMap[tech]}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: "#2c2c3c",
                        color: "#bb86fc",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#3c2c4f",
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
                <Button
                  variant="outlined"
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: "#bb86fc",
                    color: "#bb86fc",
                    "&:hover": {
                      backgroundColor: "#bb86fc",
                      color: "#121212",
                    },
                  }}
                >
                  Visit Website
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
