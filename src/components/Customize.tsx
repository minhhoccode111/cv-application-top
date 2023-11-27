import PropTypes from 'prop-types';
import ToggleButton from './ToggleButton';
import * as Icon from './Icons';

type CustomizeProps = {
  currentOpenSection: string;
  toggleOpenThisSection: () => void;
  loadExample: () => void;
  clearResume: () => void;
};

const Customize: React.FC<CustomizeProps> = ({ currentOpenSection, toggleOpenThisSection, loadExample, clearResume }) => {
  const isThisSectionOpened = currentOpenSection === 'customize';
  return (
    <section className="shadow-md shadow-dark max-w-md mx-auto my-4 text-darker relative bg-white">
      <header
        tabIndex={0}
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={toggleOpenThisSection}
        onKeyDown={(e: React.KeyboardEvent<HTMLHeadingElement>) => e.key === 'Enter' && (e.target as HTMLHeadingElement).click()}
      >
        <h1 className="flex items-center gap-2 text-3xl font-bold bg-white">
          <Icon.Customize height={'34px'} width={'34px'} /> Customize
        </h1>
        <ToggleButton iconType="arrow" isOpen={isThisSectionOpened} buttonOnClickCb={toggleOpenThisSection} />
      </header>
      <div className={'p-4' + (isThisSectionOpened ? ' block' : ' hidden')}>
        <div className="flex items-center justify-evenly">
          <button type="button" className="flex items-center justify-center shadow-custom gap-2" onClick={clearResume}>
            <Icon.Delete color={'#a00'} width={'30px'} height={'30px'} /> Clear Resume
          </button>
          <button type="button" className="flex items-center justify-center shadow-custom gap-2" onClick={loadExample}>
            <span className="loading"></span>
            Load Example
          </button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <button type="button" className="flex items-center justify-center shadow-custom gap-2">
            <Icon.Download color={'#a00'} width={'30px'} height={'30px'} /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

Customize.propTypes = {
  currentOpenSection: PropTypes.string.isRequired,
  toggleOpenThisSection: PropTypes.func.isRequired,
  loadExample: PropTypes.func.isRequired,
  clearResume: PropTypes.func.isRequired,
};

export default Customize;
