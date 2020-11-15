import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import About from "./components/About/About";
import FooterBar from "./FooterBar/FooterBar";
import Testamonials from './components/Testamonials/Testamonials';
import Header from './components/Header/Header';
import OurStory from "./components/OurStory/OurStory";
import Projects from "./components/Projects/Projects";
import ContactUs from './components/ContactUs/ContactUs';

import {TESTAMONIALS_DATA, CONTACT_INFO} from './mockData';
// import b1 from './assets/b1.jpg';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

function App() {
  const { scrollY, setScrollY } = useState(0);
  const {projects} = useSelector(state=>state.projects.projects);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <About />
      <OurStory />
      <Projects />
      <Testamonials data={TESTAMONIALS_DATA} />
      <div class="pulsating-circle"></div>
      <ContactUs data={CONTACT_INFO} />
      <FooterBar />
    </div>
  );
}

export default App;