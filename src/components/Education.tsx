import { FormEvent, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { EducationItem } from '../methods/types';
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';
import Input from './Input';

type EducationProps = {
  educationItems: EducationItem[];
  formOnSubmitCb: (e: FormEvent) => void;
  currentOpenSection: string;
  deleteEducationItem: (id: string) => void;
  toggleOpenThisSection: () => void;
  toggleHiddenEducationItem: (id: string) => void;
  educationDispatch: any;
  educationStates: any;
};

const Education: React.FC<EducationProps> = memo(
  ({
    educationItems,
    formOnSubmitCb,
    currentOpenSection,
    deleteEducationItem,
    toggleOpenThisSection,
    educationDispatch,
    educationStates,
    toggleHiddenEducationItem,
  }) => {
    const isThisSectionOpened = currentOpenSection === 'education';
    // toggle display form or a list of education items
    const [isDisplayForm, setIsDisplayForm] = useState<boolean>(false);
    // choose to display form or a list of education items
    let JSXToDisplayInThisSection;
    if (isDisplayForm) {
      JSXToDisplayInThisSection = (
        <form
          onSubmit={(e: FormEvent): void => {
            formOnSubmitCb(e);
            setIsDisplayForm(!isDisplayForm);
          }}
        >
          <Input
            placeholder={'Enter School / University'}
            label={'School'}
            value={educationStates.school}
            infoType={'school'}
            dispatch={educationDispatch}
            inputType={'text'}
          />
          <Input
            placeholder={'Enter Degree / Field of Study'}
            label={'Degree'}
            value={educationStates.degree}
            infoType={'degree'}
            dispatch={educationDispatch}
            inputType={'text'}
          />
          <Input
            placeholder={'Enter Start Date'}
            label={'Start Date'}
            value={educationStates.startDate}
            infoType={'startDate'}
            dispatch={educationDispatch}
            inputType={'text'}
          />
          <Input
            placeholder={'Enter End Date'}
            label={'End Date'}
            value={educationStates.endDate}
            infoType={'endDate'}
            dispatch={educationDispatch}
            inputType={'text'}
          />
          <Input
            placeholder={'Enter Location'}
            label={'Location'}
            value={educationStates.location}
            infoType={'location'}
            dispatch={educationDispatch}
            inputType={'text'}
          />
          <div className="flex justify-evenly px-2 py-4">
            <button
              className="shadow-custom"
              onClick={() => setIsDisplayForm(!isDisplayForm)}
              type="button"
            >
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
              <li
                key={item.id}
                className="flex justify-between items-center py-4 text-lg"
              >
                <p>
                  {item.school.length > 41
                    ? item.school.slice(0, 41) + '...'
                    : item.school}
                </p>
                <div className="flex items-center gap-2">
                  <ToggleButton
                    iconType={'eye'}
                    isOpen={item.isHidden}
                    buttonOnClickCb={() => toggleHiddenEducationItem(item.id)}
                  />
                  <button
                    type="button"
                    className="hover:scale-125 transition-transform"
                    onClick={() => deleteEducationItem(item.id)}
                  >
                    <Icon.Delete
                      color={'#a00'}
                      width={'30px'}
                      height={'30px'}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center p-2">
            <button
              type="button"
              className="hover:scale-125 transition-transform"
              onClick={() => setIsDisplayForm(!isDisplayForm)}
            >
              <Icon.Add width={'30px'} height={'30px'} />
            </button>
          </div>
        </div>
      );
    }
    return (
      <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
        <header
          className="p-4 cursor-pointer flex items-center justify-between"
          tabIndex={0}
          onClick={toggleOpenThisSection}
          onKeyDown={(e) =>
            e.key === 'Enter' && (e.target as HTMLHeadingElement).click()
          }
        >
          <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
            <Icon.Education height={'34px'} width={'34px'} /> Education
          </h1>
          <ToggleButton
            isOpen={isThisSectionOpened}
            buttonOnClickCb={toggleOpenThisSection}
            iconType={'arrow'}
          />
        </header>
        <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>
          {JSXToDisplayInThisSection}
        </div>
      </section>
    );
  }
);

Education.propTypes = {
  educationItems: PropTypes.array.isRequired,
  formOnSubmitCb: PropTypes.func.isRequired,
  currentOpenSection: PropTypes.string.isRequired,
  deleteEducationItem: PropTypes.func.isRequired,
  toggleOpenThisSection: PropTypes.func.isRequired,
  toggleHiddenEducationItem: PropTypes.func.isRequired,
};

export default Education;
