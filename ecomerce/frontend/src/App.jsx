import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2"
import Header3 from "./components/header/Header3"
import Hero from "./components/hero/Hero" 


import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "@mui/icons-material";
import Main from "./components/main/Main.";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/main/ScrollToTop";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.palette.bg.main}>
          <Hero /><Main /> <ScrollToTop /><Footer /></Box>
          
          
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;