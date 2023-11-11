/* eslint-disable react/prop-types */
import { Up, Down } from './Icons';

export const Button = ({ handleChange, isOpen }) => {
  return (
    <button type="button" onClick={handleChange} className={'p-4 mx-4 my-1'}>
      {isOpen ? <Up color="#132043" height={'30px'} width={'30px'} /> : <Down color="#132043" height={'30px'} width={'30px'} />}
    </button>
  );
};
