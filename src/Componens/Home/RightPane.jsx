import React, { useState } from 'react';

const RightPane = () => {
  const [activeTab, setActiveTab] = useState('admin');


  const renderContent = () => {
    switch (activeTab) {
      case 'admin':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full rounded-md">
            <iframe
              title="Guacamole Server"
              src="https://procyon-guacamole-5gz4c7f7qi.hackerverse.quest/guacamole/#/client/MQBjAG15c3Fs?username=guacadmin&password=guacadmin"
              className="h-full w-full border-0"
            />
          </div>
        );
      case 'developer':
        return <div className="text-white">Developer Machine content</div>;
      case 'demo':
        return <div className="text-white">Schedule a demo content</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex-1 bg p-4 overflow-auto rounded-lg h-full mr-3 -mt-2">
        <div className="tabs flex p-2 rounded-t-lg">
          <button
            className={`tab flex items-center -ml-2 py-2 text-sm rounded-t-lg ${activeTab === 'admin' ? 'bg-black text-white' : 'bg-[#0d0d0d] text-gray-400'}`}
            onClick={() => setActiveTab('admin')}
          >
            Admin Machine
            <a href="https://procyon-guacamole-5gz4c7f7qi.hackerverse.quest/guacamole/#/client/MQBjAG15c3Fs?username=guacadmin&password=guacadmin" target="_blank">
              <img src='https://app.hackerverse.quest/assets/kikrr/img/window-extract.png' className='h-[11px] w-[11px] ml-2' alt='Admin Icon' />
            </a>
          </button>
          <button
            className={`tab flex items-center -ml-2 py-2 text-sm rounded-t-lg ${activeTab === 'developer' ? 'bg-black text-white' : 'bg-[#0d0d0d] text-gray-400'}`}
            onClick={() => setActiveTab('developer')}
          >
            Developer Machine
            <img src='https://app.hackerverse.quest/assets/kikrr/img/window-extract.png' className='h-[11px] w-[11px] ml-2' alt='Developer Icon' />
          </button>
          <button
            className={`tab flex items-center -ml-2 py-2 text-sm rounded-t-lg ${activeTab === 'demo' ? 'bg-black text-white' : 'bg-[#0d0d0d] text-gray-400'}`}
            onClick={() => setActiveTab('demo')}
          >
            Schedule a demo
            <img src='https://app.hackerverse.quest/assets/kikrr/img/window-extract.png' className='h-[11px] w-[11px] ml-2' alt='Demo Icon' />
          </button>
        </div>
        <div className="content bg1 -mt-6 p-8 rounded-b-lg rounded-tr-lg h-[500px]">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default RightPane;
