import React from 'react';
import Senteon from '../../assets/Senteon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const TopNavBar = () => {
  return (
    <div className="flex justify-between items-center p-4  text-white">
      <div className="flex items-center space-x-2 ">
        <img src={Senteon} alt="Icon" className="h-10 w-auto ml-2 " />
      </div>
      <button className="bg-[#50deff]   text-black text-sm py-[6px] px-6 rounded">
      <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back to Demos
      </button>
    </div>
  );
};

export default TopNavBar;
