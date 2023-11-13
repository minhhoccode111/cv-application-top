/* eslint-disable react/prop-types */
import Input from './Input';
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';

const Personal = ({ name, email, phone, address, inputOnChangeCb, currentOpenSection, toggleOpenThisSection }) => {
  const isThisSectionOpened = currentOpenSection === 'personal';
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
      <header tabIndex={0} className="p-4 cursor-pointer" onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && e.target.click()}>
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Personal height={'34px'} width={'34px'} /> Personal
        </h1>
        <div className={'absolute right-0 top-0 p-4 mx-4'}>
          <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
        </div>
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

export default Personal;
