import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faArrowLeft, faArrowRight,faClock  } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Tabs from './Tabs';
import SENTEON_Diagram from '../../assets/SENTEON_Diagram.jpeg'
import HEIMDALLdata from '../../assets/HEIMDALLdata.jpeg'

const LeftPane = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [taskStep, setTaskStep] = useState(1);

  const images = [
    HEIMDALLdata
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setCurrentImage('');
  };

  const nextTaskStep = () => {
    if (taskStep < taskContents.length) setTaskStep(taskStep + 1);
  };

  const prevTaskStep = () => {
    if (taskStep > 1) setTaskStep(taskStep - 1);
  };

  const jumpToStep = (step) => {
    setTaskStep(step);
  };

  const taskContents = [
    {
      title: 'Naviate to the WIndows Bastion host',
      steps: [
        'Open the Bastion Host Tab.',
        'Log into the Heimdall Data Console',
      ],
    },
    {
      title: 'Heimdall Data Dashboard',
      steps: [
        'Select the Heimdall Data Dashboard',
      ],
    },
    {
      title: 'Generate Traffic',
      steps: [
        'Navigate to the Test Application tab',
        'Refresh the app, click on some things',
      ],
    },
    {
      title: 'View Cache Traffic',
      steps: [
        'Navigate back to the Heimdall Data Console Dashboard',
        'You will see Cache Hits as well as other graphs',
      ],
    },
    {
      title: 'Disable Caching',
      steps: [
        'In the Heimdall Data Console, select Rules',
        'Uncheck the second rule that says "Match all if empty" Action "Cache" and then Commit the changes',
      ],
    },
    {
      title: 'Generate Traffic',
      steps: [
        'Navigate back to the Test Application tab',
        'Refresh the page or click around',
      ],
    },
    {
      title: 'View Cache Traffic (or lack thereof)',
      steps: [
        'Navigate to the Heimdall Data Console',
        'Select Dashboard, you should see that no Cache hits are happening now',
      ],
    },
  ];
  

  return (
    <div className="flex-1 bg p-4 ml-3 rounded-lg overflow-hidden h-full">
      <div className="bg-black py-2 px-4 rounded-lg flex flex-wrap justify-between items-center mb-4">
        <div className="flex space-x-6 mb-2 sm:mb-0 text-[19px]">
          <button className="text-white">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button className="text-white">
            <FontAwesomeIcon icon={faPause} color='#0dcaf0' />
          </button>
          <button className="text-white">
            <FontAwesomeIcon icon={faStop} />
          </button>
        </div>
        <div className="flex items-center text-white space-x-3">
        <FontAwesomeIcon icon={faClock }  className='ml-2 h-[19px] w-[19px] '/>
          <span className='font-semibold text-md'>57:50</span>
        </div>
      </div>
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="content h-full mt-4">
        {activeTab === 'introduction' && (
          <div className="h-[calc(100vh-200px)] overflow-auto custom-scrollbar p-4">
            <h1 className="text-white text-2xl mb-8 font-bold">Introduction Story</h1>
            <p className="text-white text-[13px]">
            Listen up! Customers are abandoning your slow website in droves. Your competitor is stealing the show with lightning-fast transactions. Don't let your business become yesterday's news! Heimdall Data supercharges your web applications by making databases scream, slashing costs, and safeguarding them with fortress-like security.            </p>
            <div>
              <div className="flex flex-wrap justify-center sm:justify-center  gap-4 ml-4 mt-12">
              <iframe src="https://drive.google.com/file/d/1pjC_yM9mDoa2z9wLmwg5IXif-UKY2mTH/preview" className="w-full border-2 border-red-500 rounded-lg"  allow="autoplay"></iframe>

              </div>
            </div>
          </div>
        )}
        {activeTab === 'diagrams' && (
          <div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 ml-4 mt-12">

              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Diagrams"
                  className="h-24 w-24 cursor-pointer"
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
          </div>
        )}
        <br />
        {activeTab === 'tasks' && (
          <div className="h-[calc(100vh-200px)] overflow-auto custom-scrollbar p-1">
            <div className="step-indicator flex justify-center items-center mb-6">
              {taskContents.map((_, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${taskStep > index ? 'bg-[#0dcaf0]' : 'bg-gray-600'}`}
                    onClick={() => jumpToStep(index + 1)}
                  >
                    <span className="text-black font-semibold">{index + 1}</span>
                  </div>
                  {index < taskContents.length - 1 && (
                    <div className={`flex-1 h-0.5 ${taskStep > index + 1 ? 'bg-[#0dcaf0]' : 'bg-gray-600'}`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="task-content p-4">
              <h2 className="text-white text-xl font-bold mb-4">{taskContents[taskStep - 1].title}</h2>
              <ul className="text-white list-disc list-inside ml-6">
                {taskContents[taskStep - 1].steps.map((step, idx) => (
                  <li key={idx} className="mb-2 text-[12px] pl-4" style={{ textIndent: '-1.5em', paddingLeft: '1em' }}>{step}</li>
                ))}
              </ul>
              <div className="flex justify-between mt-6">
                {taskStep > 1 ? (
                  <button
                    className="bg-transparent hover:bg-[#0dcaf0] hover:text-black border border-white hover:border-black text-white py-2 px-4 rounded-3xl"
                    onClick={prevTaskStep}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                    Back
                  </button>
                ) : (
                  <div className="invisible">
                    <button
                      className="bg-transparent border border-white text-white py-2 px-4 rounded-3xl"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                      Back
                    </button>
                  </div>
                )}
                {taskStep < taskContents.length && (
                  <button
                    className="bg-transparent hover:bg-[#0dcaf0] hover:text-black border border-white hover:border-black text-white py-2 px-4 rounded-3xl"
                    onClick={nextTaskStep}
                  >
                    Next
                    <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
      <Modal open={open} onClose={closeModal} center classNames={{ modal: 'custom-modal' }}>
        <img src={currentImage} alt="Diagrams" className="max-w-full max-h-full rounded-lg" />
      </Modal>
    </div>
  );
};

export default LeftPane;
