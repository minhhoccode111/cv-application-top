import PropTypes from 'prop-types';
import Input from './Input';
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';
import { useState } from 'react';

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
          {educationItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-4 text-lg">
              <p>{item.school.length > 41 ? item.school.slice(0, 41) + '...' : item.school}</p>
              <div className="flex items-center gap-2">
                <ToggleButton iconType={'eye'} isOpen={item.isHidden} buttonOnClickCb={() => toggleHiddenEducationItem(item.id)} />
                <button className="hover:scale-125 transition-transform" onClick={() => deleteEducationItem(item.id)}>
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
          <Icon.Education height={'34px'} width={'34px'} /> Education
        </h1>
        <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
      </header>
      <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>{JSXToDisplayInThisSection}</div>
    </section>
  );
};

Education.propTypes = {
  educationItems: PropTypes.array.isRequired,
  formOnSubmitCb: PropTypes.func.isRequired,
  currentOpenSection: PropTypes.string,
  deleteEducationItem: PropTypes.func.isRequired,
  valueOfInputsInForm: PropTypes.object.isRequired,
  toggleOpenThisSection: PropTypes.func.isRequired,
  resetValueOfInputsInForm: PropTypes.func.isRequired,
  updateValueOfInputsInForm: PropTypes.func.isRequired,
  toggleHiddenEducationItem: PropTypes.func.isRequired,
};

export default Education;
