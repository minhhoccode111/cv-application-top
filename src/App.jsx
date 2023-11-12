/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as Icon from './components/Icons';
import './App.css';
import 'animate.css';
// import { Input } from './components/Input';
// import { ToggleButton } from './components/ToggleButton';
const Input = ({ label, inputType = 'text', infoType, inputOnChangeCb, value, placeholder }) => {
  return (
    <label className="flex flex-col font-bold gap-1 p-2 ">
      {label} (*)
      <input
        placeholder={placeholder}
        // onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
        onChange={(e) => inputOnChangeCb(infoType, e.target.value)}
        value={value}
        type={inputType}
        className="px-3 focus:shadow-lg bg-light focus:bg-transparent font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
        required
      />
    </label>
  );
};
const ToggleButton = ({ buttonOnClickCb, isOpen, iconType = 'arrow' }) => {
  if (iconType === 'arrow') {
    return (
      <button type="button" onClick={buttonOnClickCb} className={'p-4 mx-4 my-1'}>
        {isOpen ? <Icon.Up color="#132043" height={'30px'} width={'30px'} /> : <Icon.Down color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  } else {
    return (
      <button type="button" onClick={buttonOnClickCb} className={'p-4 mx-4 my-1'}>
        {isOpen ? <Icon.Show color="#132043" height={'30px'} width={'30px'} /> : <Icon.Hide color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  }
};
const Display = ({ name, email, phone, address }) => {
  return (
    <section className="my-4 mx-auto max-w-4xl shadow-lg">
      {/* header in display section is based on personal's info */}
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
      {/*  */}
      <div className={'p-4'}></div>
    </section>
  );
};
const Personal = ({ name, email, phone, address, inputOnChangeCb, currentOpenSection, toggleOpenThisSection }) => {
  const isThisSectionOpened = currentOpenSection === 'personal';
  return (
    <section className="p-4 shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
      <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
        <Icon.Personal height={'34px'} width={'34px'} /> Personal
      </h1>
      <div className={'absolute right-0 top-0'}>
        <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
      </div>
      <div className={'' + (isThisSectionOpened ? ' block' : ' hidden')}>
        <Input placeholder={'First and last name'} infoType={'name'} label={'Full name'} inputType={'text'} value={name} inputOnChangeCb={inputOnChangeCb} />
        <Input placeholder={'Enter your email'} infoType={'email'} label={'Email'} inputType={'email'} value={email} inputOnChangeCb={inputOnChangeCb} />
        <Input placeholder={'Enter phone number'} infoType={'phone'} label={'Phone number'} inputType={'tel'} value={phone} inputOnChangeCb={inputOnChangeCb} />
        <Input placeholder={'City, Country'} infoType={'address'} label={'Address'} inputType={'text'} value={address} inputOnChangeCb={inputOnChangeCb} />
      </div>
    </section>
  );
};
const Education = ({ toggleOpenThisSection, currentOpenSection }) => {
  const isThisSectionOpened = currentOpenSection === 'education';
  // interact with value of inputs in form
  const [valueOfInputsInForm, setValueOfInputsInForm] = useState({ school: '', degree: '', startDate: '', endDate: '', location: '' });
  const resetValueOfInputsInForm = () => setValueOfInputsInForm({ school: '', degree: '', startDate: '', endDate: '', location: '' });
  const updateValueOfInputsInForm = (type, value) => setValueOfInputsInForm({ ...valueOfInputsInForm, [type]: value });
  // toggle display form or a list of education items
  const [isDisplayForm, setIsDisplayForm] = useState(true);
  const updateIsDisplayForm = () => {
    resetValueOfInputsInForm();
    setIsDisplayForm(!isDisplayForm);
  };
  // add item to education items list on form submit and delete when click button on displayed item
  const [educationItems, setEducationItems] = useState([
    {
      degree: 'Bachelor',
      isHidden: false,
      endDate: 'Dec 2023',
      startDate: 'Sep 2019',
      location: 'Ho Chi Minh, Viet Nam',
      school: 'Hochiminh College Economy',
      id: uuid(),
    },
    {
      degree: 'Hidden Degree',
      isHidden: true,
      endDate: 'Hidden end date',
      startDate: 'Hidden start date',
      location: 'Hidden Location',
      school: 'Hidden University',
      id: uuid(),
    },
    {
      degree: 'Bachelor',
      isHidden: false,
      endDate: 'Dec 2023',
      startDate: 'Sep 2019',
      location: 'Ho Chi Minh, Viet Nam',
      school: 'Hochiminh College Economy',
      id: uuid(),
    },
    {
      degree: 'Hidden Degree',
      isHidden: true,
      endDate: 'Hidden end date',
      startDate: 'Hidden start date',
      location: 'Hidden Location',
      school: 'Hidden University',
      id: uuid(),
    },
  ]);
  const formOnSubmitCb = (e) => {
    e.preventDefault();
    updateIsDisplayForm();
    setEducationItems([...educationItems, { ...valueOfInputsInForm, id: uuid(), isHidden: false }]);
    resetValueOfInputsInForm();
  };
  const deleteEducationItemWithSameId = (deletedId) => {
    setEducationItems(educationItems.filter((item) => item.id !== deletedId));
  };
  // choose to display form or a list of education items
  let JSXToDisplayInThisSection;
  if (isDisplayForm) {
    JSXToDisplayInThisSection = (
      <form onSubmit={formOnSubmitCb}>
        <Input placeholder={'Enter School / University'} label={'School'} value={valueOfInputsInForm.school} infoType={'school'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Degree / Field of Study'} label={'Degree'} value={valueOfInputsInForm.degree} infoType={'degree'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Start Date'} label={'Start Date'} value={valueOfInputsInForm.startDate} infoType={'startDate'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter End Date'} label={'End Date'} value={valueOfInputsInForm.endDate} infoType={'endDate'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Location'} label={'Location'} value={valueOfInputsInForm.location} infoType={'location'} inputOnChangeCb={updateValueOfInputsInForm} />
        <div className="flex justify-evenly px-2 py-4">
          <button className={'text-darker bg-white hover:bg-darker hover:text-white hover:shadow-red hover:shadow-xl py-2 px-4 border border-darker'} onClick={updateIsDisplayForm} type="button">
            Cancel
          </button>
          <button className={'text-darker bg-white hover:bg-darker hover:text-white hover:shadow-green hover:shadow-xl py-2 px-4 border border-darker'} type="submit">
            Save
          </button>
        </div>
      </form>
    );
  } else {
    JSXToDisplayInThisSection = (
      <div className="">
        <ul>
          {educationItems.map((info) => (
            <li key={info.id}>
              <p>{info.school}</p>
              <button onClick={() => deleteEducationItemWithSameId(info.id)}>
                <Icon.Delete />
              </button>
            </li>
          ))}
        </ul>
        <button onClick={updateIsDisplayForm}>add new section</button>
      </div>
    );
  }
  return (
    <section className="p-4 shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
      <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
        <Icon.Education height={'34px'} width={'34px'} /> Education
      </h1>
      <div className={'absolute right-0 top-0'}>
        <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
      </div>
      <div className={'' + (isThisSectionOpened ? ' block' : ' hidden')}>{JSXToDisplayInThisSection}</div>
    </section>
  );
};
export const App = () => {
  // state to store and change which section is opened
  const [currentOpenSection, setCurrentOpenSection] = useState('education');
  const updateCurrentOpenSection = (newCurrentOpen) => (newCurrentOpen === currentOpenSection ? setCurrentOpenSection(null) : setCurrentOpenSection(newCurrentOpen));

  // state to store and change personal section's values
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Dang Hoang Minh',
    email: 'minhhoccode111@gmail.com',
    phone: '+84 123123123',
    address: 'District 10, Ho Chi Minh city, Viet Nam',
  });
  const updatePersonalInfoOnInputChange = (type, value) => setPersonalInfo({ ...personalInfo, [type]: value });

  // state to store and change education section's values
  return (
    <main id="wrapper" className="min-h-screen">
      <Personal {...personalInfo} inputOnChangeCb={updatePersonalInfoOnInputChange} currentOpenSection={currentOpenSection} toggleOpenThisSection={() => updateCurrentOpenSection('personal')} />
      <Education currentOpenSection={currentOpenSection} toggleOpenThisSection={() => updateCurrentOpenSection('education')} />
      <Display {...personalInfo} />
    </main>
  );
};
