import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const RightPane = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleIframeLoad = () => {
      console.log('Iframe loaded');
      if (iframeRef.current) {
        iframeRef.current.focus();
      }
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleIframeLoad);
      }
    };
  }, [activeTab]);

  const renderContent = () => {
    let srcUrl = '';
    switch (activeTab) {
      case 'admin':
        srcUrl = "https://procyon-guacamole-5gz4c7f7qi.hackerverse.quest/guacamole/#/client/MQBjAG15c3Fs?username=guacadmin&password=guacadmin";
        break;
      case 'developer':
        srcUrl = "https://procyon-guacamole-5gz4c7f7qi.hackerverse.quest/guacamole/#/client/MgBjAG15c3Fs?username=guacadmin&password=guacadmin";
        break;
      case 'demo':
        srcUrl = "https://info.procyon.ai/demo";
        break;
      default:
        return null;
    }

    return (
      <div className="flex flex-col items-center justify-center h-full w-full rounded-md">
        <iframe
          ref={iframeRef}
          title="Guacamole Server"
          src={srcUrl}
          className="h-full w-full border-0"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          allowFullScreen
          tabIndex="0"
          onLoad={() => console.log('Iframe loaded: ', srcUrl)}
        />
      </div>
    );
  };

  return (
    <>
      <div className="flex-1 bg p-4 overflow-auto rounded-lg h-screen mr-3 -mt-2">
        <div className="tabs flex p-2 rounded-t-lg">
          <button
            className={`tab flex items-center -ml-2 py-2 text-sm rounded-t-lg ${activeTab === 'admin' ? 'bg-black text-white' : 'bg-[#0d0d0d] text-gray-400'}`}
            onClick={() => setActiveTab('admin')}
          >
            Heimdall
            <a href="https://procyon-guacamole-5gz4c7f7qi.hackerverse.quest/guacamole/#/client/MQBjAG15c3Fs?username=guacadmin&password=guacadmin" target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} className='ml-2 h-[12px] w-[12px] mb-[1px]' />
            </a>
          </button>
          {/* Uncomment the following code if needed
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
          </button> */}
        </div>
        <div className="content bg1 -mt-6 p-4 rounded-b-lg rounded-tr-lg h-[87vh]">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default RightPane;
