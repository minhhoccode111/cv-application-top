/* eslint-disable react/prop-types */
import { Up, Down, Show, Hide } from './Icons';

export const ToggleButton = ({ handleChange, isOpen, iconType = 'arrow' }) => {
  if (iconType === 'arrow') {
    return (
      <button type="button" onClick={handleChange} className={'p-4 mx-4 my-1'}>
        {isOpen ? <Up color="#132043" height={'30px'} width={'30px'} /> : <Down color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  } else {
    return (
      <button type="button" onClick={handleChange} className={'p-4 mx-4 my-1'}>
        {isOpen ? <Show color="#132043" height={'30px'} width={'30px'} /> : <Hide color="#132043" height={'30px'} width={'30px'} />}
      </button>
    );
  }
};
