/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { v4 as uuid } from 'uuid';
import * as Icon from './components/Icons';
import './App.css';
import 'animate.css';
import { Input } from './components/Input';
import { Button } from './components/ToggleButton';

const Display = ({ name, email, phone, address }) => {
  return (
    <div className="my-4 mx-auto p-4 max-w-4xl bg-light shadow-lg text-darker">
      <h1 className=" text-center text-5xl">{name}</h1>
      <h2 className="flex items-center justify-center gap-2 text-xl">
        <Icon.Email />
        {email}
      </h2>
      <h2 className="flex items-center justify-center gap-2 text-xl">
        <Icon.Phone />
        {phone}
      </h2>
      <h2 className="flex items-center justify-center gap-2 text-xl">
        <Icon.Location />
        {address}
      </h2>
    </div>
  );
};

const Personal = ({ name, email, phone, address, handleChange }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="p-4 shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
        <h1 className="text-3xl font-bold bg-white">Personal</h1>
        <div className={'absolute right-0 top-0'}>
          <Button open={open} handleChange={handleOpen} />
        </div>
        <div className={open ? ' block' : ' hidden'}>
          <Input infoType={'name'} label={'Full name'} inputType={'text'} value={name} handleChange={handleChange} />
          <Input infoType={'email'} label={'Email'} inputType={'email'} value={email} handleChange={handleChange} />
          <Input infoType={'phone'} label={'Phone number'} inputType={'tel'} value={phone} handleChange={handleChange} />
          <Input infoType={'address'} label={'Address'} inputType={'text'} value={address} handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export const App = () => {
  const [personalInfo, setInfo] = useState({
    name: 'Dang Hoang Minh',
    email: 'minhhoccode111@gmail.com',
    phone: '+84 123123123',
    address: 'District 10, Ho Chi Minh city, Viet Nam',
  });
  const handleInfoChange = (type, value) => setInfo({ ...personalInfo, [type]: value });

  return (
    <div id="wrapper" className="min-h-screen">
      <Personal {...personalInfo} handleChange={handleInfoChange} />
      <Display {...personalInfo} />
    </div>
  );
};
