import { memo } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import * as Icon from './Icons';
import ToggleButton from './ToggleButton';

type PersonalProps = {
  personalStates: any;
  personalDispatch: any;
  currentOpenSection: string;
  toggleOpenThisSection: () => void;
};

const Personal: React.FC<PersonalProps> = memo(
  ({
    currentOpenSection,
    toggleOpenThisSection,
    personalStates,
    personalDispatch,
  }) => {
    const isThisSectionOpened = currentOpenSection === 'personal';
    return (
      <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
        <header
          tabIndex={0}
          className="p-4 cursor-pointer flex items-center justify-between"
          onClick={toggleOpenThisSection}
          onKeyDown={(e) =>
            e.key === 'Enter' && (e.target as HTMLElement).click()
          }
        >
          <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
            <Icon.Personal height={'34px'} width={'34px'} /> Personal
          </h1>
          <ToggleButton
            iconType={'arrow'}
            isOpen={isThisSectionOpened}
            buttonOnClickCb={toggleOpenThisSection}
          />
        </header>
        <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>
          <Input
            placeholder={'First and last name'}
            infoType={'name'}
            label={'Full name'}
            inputType={'text'}
            value={personalStates.name}
            dispatch={personalDispatch}
          />
          <Input
            placeholder={'Enter your email'}
            infoType={'email'}
            label={'Email'}
            inputType={'email'}
            value={personalStates.email}
            dispatch={personalDispatch}
          />
          <Input
            placeholder={'Enter phone number'}
            infoType={'phone'}
            label={'Phone number'}
            inputType={'tel'}
            value={personalStates.phone}
            dispatch={personalDispatch}
          />
          <Input
            placeholder={'City, Country'}
            infoType={'address'}
            label={'Address'}
            inputType={'text'}
            value={personalStates.address}
            dispatch={personalDispatch}
          />
        </div>
      </section>
    );
  }
);

Personal.propTypes = {
  currentOpenSection: PropTypes.string.isRequired,
  toggleOpenThisSection: PropTypes.func.isRequired,
  personalStates: PropTypes.object.isRequired,
  personalDispatch: PropTypes.func.isRequired,
};
export default Personal;
