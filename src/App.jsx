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

// const FactoryEducation = () => {};

const Display = ({ name, email, phone, address }) => {
  return (
    <div className="my-4 mx-auto max-w-4xl shadow-lg">
      <header className={'px-4 bg-dark text-pink' + ' ' + (name === '' ? 'py-11' : 'py-6')}>
        <h1 className="text-center text-4xl">{name}</h1>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {email !== '' ? <Icon.Email color={'#F1B4BB'} height={'24px'} width={'24px'} /> : null}
          {email}
        </h2>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {phone !== '' ? <Icon.Phone color={'#F1B4BB'} height={'24px'} width={'24px'} /> : null}
          {phone}
        </h2>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {address !== '' ? <Icon.Location color={'#F1B4BB'} height={'24px'} width={'24px'} /> : null}
          {address}
        </h2>
      </header>
    </div>
  );
};

const Personal = ({ name, email, phone, address, handleChange }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="p-4 shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Personal height={'34px'} width={'34px'} /> Personal
        </h1>
        <div className={'absolute right-0 top-0'}>
          <Button open={open} handleChange={handleOpen} />
        </div>
        <div className={open ? ' block' : ' hidden'}>
          <Input required={true} placeholder={'First and last name'} infoType={'name'} label={'Full name'} inputType={'text'} value={name} handleChange={handleChange} />
          <Input required={true} placeholder={'Enter your email'} infoType={'email'} label={'Email'} inputType={'email'} value={email} handleChange={handleChange} />
          <Input required={true} placeholder={'Enter phone number'} infoType={'phone'} label={'Phone number'} inputType={'tel'} value={phone} handleChange={handleChange} />
          <Input required={true} placeholder={'City, Country'} infoType={'address'} label={'Address'} inputType={'text'} value={address} handleChange={handleChange} />
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
