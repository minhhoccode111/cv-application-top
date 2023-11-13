/* eslint-disable react/prop-types */
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';

const Customize = ({ currentOpenSection, toggleOpenThisSection, loadExample, clearResume }) => {
  const isThisSectionOpened = currentOpenSection === 'customize';
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
      <header tabIndex={0} className="p-4 cursor-pointer" onClick={toggleOpenThisSection} onKeyDown={(e) => e.key === 'Enter' && e.target.click()}>
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Customize height={'34px'} width={'34px'} /> Customize
        </h1>
        <div className={'absolute right-0 top-0 p-4 mx-4'}>
          <ToggleButton isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
        </div>
      </header>
      <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>
        <div className="flex items-center justify-evenly">
          <button className="flex items-center justify-center shadow-custom gap-2" onClick={clearResume}>
            <Icon.Delete color={'#a00'} width={'30px'} height={'30px'} /> Clear Resume
          </button>
          <button className="flex items-center justify-center shadow-custom gap-2" onClick={loadExample}>
            <span className="loading"></span>
            Load Example
          </button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <button className="flex items-center justify-center shadow-custom gap-2">
            <Icon.Download color={'#a00'} width={'30px'} height={'30px'} /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customize;
