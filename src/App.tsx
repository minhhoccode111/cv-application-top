import { FormEvent, useState, useMemo, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import * as Icon from './components/Icons';
import './App.css';
import Display from './components/Display';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Customize from './components/Customize';
import { defaultPersonalInfo, defaultEducationItems, defaultExperienceItems } from './methods/default-values';
import { personalReducer, educationReducer, experienceReducer } from './methods/reducers';
import { PersonalInfo, EducationItem, ExperienceItem } from './methods/types';

export const App = () => {
  // state to store and change which section is opened
  const [currentOpenSection, setCurrentOpenSection] = useState<string>('personal');
  const updateCurrentOpenSection = (newCurrentOpen: string): void => (newCurrentOpen === currentOpenSection ? setCurrentOpenSection('') : setCurrentOpenSection(newCurrentOpen));

  // state to store and change personal section's values
  const [personalStates, personalDispatch] = useReducer(personalReducer, defaultPersonalInfo);

  // state to store and change education section's values
  // interact with value of inputs in form in education
  // const [valueOfInputsInFormInEducation, setValueOfInputsInFormInEducation] = useState<EducationItem>({
  //   school: '',
  //   degree: '',
  //   startDate: '',
  //   endDate: '',
  //   location: '',
  //   isHidden: false,
  //   id: uuid(),
  // });
  // const resetValueOfInputsInFormInEducation = (): void => setValueOfInputsInFormInEducation({ school: '', degree: '', startDate: '', endDate: '', location: '', isHidden: false, id: uuid() });

  // const updateValueOfInputsInFormInEducation = (type: string, value: string): void => setValueOfInputsInFormInEducation({ ...valueOfInputsInFormInEducation, [type]: value });
  const [educationStates, educationDispatch] = useReducer(educationReducer, {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });
  // add item to education items list on form submit and delete when click button on displayed item
  const [educationItems, setEducationItems] = useState<EducationItem[]>(defaultEducationItems);
  const formOnSubmitCbInEducation = (e: FormEvent): void => {
    e.preventDefault();
    setEducationItems([...educationItems, { ...valueOfInputsInFormInEducation, id: uuid(), isHidden: false }]);
    // resetValueOfInputsInFormInEducation();
    educationDispatch({ type: 'clear' });
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
    personalDispatch({ type: 'clear' });
    setEducationItems([]);
    setExperienceItems([]);
  };
  const loadExample = (): void => {
    personalDispatch({ type: 'load' });
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
          <Personal currentOpenSection={currentOpenSection} toggleOpenThisSection={() => updateCurrentOpenSection('personal')} personalStates={personalStates} personalDispatch={personalDispatch} />
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
          <Display educationItems={educationItems} experienceItems={experienceItems} personalStates={personalStates} />
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
