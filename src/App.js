import { Brand, CTA, Navbar } from './components';
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
  Features,
} from './containers';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="gadient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
