import { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import * as Icon from './components/Icons';
import './App.css';
import Display from './components/Display';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Customize from './components/Customize';

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  isHidden: boolean;
  id: string;
};

export type ExperienceItem = {
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  isHidden: boolean;
  id: string;
};

export const App = () => {
  // default content
  const defaultPersonalInfo: PersonalInfo = {
    name: 'Dang Hoang Minh',
    email: 'minhhoccode111@gmail.com',
    phone: '+84 123123123',
    address: 'District 10, Ho Chi Minh city, Viet Nam',
  };
  const defaultEducationItems: EducationItem[] = [
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
  const defaultExperienceItems: ExperienceItem[] = [
    {
      companyName: 'Apple Corp',
      positionTitle: 'Backend Developer',
      startDate: '1/2025',
      endDate: 'Unknown',
      location: 'Silicon Valley, CA',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
      isHidden: false,
      id: uuid(),
    },
    {
      companyName: 'Netflix Corp',
      positionTitle: 'Senior Backend Developer',
      startDate: '1/2026',
      endDate: 'Unknown',
      location: 'Seattle, WA',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
      isHidden: true,
      id: uuid(),
    },
  ];

  // state to store and change which section is opened
  const [currentOpenSection, setCurrentOpenSection] = useState<string>('personal');
  const updateCurrentOpenSection = (newCurrentOpen: string): void => (newCurrentOpen === currentOpenSection ? setCurrentOpenSection('') : setCurrentOpenSection(newCurrentOpen));

  // state to store and change personal section's values
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(defaultPersonalInfo);
  const updatePersonalInfoOnInputChange = (type: string, value: string): void => setPersonalInfo({ ...personalInfo, [type]: value });

  // state to store and change education section's values
  // interact with value of inputs in form in education
  const [valueOfInputsInFormInEducation, setValueOfInputsInFormInEducation] = useState<EducationItem>({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
    isHidden: false,
    id: uuid(),
  });
  const resetValueOfInputsInFormInEducation = (): void => setValueOfInputsInFormInEducation({ school: '', degree: '', startDate: '', endDate: '', location: '', isHidden: false, id: uuid() });
  const updateValueOfInputsInFormInEducation = (type: string, value: string): void => setValueOfInputsInFormInEducation({ ...valueOfInputsInFormInEducation, [type]: value });
  // add item to education items list on form submit and delete when click button on displayed item
  const [educationItems, setEducationItems] = useState<EducationItem[]>(defaultEducationItems);
  const formOnSubmitCbInEducation = (e: FormEvent): void => {
    e.preventDefault();
    setEducationItems([...educationItems, { ...valueOfInputsInFormInEducation, id: uuid(), isHidden: false }]);
    resetValueOfInputsInFormInEducation();
  };
  const toggleHiddenEducationItemInEducation = (toggledId: string): void => {
    setEducationItems(
      educationItems.map((item) => {
        if (item.id === toggledId) return { ...item, isHidden: !item.isHidden };
        return { ...item };
      })
    );
  };
  const deleteEducationItemInEducation = (deletedId: string): void => {
    setEducationItems(educationItems.filter((item) => item.id !== deletedId));
  };
  // state to store and change experience section's values
  // interact with value of inputs in form in experience
  const [valueOfInputsInFormInExperience, setValueOfInputsInFormInExperience] = useState({ companyName: '', positionTitle: '', startDate: '', endDate: '', location: '', description: '' });
  const resetValueOfInputsInFormInExperience = (): void => setValueOfInputsInFormInExperience({ companyName: '', positionTitle: '', startDate: '', endDate: '', location: '', description: '' });
  const updateValueOfInputsInFormInExperience = (type: string, value: string): void => setValueOfInputsInFormInExperience({ ...valueOfInputsInFormInExperience, [type]: value });
  // add item to education items list on form submit and delete when click button on displayed item
  const [experienceItems, setExperienceItems] = useState<ExperienceItem[]>(defaultExperienceItems);
  const formOnSubmitCbInExperience = (e: FormEvent): void => {
    e.preventDefault();
    setExperienceItems([...experienceItems, { ...valueOfInputsInFormInExperience, id: uuid(), isHidden: false }]);
    resetValueOfInputsInFormInExperience();
  };
  const toggleHiddenExperienceItemInExperience = (toggledId: string): void => {
    setExperienceItems(
      experienceItems.map((item) => {
        if (item.id === toggledId) return { ...item, isHidden: !item.isHidden };
        return { ...item };
      })
    );
  };
  const deleteExperienceItemInExperience = (deletedId: string): void => {
    setExperienceItems(experienceItems.filter((item) => item.id !== deletedId));
  };
  // state to customize resume
  const clearResume = (): void => {
    setPersonalInfo({ name: '', email: '', address: '', phone: '' });
    setEducationItems([]);
    setExperienceItems([]);
  };
  const loadExample = (): void => {
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
        <a href="https://github.com/minhhoccode111/cv-application-top" target="_blank" rel="noopener" className="flex items-center justify-center gap-2 underline hover:no-underline">
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
          <a href="https://github.com/minhhoccode111" target="_blank" rel="noopener" className="underline hover:no-underline">
            minhhoccode111
          </a>
        </p>
      </footer>
    </>
  );
};
