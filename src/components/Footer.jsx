import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  Tooltip,
  useTheme,
  useMediaQuery,
  Paper,
  Container,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer(linkedinUsername ) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ width: "100%", mt: 6, px: 2 }}>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#1e1e2f",
            color: "#bb86fc",
            p: isLargeScreen ? 4 : 3,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            mb={2}
            flexWrap="wrap"
          >
            {["about", "skills", "projects", "education"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                underline="none"
                color="inherit"
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "#e0b3ff",
                    textDecoration: "underline",
                  },
                }}
              >
                {section}
              </Link>
            ))}
          </Stack>

          <Divider sx={{ borderColor: "#444", my: 2 }} />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mb={2}
            flexWrap="wrap"
          >
            <Tooltip title="GitHub">
              <IconButton
                href="https://github.com/MRROBOT4850"
                target="_blank"
                rel="noopener"
                sx={{ color: "#bb86fc", "&:hover": { color: "#e0b3ff" } }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                href={`https://linkedin.com/in/${linkedinUsername}`}
                target="_blank"
                rel="noopener"
                sx={{ color: "#bb86fc", "&:hover": { color: "#e0b3ff" } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton
                href="mailto:shivamchaudhary4850@gmail.com"
                sx={{ color: "#bb86fc", "&:hover": { color: "#e0b3ff" } }}
              >
                <EmailIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
              fontSize: "0.85rem",
            }}
          >
            <CopyrightIcon fontSize="small" />
            Shivam Chaudhary — {new Date().getFullYear()}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Tooltip title="Back to Top">
              <IconButton
                onClick={scrollToTop}
                sx={{
                  color: "#bb86fc",
                  "&:hover": {
                    color: "#e0b3ff",
                  },
                }}
              >
                <KeyboardArrowUpIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
