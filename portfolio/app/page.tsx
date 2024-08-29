'use client'

import NavBar from "./component/NavBar";
import ParticleBackground from "./component/ParticleBackground";
import ParticleWhiteBackground from "./component/ParticleWhiteBackground";
// import { FloatingDockDemo } from "./Icons";
import { useState } from 'react';
import About from "./component/About";
import HomePage from "./component/HomePage";

export default function Home() {
  const [popup, setPopup] = useState(false)
  const [dark, setDark] = useState(true)

  return <>
    <About popup={popup} setPopup={setPopup} />
    {
      dark ? <ParticleBackground /> : <ParticleWhiteBackground />
    }
    <main className="flex flex-col lg:pl-44 px-5 md:pl-28 md:pr-6 lg:pr-20 z-40">
      <NavBar dark={dark} setDark={setDark} />
      <HomePage popup={popup} setPopup={setPopup}/>
    </main>
  </>
}
