import PropTypes from 'prop-types';
import { memo } from 'react';

type InputProps = {
  dispatch: any;
  label: string;
  value: string;
  infoType: string;
  inputType: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = memo(
  ({ label, inputType, infoType, value, placeholder, dispatch }) => {
    return (
      <label className="flex flex-col font-bold gap-1 p-2 ">
        {label} (*)
        <input
          placeholder={placeholder}
          onChange={(e) => dispatch({ type: infoType, value: e.target.value })}
          value={value}
          type={inputType}
          className="px-3 focus:shadow-lg bg-light focus:bg-white font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
          required
        />
      </label>
    );
  }
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  infoType: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
