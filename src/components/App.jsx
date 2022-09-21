import '../css/App.css';
import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Team from './Team';
import Detail from './Detail';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Intro />
        <Team />
        <Detail />
      </main>
      <Footer />
    </div>
  );
}

export default App;
