/* eslint-disable no-multi-str */
import React, { useState, useReducer } from 'react';
import Heading from '../heading/Heading';
import Collapsible from '../collapsible/Collapsible';
import Form from '../form/form';
import './app.css';
import selfie from '../images/selfie.jpeg';

const footerStyles =
{
  textAlign: "center"
};


// jshint ignore : start
export default function App()
{
  const introText = "I have been coding for about 3 years since I started majoring in Computer Science.\
    I love computer science and the way everything works together in an orderly fashion,\
    and I am looking forward to advancing my skills by working on different projects";

  const skillSetText = "Programming Languages: HTML, CSS, JavaScript, C#, C/C++, Dart, Python, Java";
  const techs = 'Technologies: Unity, Unreal, Flutter, React.js, Node.js, .Net, MySQL, TensorFlow 2';

  const workText = "To add later (already outlined)";

  // returns the title cased version of the string
  // e.g. leo zhang ==> Leo Zhang
  function TitleCase(myStr)
  {
    return myStr.toLowerCase().split(' ')
      .map(name => name.charAt(0)
        .toUpperCase() + name.substring(1)).join(' ');
  }

  return (
    <div className="background">

      <Heading />

      {/* <!-- <p>BRIEFLY TALK ABOUT YOUR PROFESSIONAL LIFE</p> --> */}
      <Collapsible title="Intro" imageURL={selfie} text={introText} stringId={"intro"} isIntro={true} />
      <hr className="hrColor" />
      {/* TALK ABOUT YOUR SKILLSETS HERE */}
      <Collapsible title="Skill-Set" text={skillSetText} moreText={techs} stringId={"skill"} />
      <hr className="hrColor" />
      {/* showcase your past projects here perhaps include a brief video or image */}
      <Collapsible title="Work" text={workText} stringId={"work"} isWork={true} />
      <hr className="hrColor" />
      <div className="grid_container">
        <Form TitleCase={TitleCase}/>

        <footer style={footerStyles}>
          <div>
            <a href="https://github.com/leozhang1" className="fab fa-github"> <span>GitHub</span> </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/leo-zhang-2532a219a/" className="fab fa-linkedin"> <span>LinkedIn</span> </a>
          </div>
          <div>
            Copyright &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>

    </div>
  );
}











// useEffect practice

  // const [windowWidth, SetWindowWidth] = React.useState(window.innerWidth);

  // // using the 'useCallback' function prevents the function from being recreated
  // // everytime we re-render our component
  //// useCallback returns the entire function that it takes in
  // const UpdateWindowWidth = React.useCallback(() =>
  // {
  //   SetWindowWidth(window.innerWidth);
  //   console.log(windowWidth);
  // }, [windowWidth]);

  // React.useEffect(() =>
  // {
  //   // applied side effect
  //   window.addEventListener('resize', UpdateWindowWidth);

  //   // clean up when the component unmounts
  //   return () =>
  //   {
  //     window.removeEventListener('resize', UpdateWindowWidth);
  //   }
  // }, [windowWidth, UpdateWindowWidth])