// src/App.tsx

import React from 'react';
import {ThemeProvider, createTheme, CssBaseline, Switch} from '@mui/material';
import FrontPage from './components/FrontPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Week1 from './components/weeks/week1/Week1';
import {Lecture1} from './components/weeks/week1/Lecture1';
import Lecture2 from "./components/weeks/week1/Lecture2";
import Lecture3 from "./components/weeks/week1/Lecture3";
import Lecture1Questionnaire from "./components/weeks/week1/Lecture1Questionnaire";
import Lecture2Questionnaire from "./components/weeks/week1/Lecture2Questionnaire";
import Lecture3Questionnaire from "./components/weeks/week1/Lecture3Questionnaire";
import AssignmentInstructions from "./components/weeks/week1/AssignmentInstructions";
import PageLayout from "./components/PageLayout";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
              <PageLayout>
                  <Routes>
                      <Route path="/" element={<FrontPage />} />
                      <Route path="/week1" element={<Week1 />} />
                      <Route path="/week1/lecture1" element={<Lecture1 />} />
                      <Route path="/week1/lecture2" element={<Lecture2 />} />
                      <Route path="/week1/lecture3" element={<Lecture3 />} />
                      <Route path="/week1/lecture1/questionnaire" element={<Lecture1Questionnaire />} />
                      <Route path="/week1/lecture2/questionnaire" element={<Lecture2Questionnaire />} />
                      <Route path="/week1/lecture3/questionnaire" element={<Lecture3Questionnaire />} />
                      <Route path="/week1/assignment/instructions" element={<AssignmentInstructions />} />
                  </Routes>
              </PageLayout>

          </Router>
      </ThemeProvider>
  );
};

export default App;
