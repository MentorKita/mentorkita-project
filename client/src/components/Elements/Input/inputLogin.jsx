import React, { useState } from 'react';

function InputLogin({ placeholder }) {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <input type="email" id="email" value={email} onChange={handleInputChange} className="w-[350px] h-[60px] mx-auto bg-[#ECECEC] rounded-lg px-3 py-2 mt-1 " placeholder={placeholder} required
      />
    </div>
  );
}

export default InputLogin;

