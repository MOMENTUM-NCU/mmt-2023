import React, { useState } from 'react';
import Button from "@/components/Button/index"

function CampusAmbassador() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCampusAmbassadorChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1>Are You Sure You Want To Be A Part of Campus Ambassador</h1>
      <label>
        <input
          type="checkbox"
          name='CampusAmbassador'
          checked={isChecked}
          onChange={handleCampusAmbassadorChange}
        />
      </label>
      {/* <p>CampusAmbassador is {isChecked ? 'checked' : 'unchecked'}.</p> */}
      <Button>Submit</Button>
    </div>
  );
}

export default CampusAmbassador;
