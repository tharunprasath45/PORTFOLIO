import React from 'react'
import neon from '../assets/nplat.jpg';

function Hero() {
  return (
    <div>
      <section className="hero">
      <div className="left">
        <h1>HI, I'M</h1>
        <h2 className="name">THARUN PRASATH C</h2>
        <p>
          Aspiring Full Stack Developer with hands-on experience in MERN stack,
          passionate about creating efficient and user-friendly web applications......
        </p>

        <div className="buttons">
          <button className="primary">VIEW PROJECTS</button>
          <button className="secondary">CONTACT ME</button>
        </div>
      </div>

      <div className="right">
        <div className="box">
           <img src={neon} alt="3D neon design" className="hero-img" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
