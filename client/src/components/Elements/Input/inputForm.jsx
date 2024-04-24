import PropTypes from "prop-types";

const InputForm = ({ type, label, placeholder, name, requiredStatus }) => {
  const statusRequired = requiredStatus ? "required" : "";

  return (
    <div className="mt-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder={placeholder}
        required={statusRequired}
      />
    </div>
  );
};

InputForm.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  requiredStatus: PropTypes.bool,
};

export default InputForm;
