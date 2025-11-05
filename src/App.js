import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import Hero from "../src/components/sections/Hero.jsx";
import Skills from "../src/components/sections/Skills.jsx";
import Experience from './components/sections/Experience.jsx';
import Education from './components/sections/Education.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  position: relative;
  z-index: 1; /* Ensure main content appears above stars */
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects/>
            <Wrapper>
            <Education />
            <Contact/>
            </Wrapper>
            
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
