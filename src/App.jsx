// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { v4 as uuid } from 'uuid';
import { Content, Customize, Delete, Education, Experience, Email, Phone, Location, CVImage, Show, Hide, Add, Up, Down, Personal, Download, Github } from './components/Icons';
import './App.css';

let accent = '#f00';

export const App = () => {
  return (
    <>
      <CVImage width="100px" styles={{ borderRadius: '100%' }} />
      <Content color={accent} />
      <Customize color={accent} />
      <Delete color={accent} />
      <Education color={accent} />
      <Experience color={accent} />
      <Email color={accent} />
      <Phone color={accent} />
      <Location color={accent} />
      <Show color={accent} />
      <Hide color={accent} />
      <Add color={accent} />
      <Up color={accent} />
      <Down color={accent} />
      <Personal color={accent} />
      <Download color={accent} />
      <Github color={accent} />
    </>
  );
};
