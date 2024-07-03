// src/App.tsx

import React from 'react';
import {ThemeProvider, createTheme, CssBaseline} from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLayout from "./components/PageLayout";
import { generateRoutes } from './routesConfig';

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
    const routes = generateRoutes();

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
              <PageLayout>
                  <Routes>
                      {routes.map((route, index) => (
                          <Route key={index} path={route.path} element={route.element} />
                      ))}
                  </Routes>
              </PageLayout>

          </Router>
      </ThemeProvider>
  );
};

export default App;
