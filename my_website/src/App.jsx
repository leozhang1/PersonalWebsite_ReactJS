/* eslint-disable no-multi-str */
import React from 'react';
import Heading from './components/Heading';
import Collapsible from './components/Collapsible';
import './css/app.css';
import selfie from './images/selfie.jpeg';

// jshint ignore : start
export default function App()
{
    const introText = "I have been coding for about 3 years since I started majoring in Computer Science.\
    I love computer science and the way everything works together in an orderly fashion,\
    and I am looking forward to advancing my skills by working on different projects";

    const skillSetText = "I love coding";

    const workText = "I am productive";

  return (
    <div>

      <Heading />

      {/* <!-- <p>BRIEFLY TALK ABOUT YOUR PROFESSIONAL LIFE AND THEN INTRODUCE YOUR PROJECTS</p> --> */}
      <Collapsible title="Intro" imageURL={selfie} text={introText} stringId={"intro"}/>
      &nbsp;
      {/* TALK ABOUT YOUR SKILLSETS HERE */}
      <Collapsible title="Skill-Set" text={skillSetText} stringId={"skill"}/>
      &nbsp;
      {/* showcase your past projects here perhaps include a brief video or image */}
      <Collapsible title="Work" text={workText} stringId={"work"}/>


      <article id="contact"></article>
    </div>
  );
}
