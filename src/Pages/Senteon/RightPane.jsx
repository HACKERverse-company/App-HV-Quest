import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const RightPane = () => {
  const [activeTab, setActiveTab] = useState('admin');


  const renderContent = () => {
    switch (activeTab) {
      case 'admin':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full rounded-md">
            <iframe
              title="Guacamole Server"
              src="https://literate-ferret-40jiw190.hackerverse.quest/guacamole/#/client/MQBjAG15c3Fs?username=guacadmin&password=guacadmin"
              className="h-full w-full border-0"
            />
          </div>
        );
      case 'developer':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full rounded-md">
            <iframe
              title="Guacamole Server"
              src="https://senteon.co"
              className="h-full w-full border-0"
            />
          </div>
        );
      case 'demo':
        return (
          <div className="flex flex-col items-center justify-center h-full w-full rounded-md">
            <iframe
              title="Guacamole Server"
              src="https://info.procyon.ai/demo"
              className="h-full w-full border-0"
            />
          </div>
        );
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
            Kali
            <a href="https://literate-ferret-40jiw190.hackerverse.quest/guacamole/#/client/MQBjAG15c3Fs?username=guacadmin&password=guacadmin" target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt}  className='ml-2 h-[12px] w-[12px] mb-[1px]'/>
            </a>
          </button>
          <button
            className={`tab flex items-center -ml-2 py-2 text-sm rounded-t-lg ${activeTab === 'developer' ? 'bg-black text-white' : 'bg-[#0d0d0d] text-gray-400'}`}
            onClick={() => setActiveTab('developer')}
          >
            Senteon
           <a href="https://senteon.co/" target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt}  className='ml-2 h-[12px] w-[12px] mb-[1px]'/>
            </a>
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
