import { useState } from "react";
import PropTypes from "prop-types";

const CheckboxForm = ({ object, handleObjectChange, selectedObject }) => {
  const [isChecked, setIsChecked] = useState(
    selectedObject.includes(object.value)
  );

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    handleObjectChange(event);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={object.value}
        value={object.value}
        onChange={handleCheckboxChange}
        checked={isChecked}
        className="mr-2"
      />
      <label htmlFor={object.value} className={isChecked ? "font-semibold" : ""}>
        {object.label}
      </label>
    </div>
  );
};

CheckboxForm.propTypes = {
  object: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  handleObjectChange: PropTypes.func.isRequired,
  selectedObject: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default CheckboxForm;
