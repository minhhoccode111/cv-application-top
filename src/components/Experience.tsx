import PropTypes from 'prop-types';
import Input from './Input';
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';
import { useState } from 'react';

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
              <p>{item.companyName.length > 41 ? item.companyName.slice(0, 41) + '...' : item.companyName}</p>
              <div className="flex items-center gap-2">
                <ToggleButton iconType={'eye'} isOpen={item.isHidden} buttonOnClickCb={() => toggleHiddenExperienceItem(item.id)} />
                <button className="hover:scale-125 transition-transform" onClick={() => deleteExperienceItem(item.id)}>
                  <Icon.Delete color={'#a00'} width={'30px'} height={'30px'} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center p-2">
          <button className="hover:scale-125 transition-transform" onClick={updateIsDisplayForm}>
            <Icon.Add width={'30px'} height={'30px'} />
          </button>
        </div>
      </div>
    );
  }
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
      <header className="p-4 cursor-pointer flex items-center justify-between" tabIndex={0} onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && e.target.click()}>
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Experience height={'34px'} width={'34px'} /> Experience
        </h1>
        <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
      </header>
      <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>{JSXToDisplayInThisSection}</div>
    </section>
  );
};

Experience.propTypes = {
  experienceItems: PropTypes.array.isRequired,
  formOnSubmitCb: PropTypes.func.isRequired,
  currentOpenSection: PropTypes.string,
  deleteExperienceItem: PropTypes.func.isRequired,
  valueOfInputsInForm: PropTypes.object.isRequired,
  toggleOpenThisSection: PropTypes.func.isRequired,
  resetValueOfInputsInForm: PropTypes.func.isRequired,
  updateValueOfInputsInForm: PropTypes.func.isRequired,
  toggleHiddenExperienceItem: PropTypes.func.isRequired,
};

export default Experience;
