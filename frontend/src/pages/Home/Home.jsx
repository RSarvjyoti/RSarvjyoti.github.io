import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';

import Resume from '../../assets/docs/Sarvjyoti.pdf'


const Home = () => {
  return (
   <>
   <div className="container-fluid home-container">
    <div className="container home-content">
      <h2>Hi <span> <img src="https://user-images.githubusercontent.com/74038190/214644152-52f47eb3-5e31-4f47-8758-05c9468d5596.gif" alt="" />, </span> I'm </h2>
      <h1>
        <Typewriter
           options={{
           strings: ['Sarvjyoti','Full-stack developer !', 'Enthusiast in MERN stack developer !'],
           autoStart: true,
           loop: true,
         }}
       />
      </h1>
      <div className="home-buttons">
        <button className='btn btn-hire'>Hire Me</button>
        <a className='btn btn-cv' href={Resume} download="Sarvjyoti.pdf">My Resume</a>
      </div>
    </div>
   </div>
   </>
  )
}

export default Home
