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
        className="px-3 focus:shadow-lg bg-light focus:bg-white font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
        required
      />
    </label>
  );
};
const ToggleButton = ({ buttonOnClickCb, isOpen, iconType = 'arrow' }) => {
  if (iconType === 'arrow') {
    return (
      <button type="button" onClick={buttonOnClickCb} className={'my-1 transition-transform hover:scale-125'}>
        {isOpen ? <Icon.Up color="#132043" height={'30px'} width={'30px'} /> : <Icon.Down color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  } else {
    return (
      <button type="button" onClick={buttonOnClickCb} className={'my-1 transition-transform hover:scale-125'}>
        {isOpen ? <Icon.Hide color="#132043" height={'30px'} width={'30px'} /> : <Icon.Show color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  }
};
const Display = ({ name, email, phone, address, educationItems, experienceItems }) => {
  return (
    <section className="my-4 mx-auto max-w-4xl shadow-lg">
      {/* header in display section is based on personal's info */}
      <header className={'px-4 bg-darker text-light' + ' ' + (name === '' ? 'py-11' : 'py-6')}>
        <h1 className="text-center text-4xl">{name}</h1>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {email !== '' ? <Icon.Email color={'#FDF0F0'} height={'24px'} width={'24px'} /> : null}
          {email}
        </h2>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {phone !== '' ? <Icon.Phone color={'#FDF0F0'} height={'24px'} width={'24px'} /> : null}
          {phone}
        </h2>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {address !== '' ? <Icon.Location color={'#FDF0F0'} height={'24px'} width={'24px'} /> : null}
          {address}
        </h2>
      </header>
      {/* display education section */}
      <article className={'pt-8 px-8 pb-2'}>
        <header className="bg-light m-2">
          <h2 className="text-center text-2xl p-2">Education</h2>
        </header>
        <div className="p-2">
          {educationItems.map((item) => {
            if (item.isHidden) return null;
            return (
              <table key={item.id} className="p-2">
                <tbody className="">
                  <tr>
                    <td className="w-44">
                      {item.startDate} - {item.endDate}
                    </td>
                    <td>
                      <strong>{item.school}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>{item.location}</td>
                    <td>{item.degree}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </article>
      {/* display experience section */}
      <article className={'pt-2 pb-8 px-8'}>
        <header className="bg-light m-2">
          <h2 className="text-center text-2xl p-2">Professional Experience</h2>
        </header>
        <div className="p-2">
          {experienceItems.map((item) => {
            if (item.isHidden) return null;
            return (
              <table key={item.id} className="p-2">
                <tbody className="">
                  <tr>
                    <td className="w-44">
                      {item.startDate} - {item.endDate}
                    </td>
                    <td>
                      <strong>{item.companyName}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>{item.location}</td>
                    <td>{item.positionTitle}</td>
                  </tr>
                  <tr>
                    <td>{null}</td>
                    <td>{item.description}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </article>
    </section>
  );
};
const Personal = ({ name, email, phone, address, inputOnChangeCb, currentOpenSection, toggleOpenThisSection }) => {
  const isThisSectionOpened = currentOpenSection === 'personal';
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
      <header tabIndex={0} className="p-4 cursor-pointer" onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && e.target.click()}>
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Personal height={'34px'} width={'34px'} /> Personal
        </h1>
        <div className={'absolute right-0 top-0 p-4 mx-4'}>
          <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
        </div>
      </header>
      <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>
        <Input placeholder={'First and last name'} infoType={'name'} label={'Full name'} inputType={'text'} value={name} inputOnChangeCb={inputOnChangeCb} />
        <Input placeholder={'Enter your email'} infoType={'email'} label={'Email'} inputType={'email'} value={email} inputOnChangeCb={inputOnChangeCb} />
        <Input placeholder={'Enter phone number'} infoType={'phone'} label={'Phone number'} inputType={'tel'} value={phone} inputOnChangeCb={inputOnChangeCb} />
        <Input placeholder={'City, Country'} infoType={'address'} label={'Address'} inputType={'text'} value={address} inputOnChangeCb={inputOnChangeCb} />
      </div>
    </section>
  );
};
const Education = ({
  educationItems,
  formOnSubmitCb,
  currentOpenSection,
  deleteEducationItem,
  valueOfInputsInForm,
  toggleOpenThisSection,
  resetValueOfInputsInForm,
  updateValueOfInputsInForm,
  toggleHiddenEducationItem,
}) => {
  const isThisSectionOpened = currentOpenSection === 'education';
  // toggle display form or a list of education items
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const updateIsDisplayForm = () => {
    resetValueOfInputsInForm();
    setIsDisplayForm(!isDisplayForm);
  };
  // choose to display form or a list of education items
  let JSXToDisplayInThisSection;
  if (isDisplayForm) {
    JSXToDisplayInThisSection = (
      <form
        onSubmit={(e) => {
          formOnSubmitCb(e);
          updateIsDisplayForm();
        }}
      >
        <Input placeholder={'Enter School / University'} label={'School'} value={valueOfInputsInForm.school} infoType={'school'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Degree / Field of Study'} label={'Degree'} value={valueOfInputsInForm.degree} infoType={'degree'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Start Date'} label={'Start Date'} value={valueOfInputsInForm.startDate} infoType={'startDate'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter End Date'} label={'End Date'} value={valueOfInputsInForm.endDate} infoType={'endDate'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Location'} label={'Location'} value={valueOfInputsInForm.location} infoType={'location'} inputOnChangeCb={updateValueOfInputsInForm} />
        <div className="flex justify-evenly px-2 py-4">
          <button
            className={'text-darker bg-white hover:bg-darker hover:text-white hover:shadow-red hover:shadow-md transition-colors rounded-lg hover:scale-105 py-2 px-4 border border-darker'}
            onClick={updateIsDisplayForm}
            type="button"
          >
            Cancel
          </button>
          <button
            className={'text-darker bg-white hover:bg-darker hover:text-white hover:shadow-green hover:shadow-md transition-colors rounded-lg hover:scale-105 py-2 px-4 border border-darker'}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    );
  } else {
    JSXToDisplayInThisSection = (
      <div className="">
        <ul>
          {educationItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-4 text-lg">
              <p>{item.school.length > 41 ? item.school.slice(0, 41) + '...' : item.school}</p>
              <div className="flex items-center gap-2">
                <ToggleButton iconType={'eye'} isOpen={item.isHidden} buttonOnClickCb={() => toggleHiddenEducationItem(item.id)} />
                <button onClick={() => deleteEducationItem(item.id)}>
                  <Icon.Delete color={'#a00'} width={'30px'} height={'30px'} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center p-2">
          <button onClick={updateIsDisplayForm} className="">
            <Icon.Add width={'30px'} height={'30px'} />
          </button>
        </div>
      </div>
    );
  }
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
      <header className="p-4 cursor-pointer" tabIndex={0} onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && e.target.click()}>
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Education height={'34px'} width={'34px'} /> Education
        </h1>
        <div className={'absolute right-0 top-0 p-4 mx-4'}>
          <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
        </div>
      </header>
      <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>{JSXToDisplayInThisSection}</div>
    </section>
  );
};
const Experience = ({
  experienceItems,
  formOnSubmitCb,
  currentOpenSection,
  deleteExperienceItem,
  valueOfInputsInForm,
  toggleOpenThisSection,
  resetValueOfInputsInForm,
  updateValueOfInputsInForm,
  toggleHiddenExperienceItem,
}) => {
  const isThisSectionOpened = currentOpenSection === 'experience';
  // toggle display form or a list of experience items
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const updateIsDisplayForm = () => {
    resetValueOfInputsInForm();
    setIsDisplayForm(!isDisplayForm);
  };
  // choose to display form or a list of experience items
  let JSXToDisplayInThisSection;
  if (isDisplayForm) {
    JSXToDisplayInThisSection = (
      <form
        onSubmit={(e) => {
          formOnSubmitCb(e);
          updateIsDisplayForm();
        }}
      >
        <Input placeholder={'Enter Company Name'} label={'Company Name'} value={valueOfInputsInForm.companyName} infoType={'companyName'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Position Title'} label={'Position Title'} value={valueOfInputsInForm.positionTitle} infoType={'positionTitle'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Start Date'} label={'Start Date'} value={valueOfInputsInForm.startDate} infoType={'startDate'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter End Date'} label={'End Date'} value={valueOfInputsInForm.endDate} infoType={'endDate'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Location'} label={'Location'} value={valueOfInputsInForm.location} infoType={'location'} inputOnChangeCb={updateValueOfInputsInForm} />
        <Input placeholder={'Enter Job Description'} label={'Description'} value={valueOfInputsInForm.description} infoType={'description'} inputOnChangeCb={updateValueOfInputsInForm} />
        <div className="flex justify-evenly px-2 py-4">
          <button
            className={'text-darker bg-white hover:bg-darker hover:text-white hover:shadow-red hover:shadow-md transition-colors rounded-lg hover:scale-105 py-2 px-4 border border-darker'}
            onClick={updateIsDisplayForm}
            type="button"
          >
            Cancel
          </button>
          <button
            className={'text-darker bg-white hover:bg-darker hover:text-white hover:shadow-green hover:shadow-md transition-colors rounded-lg hover:scale-105 py-2 px-4 border border-darker'}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    );
  } else {
    JSXToDisplayInThisSection = (
      <div className="">
        <ul>
          {experienceItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-4 text-lg">
              <p>{item.companyName.length > 41 ? item.companyName.slice(0, 41) + '...' : item.companyName}</p>
              <div className="flex items-center gap-2">
                <ToggleButton iconType={'eye'} isOpen={item.isHidden} buttonOnClickCb={() => toggleHiddenExperienceItem(item.id)} />
                <button onClick={() => deleteExperienceItem(item.id)}>
                  <Icon.Delete color={'#a00'} width={'30px'} height={'30px'} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center p-2">
          <button onClick={updateIsDisplayForm} className="">
            <Icon.Add width={'30px'} height={'30px'} />
          </button>
        </div>
      </div>
    );
  }
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative">
      <header className="p-4 cursor-pointer" tabIndex={0} onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && e.target.click()}>
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Experience height={'34px'} width={'34px'} /> Experience
        </h1>
        <div className={'absolute right-0 top-0 p-4 mx-4'}>
          <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
        </div>
      </header>
      <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>{JSXToDisplayInThisSection}</div>
    </section>
  );
};
export const App = () => {
  // state to store and change which section is opened
  const [currentOpenSection, setCurrentOpenSection] = useState('null');
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
  // interact with value of inputs in form in education
  const [valueOfInputsInFormInEducation, setValueOfInputsInFormInEducation] = useState({ school: '', degree: '', startDate: '', endDate: '', location: '' });
  const resetValueOfInputsInFormInEducation = () => setValueOfInputsInFormInEducation({ school: '', degree: '', startDate: '', endDate: '', location: '' });
  const updateValueOfInputsInFormInEducation = (type, value) => setValueOfInputsInFormInEducation({ ...valueOfInputsInFormInEducation, [type]: value });
  // add item to education items list on form submit and delete when click button on displayed item
  const [educationItems, setEducationItems] = useState([
    {
      school: 'Hochiminh College Economy',
      degree: 'Bachelors in Economics',
      location: 'Ho Chi Minh, VN',
      startDate: '9/2019',
      endDate: '12/2023',
      isHidden: false,
      id: uuid(),
    },
    {
      degree: `Master's Degree in Computer Science`,
      location: 'Hidden Location',
      school: 'Hidden University',
      startDate: '1/2001',
      isHidden: false,
      endDate: 'now',
      id: uuid(),
    },
    {
      degree: `Master's Degree in Math`,
      school: 'Hidden University',
      location: 'Unknown Location',
      startDate: 'Unknown',
      endDate: 'Unknown',
      isHidden: true,
      id: uuid(),
    },
  ]);
  const formOnSubmitCbInEducation = (e) => {
    e.preventDefault();
    setEducationItems([...educationItems, { ...valueOfInputsInFormInEducation, id: uuid(), isHidden: false }]);
    resetValueOfInputsInFormInEducation();
  };
  const toggleHiddenEducationItemInEducation = (toggledId) => {
    setEducationItems(
      educationItems.map((item) => {
        if (item.id === toggledId) return { ...item, isHidden: !item.isHidden };
        return { ...item };
      })
    );
  };
  const deleteEducationItemInEducation = (deletedId) => {
    setEducationItems(educationItems.filter((item) => item.id !== deletedId));
  };
  // state to store and change experience section's values
  // interact with value of inputs in form in experience
  const [valueOfInputsInFormInExperience, setValueOfInputsInFormInExperience] = useState({ companyName: '', positionTitle: '', startDate: '', endDate: '', location: '', description: '' });
  const resetValueOfInputsInFormInExperience = () => setValueOfInputsInFormInExperience({ companyName: '', positionTitle: '', startDate: '', endDate: '', location: '', description: '' });
  const updateValueOfInputsInFormInExperience = (type, value) => setValueOfInputsInFormInExperience({ ...valueOfInputsInFormInExperience, [type]: value });
  // add item to education items list on form submit and delete when click button on displayed item
  const [experienceItems, setExperienceItems] = useState([
    {
      companyName: 'Apple Corp',
      positionTitle: 'Backend Engineer',
      startDate: '1/2025',
      endDate: 'Unknown',
      location: 'Silicon Valley, CA',
      description:
        'As a Backend Engineer at Google Corp, I am responsible for designing and implementing scalable and high-performance server-side applications. Collaborating with cross-functional teams, I contribute to the development of robust and efficient backend systems, ensuring seamless integration with front-end components. My role involves optimizing database queries, implementing RESTful APIs, and addressing security considerations in application design. I actively participate in code reviews, stay updated on industry best practices, and contribute to the overall success of the engineering team.',
      isHidden: false,
      id: uuid(),
    },
    {
      companyName: 'Netflix Corp',
      positionTitle: 'Senior Backend Engineer',
      startDate: '1/2026',
      endDate: 'Unknown',
      location: 'Seattle, WA',
      description:
        'At TechGiant, I served as a Senior Backend Engineer, leading the development of mission-critical server-side applications. My responsibilities included designing and implementing scalable architecture, optimizing database performance, and ensuring the reliability and security of backend systems. Collaborating closely with cross-functional teams, I played a key role in feature development and the integration of new technologies. Additionally, I conducted code reviews, mentored junior engineers, and contributed to the continuous improvement of development processes.',
      isHidden: false,
      id: uuid(),
    },
    {
      companyName: 'Google Corp',
      positionTitle: 'Backend Software Engineer',
      startDate: '1/2027',
      endDate: 'Unknown',
      location: 'San Francisco, CA',
      description:
        'As a Backend Software Engineer at InnoTech Solutions, I contribute to the development of scalable and efficient server-side applications. Working in an agile environment, I collaborate with a dynamic team to design and implement robust backend solutions. My role involves optimizing database queries, building RESTful APIs, and ensuring the seamless integration of frontend and backend components. I actively participate in code refactoring, performance tuning, and troubleshooting to deliver high-quality software. Additionally, I stay updated on industry trends and incorporate best practices into the development lifecycle.',
      isHidden: true,
      id: uuid(),
    },
  ]);
  const formOnSubmitCbInExperience = (e) => {
    e.preventDefault();
    setExperienceItems([...experienceItems, { ...valueOfInputsInFormInExperience, id: uuid(), isHidden: false }]);
    resetValueOfInputsInFormInExperience();
  };
  const toggleHiddenExperienceItemInExperience = (toggledId) => {
    setExperienceItems(
      experienceItems.map((item) => {
        if (item.id === toggledId) return { ...item, isHidden: !item.isHidden };
        return { ...item };
      })
    );
  };
  const deleteExperienceItemInExperience = (deletedId) => {
    setExperienceItems(educationItems.filter((item) => item.id !== deletedId));
  };
  return (
    <main id="wrapper" className="min-h-screen">
      <Personal {...personalInfo} inputOnChangeCb={updatePersonalInfoOnInputChange} currentOpenSection={currentOpenSection} toggleOpenThisSection={() => updateCurrentOpenSection('personal')} />
      <Education
        educationItems={educationItems}
        currentOpenSection={currentOpenSection}
        formOnSubmitCb={formOnSubmitCbInEducation}
        deleteEducationItem={deleteEducationItemInEducation}
        valueOfInputsInForm={valueOfInputsInFormInEducation}
        resetValueOfInputsInForm={resetValueOfInputsInFormInEducation}
        updateValueOfInputsInForm={updateValueOfInputsInFormInEducation}
        toggleHiddenEducationItem={toggleHiddenEducationItemInEducation}
        toggleOpenThisSection={() => updateCurrentOpenSection('education')}
      />
      <Experience
        experienceItems={experienceItems}
        currentOpenSection={currentOpenSection}
        formOnSubmitCb={formOnSubmitCbInExperience}
        deleteExperienceItem={deleteExperienceItemInExperience}
        valueOfInputsInForm={valueOfInputsInFormInExperience}
        resetValueOfInputsInForm={resetValueOfInputsInFormInExperience}
        updateValueOfInputsInForm={updateValueOfInputsInFormInExperience}
        toggleHiddenExperienceItem={toggleHiddenExperienceItemInExperience}
        toggleOpenThisSection={() => updateCurrentOpenSection('experience')}
      />
      <Display {...personalInfo} educationItems={educationItems} experienceItems={experienceItems} />
    </main>
  );
};
