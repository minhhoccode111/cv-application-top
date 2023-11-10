/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { v4 as uuid } from 'uuid';
// eslint-disable-next-line no-unused-vars
import { Content, Customize, Delete, Education, Experience, Email, Phone, Location, CVImage, Show, Hide, Add, Up, Down, Personal, Download, Github } from './components/Icons';
import './App.css';
import 'animate.css';

const Display = ({ name, email, phone, address }) => {
  return (
    <>
      <h1 className=" text-center text-5xl whitespace-nowrap">{name}</h1>
      <h2 className="flex items-center justify-center gap-2 whitespace-nowrap text-xl">
        <Email /> {email}
      </h2>
      <h2 className="flex items-center justify-center gap-2 whitespace-nowrap text-xl">
        <Phone />
        {phone}
      </h2>
      <h2 className="flex items-center justify-center gap-2 whitespace-nowrap text-xl">
        <Location />
        {address}
      </h2>
    </>
  );
};

const Form = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('Dang Hoang Minh');
  const [email, setEmail] = useState('minhhoccode111@gmail.com');
  const [phone, setPhone] = useState('+84 123123123');
  const [address, setAddress] = useState('Ho Chi Minh, Viet Nam');
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="shadow-2xl m-4 text-darker relative z-10 self-start">
        <h1 className="m-4 text-3xl font-bold bg-white">Personal</h1>
        <div className={'absolute right-0 top-0'}>
          <button type="submit" onClick={handleOpen} className={'m-4 shadow-md hover:scale-110 transition-transform px-4 py-2 bg-dark text-light rounded-lg'}>
            {open ? <Up color="#fff" /> : <Down color="#fff" />}
          </button>
        </div>
        <div className={'p-2' + (open ? ' block' : ' hidden')}>
          <label className="flex flex-col font-bold gap-1 p-2 ">
            Full name (*){' '}
            <input
              onChange={handleName}
              value={name}
              type="text"
              className="px-3 focus:shadow-lg bg-light focus:bg-transparent font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
            />
          </label>
          <label className="flex flex-col font-bold gap-1 p-2 ">
            Email (*){' '}
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              className="px-3 focus:shadow-lg bg-light focus:bg-transparent font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
            />
          </label>
          <label className="flex flex-col font-bold gap-1 p-2 ">
            Phone number (*){' '}
            <input
              onChange={handlePhone}
              value={phone}
              type="tel"
              className="px-3 focus:shadow-lg bg-light focus:bg-transparent font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
            />
          </label>
          <label className="flex flex-col font-bold gap-1 p-2 ">
            Address (*){' '}
            <input
              onChange={handleAddress}
              value={address}
              type="text"
              className="px-3 focus:shadow-lg bg-light focus:bg-transparent font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
            />
          </label>
        </div>
      </div>
      <div className="m-4 p-4">
        <Display name={name} phone={phone} address={address} email={email} />
      </div>
    </>
  );
};

export const App = () => {
  return (
    <div id="wrapper" className="grid grid-cols-2 min-h-screen">
      <Form />
    </div>
  );
};
