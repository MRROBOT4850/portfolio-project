import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Tools from "./components/Tools"; 
import Footer from "./components/Footer";
import PortfolioLabel from './components/PortfolioLabel';
function App() {
  const githubUsername = "MRROBOT4850";
  const linkedinUsername = "shivam-chaudhary-dev"; 

  return (
    <>
     <CssBaseline />
     <PortfolioLabel />
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", py: 6, color: "#f5f5f5" }}>
      <Container maxWidth="md">
        <Header githubUsername={githubUsername} linkedinUsername={linkedinUsername} />
        <Skills />
        <Tools />
         <Projects /> 
        <Education />
        <Footer/>
      </Container>
    </Box>
    </>
  );
}

export default App;
