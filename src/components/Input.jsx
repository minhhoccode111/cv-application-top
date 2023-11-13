/* eslint-disable react/prop-types */
const Input = ({ label, inputType = 'text', infoType, inputOnChangeCb, value, placeholder }) => {
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

export default Input;
