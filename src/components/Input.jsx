/* eslint-disable react/prop-types */
export const Input = ({ label, inputType, infoType, handleChange, value }) => {
  return (
    <label className="flex flex-col font-bold gap-1 p-2 ">
      {label} (*)
      <input
        onChange={(e) => handleChange(infoType, e.target.value)}
        value={value}
        type={inputType}
        className="px-3 focus:shadow-lg bg-light focus:bg-transparent font-light py-1 rounded-lg outline-none border border-transparent focus:border-dark"
      />
    </label>
  );
};
