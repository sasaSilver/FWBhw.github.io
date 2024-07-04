import React from 'react';
import './App.css';
import Header from './components/Header';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import LinkSection from './components/LinkSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <main>
      <ProjectSection/>
      <SkillsSection/>
      <AboutSection/>
      <LinkSection/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
