import React from 'react';

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs flex flex-wrap justify-around  bg-[#00000040] rounded-lg ">
      <button 
        className={`text-sm ml-4 px-1 py-2 text-white  focus:outline-none ${activeTab === 'introduction' ? 'border-b-2 border-[#0dcaf0]' : ''}`}
        onClick={() => onTabClick('introduction')}
      >
        Introduction
      </button>
      <button 
        className={`text-sm  px-1 py-2 text-white  focus:outline-none ${activeTab === 'diagrams' ? 'border-b-2 border-[#0dcaf0]' : ''}`}
        onClick={() => onTabClick('diagrams')}
      >
        Diagrams and Docs
      </button>
      <button 
        className={`text-sm mr-4 px-1 py-2 text-white  focus:outline-none ${activeTab === 'tasks' ? 'border-b-2 border-[#0dcaf0]' : ''}`}
        onClick={() => onTabClick('tasks')}
      >
        Tasks
      </button>
    </div>
  );
};

export default Tabs;
