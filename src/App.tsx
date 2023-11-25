import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as Icon from './components/Icons';
import './App.css';
import Display from './components/Display';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Customize from './components/Customize';

export const App = () => {
  // default content
  const defaultPersonalInfo = {
    name: 'Dang Hoang Minh',
    email: 'minhhoccode111@gmail.com',
    phone: '+84 123123123',
    address: 'District 10, Ho Chi Minh city, Viet Nam',
  };
  const defaultEducationItems = [
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
  ];
  const defaultExperienceItems = [
    {
      companyName: 'Apple Corp',
      positionTitle: 'Backend Engineer',
      startDate: '1/2025',
      endDate: 'Unknown',
      location: 'Silicon Valley, CA',
      description:
        'As a Backend Engineer at Apple , I am responsible for designing and implementing scalable and high-performance server-side applications. Collaborating with cross-functional teams, I contribute to the development of robust and efficient backend systems, ensuring seamless integration with front-end components. My role involves optimizing database queries, implementing RESTful APIs, and addressing security considerations in application design. I actively participate in code reviews, stay updated on industry best practices, and contribute to the overall success of the engineering team.',
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
        'At Netflix, I served as a Senior Backend Engineer, leading the development of mission-critical server-side applications. My responsibilities included designing and implementing scalable architecture, optimizing database performance, and ensuring the reliability and security of backend systems. Collaborating closely with cross-functional teams, I played a key role in feature development and the integration of new technologies. Additionally, I conducted code reviews, mentored junior engineers, and contributed to the continuous improvement of development processes.',
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
        'As a Backend Software Engineer at Google , I contribute to the development of scalable and efficient server-side applications. Working in an agile environment, I collaborate with a dynamic team to design and implement robust backend solutions. My role involves optimizing database queries, building RESTful APIs, and ensuring the seamless integration of frontend and backend components. I actively participate in code refactoring, performance tuning, and troubleshooting to deliver high-quality software. Additionally, I stay updated on industry trends and incorporate best practices into the development lifecycle.',
      isHidden: true,
      id: uuid(),
    },
  ];

  // state to store and change which section is opened
  const [currentOpenSection, setCurrentOpenSection] = useState('personal');
  const updateCurrentOpenSection = (newCurrentOpen: string): void => (newCurrentOpen === currentOpenSection ? setCurrentOpenSection('') : setCurrentOpenSection(newCurrentOpen));

  // state to store and change personal section's values
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const updatePersonalInfoOnInputChange = (type: string, value: string): void => setPersonalInfo({ ...personalInfo, [type]: value });

  // state to store and change education section's values
  // interact with value of inputs in form in education
  const [valueOfInputsInFormInEducation, setValueOfInputsInFormInEducation] = useState({ school: '', degree: '', startDate: '', endDate: '', location: '' });
  const resetValueOfInputsInFormInEducation = () => setValueOfInputsInFormInEducation({ school: '', degree: '', startDate: '', endDate: '', location: '' });
  const updateValueOfInputsInFormInEducation = (type, value) => setValueOfInputsInFormInEducation({ ...valueOfInputsInFormInEducation, [type]: value });
  // add item to education items list on form submit and delete when click button on displayed item
  const [educationItems, setEducationItems] = useState(defaultEducationItems);
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
  const [experienceItems, setExperienceItems] = useState(defaultExperienceItems);
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
    setExperienceItems(experienceItems.filter((item) => item.id !== deletedId));
  };
  // state to customize resume
  const clearResume = () => {
    setPersonalInfo({ name: '', email: '', address: '', phone: '' });
    setEducationItems([]);
    setExperienceItems([]);
  };
  const loadExample = () => {
    setPersonalInfo(defaultPersonalInfo);
    setEducationItems(defaultEducationItems);
    setExperienceItems(defaultExperienceItems);
  };
  return (
    <>
      <header className="p-12 bg-dark text-light flex items-baseline justify-between">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">CV Application</h1>
        <div className="w-10 cursor-pointer focus:scale-125 hover:scale-125 transition-transform" tabIndex={0}>
          <Icon.CVImage styles={{ borderRadius: '10px' }} />
        </div>
        <a href="https://github.com/minhhoccode111/cv-application-top" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 underline hover:no-underline">
          <Icon.Github color="#fff" width="30px" height="30px" />
          <p>View on Github</p>
        </a>
      </header>

      <main id="wrapper" className="min-h-screen xl:flex justify-evenly gap-4 p-4">
        <div className="min-w-[440px]">
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
          <Customize clearResume={clearResume} loadExample={loadExample} currentOpenSection={currentOpenSection} toggleOpenThisSection={() => updateCurrentOpenSection('customize')} />
        </div>
        <div className="min-w-[780px]">
          <Display {...personalInfo} educationItems={educationItems} experienceItems={experienceItems} />
        </div>
      </main>
      <footer className="p-16 bg-dark text-light text-3xl text-center">
        <p>
          Made with <span className="text-pink">love</span> by{' '}
          <a href="https://github.com/minhhoccode111" target="_blank" rel="noreferrer" className="underline hover:no-underline">
            minhhoccode111
          </a>
        </p>
      </footer>
    </>
  );
};
