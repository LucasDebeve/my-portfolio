import {React} from 'react';
import Header from './components/Header.jsx';
import Hero from "./components/Hero.jsx";
import Timeline from "./components/Timeline";
import Container from "./components/Container";

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Timeline />
      </Container>
      <div className="h-svh"></div>
    </>
  )
}

export default App
