import { FormEvent, useState, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';
import Input from './Input';

type ExperienceItem = {
  id?: string;
  company: string;
  endDate: string;
  location: string;
  position: string;
  startDate: string;
  isHidden?: boolean;
  description: string;
};

type ExperienceProps = {
  experienceStates: any;
  experienceDispatch: any;
  currentOpenSection: string;
  toggleOpenThisSection: () => void;
  experienceItems: ExperienceItem[];
  formOnSubmitCb: (e: FormEvent) => void;
  deleteExperienceItem: (id: string) => void;
  toggleHiddenExperienceItem: (id: string) => void;
};

const Experience: React.FC<ExperienceProps> = memo(
  ({ formOnSubmitCb, experienceItems, experienceStates, experienceDispatch, currentOpenSection, deleteExperienceItem, toggleOpenThisSection, toggleHiddenExperienceItem }) => {
    const isThisSectionOpened = currentOpenSection === 'experience';
    // toggle display form or a list of experience items
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const updateIsDisplayForm = useCallback(() => {
      setIsDisplayForm(!isDisplayForm);
    }, [isDisplayForm]);
    // choose to display form or a list of experience items
    let JSXToDisplayInThisSection;
    if (isDisplayForm) {
      JSXToDisplayInThisSection = (
        <form
          onSubmit={(e) => {
            updateIsDisplayForm();
            formOnSubmitCb(e);
          }}
        >
          <Input inputType={'text'} placeholder={'Enter Company Name'} label={'Company Name'} value={experienceStates.company || ''} infoType={'company'} dispatch={experienceDispatch} />
          <Input inputType={'text'} placeholder={'Enter Position Title'} label={'Position Title'} value={experienceStates.position || ''} infoType={'position'} dispatch={experienceDispatch} />
          <Input inputType={'text'} placeholder={'Enter Start Date'} label={'Start Date'} value={experienceStates.startDate || ''} infoType={'startDate'} dispatch={experienceDispatch} />
          <Input inputType={'text'} placeholder={'Enter End Date'} label={'End Date'} value={experienceStates.endDate || ''} infoType={'endDate'} dispatch={experienceDispatch} />
          <Input inputType={'text'} placeholder={'Enter Location'} label={'Location'} value={experienceStates.location || ''} infoType={'location'} dispatch={experienceDispatch} />
          <Input inputType={'text'} placeholder={'Enter Job Description'} label={'Description'} value={experienceStates.description || ''} infoType={'description'} dispatch={experienceDispatch} />
          <div className="flex justify-evenly px-2 py-4">
            <button className="shadow-custom" onClick={updateIsDisplayForm} type="button">
              Cancel
            </button>
            <button className="shadow-custom" type="submit">
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
                <p>{item.company.length > 41 ? item.company.slice(0, 41) + '...' : item.company}</p>
                <div className="flex items-center gap-2">
                  <ToggleButton iconType={'eye'} isOpen={item.isHidden || false} buttonOnClickCb={() => toggleHiddenExperienceItem(item.id || '')} />
                  <button type="button" className="hover:scale-125 transition-transform" onClick={() => deleteExperienceItem(item.id || '')}>
                    <Icon.Delete color={'#a00'} width={'30px'} height={'30px'} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center p-2">
            <button type="button" className="hover:scale-125 transition-transform" onClick={updateIsDisplayForm}>
              <Icon.Add width={'30px'} height={'30px'} />
            </button>
          </div>
        </div>
      );
    }
    return (
      <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
        <header className="p-4 cursor-pointer flex items-center justify-between" tabIndex={0} onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && (e.target as HTMLElement).click()}>
          <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
            <Icon.Experience height={'34px'} width={'34px'} /> Experience
          </h1>
          <ToggleButton iconType={'arrow'} isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
        </header>
        <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>{JSXToDisplayInThisSection}</div>
      </section>
    );
  }
);

Experience.propTypes = {
  formOnSubmitCb: PropTypes.func.isRequired,
  experienceItems: PropTypes.array.isRequired,
  experienceDispatch: PropTypes.func.isRequired,
  experienceStates: PropTypes.object.isRequired,
  currentOpenSection: PropTypes.string.isRequired,
  deleteExperienceItem: PropTypes.func.isRequired,
  toggleOpenThisSection: PropTypes.func.isRequired,
  toggleHiddenExperienceItem: PropTypes.func.isRequired,
};

export default Experience;
