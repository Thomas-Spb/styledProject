import './App.css'
import styled from "styled-components";
import Header from "./layout/header/Header.tsx";
import Main from "./layout/sections/main/Main.tsx";
import About from "./layout/sections/about/About.tsx";
import Services from "./layout/sections/services/Services.tsx";
import Projects from "./layout/sections/projects/Projects.tsx";
import Contact from "./layout/sections/contact/Contact.tsx";
import Footer from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Title>Thomas TEst</Title>
            <Header />
            <Main />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;