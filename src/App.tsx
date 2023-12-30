import { FormEvent, useState, useCallback, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import * as Icon from './components/Icons';
import './App.css';
import Display from './components/Display';
import Personal from './components/Personal';
import Education from './components/Education';
import Customize from './components/Customize';
import Experience from './components/Experience';
import { defaultPersonalInfo, defaultEducationItems, defaultExperienceItems } from './methods/default-values';
import { personalReducer, educationReducer, experienceReducer } from './methods/reducers';
import { EducationItem, ExperienceItem } from './methods/types';

export const App = () => {
  // state to store and change which section is opened
  const [currentOpenSection, setCurrentOpenSection] = useState<string>('personal');
  const updateCurrentOpenSection = useCallback(
    (newCurrentOpen: string): void => (newCurrentOpen === currentOpenSection ? setCurrentOpenSection('') : setCurrentOpenSection(newCurrentOpen)),
    [currentOpenSection]
  );

  // state to store and change personal section's values
  const [personalStates, personalDispatch] = useReducer(personalReducer, defaultPersonalInfo);

  // state to store and change education form values
  const [educationStates, educationDispatch] = useReducer(educationReducer, {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });
  // add item to education items list on form submit and delete when click button on displayed item
  const [educationItems, setEducationItems] = useState<EducationItem[]>(defaultEducationItems);
  const formOnSubmitCbInEducation = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();
      setEducationItems([...educationItems, { ...educationStates, id: uuid(), isHidden: false }]);
      educationDispatch({ type: 'clear' });
    },
    [educationItems, educationStates]
  );

  const toggleHiddenEducationItemInEducation = useCallback(
    (toggledId: string): void => {
      setEducationItems(
        educationItems.map((item) => {
          if (item.id === toggledId) return { ...item, isHidden: !item.isHidden };
          return { ...item };
        })
      );
    },
    [educationItems]
  );

  const deleteEducationItemInEducation = useCallback(
    (deletedId: string): void => {
      setEducationItems(educationItems.filter((item) => item.id !== deletedId));
    },
    [educationItems]
  );

  // state to store and change experience section's values
  const [experienceStates, experienceDispatch] = useReducer(experienceReducer, { company: '', position: '', startDate: '', endDate: '', location: '', description: '' });

  // add item to education items list on form submit and delete when click button on displayed item
  const [experienceItems, setExperienceItems] = useState<ExperienceItem[]>(defaultExperienceItems);
  const formOnSubmitCbInExperience = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();
      setExperienceItems([...experienceItems, { ...experienceStates, id: uuid(), isHidden: false }]);
      experienceDispatch({ type: 'clear' });
    },
    [experienceItems, experienceStates]
  );

  const toggleHiddenExperienceItemInExperience = useCallback(
    (toggledId: string): void => {
      setExperienceItems(
        experienceItems.map((item) => {
          if (item.id === toggledId) return { ...item, isHidden: !item.isHidden };
          return { ...item };
        })
      );
    },
    [experienceItems]
  );

  const deleteExperienceItemInExperience = useCallback(
    (deletedId: string): void => {
      setExperienceItems(experienceItems.filter((item) => item.id !== deletedId));
    },
    [experienceItems]
  );

  // state to customize resume
  const clearResume = useCallback((): void => {
    personalDispatch({ type: 'clear' });
    setEducationItems([]);
    setExperienceItems([]);
  }, []);

  const loadExample = useCallback((): void => {
    personalDispatch({ type: 'load' });
    setEducationItems(defaultEducationItems);
    setExperienceItems(defaultExperienceItems);
  }, []);
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
            educationStates={educationStates}
            educationDispatch={educationDispatch}
            currentOpenSection={currentOpenSection}
            formOnSubmitCb={formOnSubmitCbInEducation}
            deleteEducationItem={deleteEducationItemInEducation}
            toggleHiddenEducationItem={toggleHiddenEducationItemInEducation}
            toggleOpenThisSection={() => updateCurrentOpenSection('education')}
          />
          <Experience
            experienceItems={experienceItems}
            experienceStates={experienceStates}
            currentOpenSection={currentOpenSection}
            experienceDispatch={experienceDispatch}
            formOnSubmitCb={formOnSubmitCbInExperience}
            deleteExperienceItem={deleteExperienceItemInExperience}
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
