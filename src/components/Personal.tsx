import PropTypes from 'prop-types';
import Input from './Input';
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';

type PersonalProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  inputOnChangeCb: (type: string, value: string) => void;
  currentOpenSection: string;
  toggleOpenThisSection: () => void;
};

const Personal: React.FC<PersonalProps> = ({ name, email, phone, address, inputOnChangeCb, currentOpenSection, toggleOpenThisSection }) => {
  const isThisSectionOpened = currentOpenSection === 'personal';
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
      <header tabIndex={0} className="p-4 cursor-pointer flex items-center justify-between" onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && (e.target as HTMLElement).click()}>
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Personal height={'34px'} width={'34px'} /> Personal
        </h1>
        <ToggleButton iconType={'arrow'} isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
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

Personal.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  currentOpenSection: PropTypes.string.isRequired,
  inputOnChangeCb: PropTypes.func.isRequired,
  toggleOpenThisSection: PropTypes.func.isRequired,
};
export default Personal;
