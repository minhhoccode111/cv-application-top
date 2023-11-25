import PropTypes from 'prop-types';
type InputProps = {
  label: string;
  inputType: string;
  infoType: string;
  inputOnChangeCb: (type: string, value: string) => void;
  value: string;
  placeholder: string;
};
const Input: React.FC<InputProps> = ({ label, inputType, infoType, inputOnChangeCb, value, placeholder }) => {
  return (
    <label className="flex flex-col font-bold gap-1 p-2 ">
      {label} (*)
      <input
        placeholder={placeholder}
        // onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
        onChange={(e) => inputOnChangeCb(infoType, e.target.value)}
        value={value}
        type={inputType}
        className="px-3 focus:shadow-lg bg-light focus:bg-white font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
        required
      />
    </label>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  infoType: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputOnChangeCb: PropTypes.func.isRequired,
};

export default Input;
