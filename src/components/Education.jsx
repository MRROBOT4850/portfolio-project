import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const education = [
  {
    institution: "Moradabad Institute of Technology ",
    degree: "Masters of Computer Applications",
    year: "2024- Pursuing",
  },
  {
    institution: "Teerthanker Mahaveer University",
    degree: "Bachelor of Computer Applications",
    year: "2021 - 2024",
  },
];

export default function Education() {
  return (
    <> <br /> <br />
    <Box id="education"
      sx={{
        mb: 6,
        px: 3,
        py: 4,
        backgroundColor: "#121212",
        color: "#f5f5f5",
        borderRadius: 3,
        maxWidth: 700,
        mx: "auto",
        boxShadow: "0 0 20px rgba(187, 134, 252, 0.6)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: "#bb86fc",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "0 0 8px #bb86fc",
        }}
      >
        Education
      </Typography>

      {education.map(({ institution, degree, year }, index) => (
        <Box key={institution} sx={{ mb: index === education.length - 1 ? 0 : 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#e0b3ff",
              fontWeight: "600",
              textShadow: "0 0 5px #bb86fc",
            }}
          >
            {institution}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#bbb" }}>
            {degree}
          </Typography>
          <Typography variant="body2" sx={{ color: "#999", fontStyle: "italic" }}>
            {year}
          </Typography>
          {index !== education.length - 1 && (
            <Divider
              sx={{
                mt: 3,
                borderColor: "rgba(187, 134, 252, 0.5)",
                boxShadow: "0 0 8px #bb86fc",
              }}
            />
          )}
        </Box>
      ))}
    </Box>
    </>
  );
}
