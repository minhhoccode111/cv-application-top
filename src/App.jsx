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
    <div className="my-4 mx-auto max-w-4xl shadow-lg">
      <header className={'px-4 bg-darker text-pink' + ' ' + (name === '' ? 'py-11' : 'py-6')}>
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
      <div className={'p-4'}>khong dieu kien</div>
    </div>
  );
};

const Personal = ({ name, email, phone, address, handleChange, currentOpen, handleToggle }) => {
  const isOpen = currentOpen === 'personal';
  return (
    <>
      <div className="p-4 shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Personal height={'34px'} width={'34px'} /> Personal
        </h1>
        <div className={'absolute right-0 top-0'}>
          <Button isOpen={isOpen} handleChange={() => handleToggle('personal')} />
        </div>
        <div className={'' + ' ' + (isOpen ? 'block' : ' hidden')}>
          <Input required={true} placeholder={'First and last name'} infoType={'name'} label={'Full name'} inputType={'text'} value={name} handleChange={handleChange} />
          <Input required={true} placeholder={'Enter your email'} infoType={'email'} label={'Email'} inputType={'email'} value={email} handleChange={handleChange} />
          <Input required={true} placeholder={'Enter phone number'} infoType={'phone'} label={'Phone number'} inputType={'tel'} value={phone} handleChange={handleChange} />
          <Input required={true} placeholder={'City, Country'} infoType={'address'} label={'Address'} inputType={'text'} value={address} handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

const Education = ({ school, degree, startDate, endDate, location, handleChange, currentOpen, handleToggle }) => {
  const isOpen = currentOpen === 'education';
  return (
    <>
      <div className="p-4 shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Education height={'34px'} width={'34px'} /> Education
        </h1>
        <div className={'absolute right-0 top-0'}>
          <Button isOpen={isOpen} handleChange={() => handleToggle('education')} />
        </div>
        <div className={'' + ' ' + (isOpen ? 'block' : ' hidden')}>
          <div className="bg-light h-40"></div>
        </div>
      </div>
    </>
  );
};

const Experience = ({ name, email, phone, address, handleChange, currentOpen, handleToggle }) => {
  const isOpen = currentOpen === 'experience';
  return (
    <>
      <div className="p-4 shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Experience height={'34px'} width={'34px'} /> Experience
        </h1>
        <div className={'absolute right-0 top-0'}>
          <Button isOpen={isOpen} handleChange={() => handleToggle('experience')} />
        </div>
        <div className={'' + ' ' + (isOpen ? 'block' : ' hidden')}>
          <div className="bg-light h-40"></div>
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
  const handlePersonalInfoChange = (type, value) => setInfo({ ...personalInfo, [type]: value });

  const [currentOpen, setCurrentOpen] = useState('personal');
  const handleCurrentOpenChange = (newCurrentOpen) => {
    if (newCurrentOpen === currentOpen) {
      setCurrentOpen(null);
    } else {
      setCurrentOpen(newCurrentOpen);
    }
  };

  return (
    <div id="wrapper" className="min-h-screen">
      <Personal {...personalInfo} handleChange={handlePersonalInfoChange} currentOpen={currentOpen} handleToggle={handleCurrentOpenChange} />
      <Education currentOpen={currentOpen} handleToggle={handleCurrentOpenChange} />
      <Experience currentOpen={currentOpen} handleToggle={handleCurrentOpenChange} />
      <Display {...personalInfo} />
    </div>
  );
};
