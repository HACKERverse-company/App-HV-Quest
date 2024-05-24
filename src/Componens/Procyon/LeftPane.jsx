import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Tabs from './Tabs';
import Video from '../../assets/slideshow.mp4'

const LeftPane = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [taskStep, setTaskStep] = useState(1);

  const images = [
    "https://app.hackerverse.quest/assets/kikrr/img/procyon/imgpsh_fullsize_anim.jpeg",
    "https://app.hackerverse.quest/assets/kikrr/img/procyon/imgpsh_fullsize_anim.jpeg"
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
      title: 'REQUEST',
      steps: [
        'Navigate to the Procyon Developer Machine',
        'In the bottom right corner, open the task bar, and open the Procyon agent.',
        'Click on the icon that looks like a Web Browser Window (Chrome should bring up the Procyon UI)',
        'On the left side navigation, select "Targets"',
        'Check the box for Server.',
        'Under the "Prod" tile, click on Request, enter "ec2-user" as the login principal, then "Add to Queue", and click "Continue"',
        'Enter a name for the Request so the Admin recognizes it, and the amount of time you need access. (You can use the default of 1 hour), then "Submit"',
      ],
      substeps: [],
    },
    {
      title: 'APPROVE',
      steps: [
        'Navigate to the Admin Machine',
        'In the bottom right corner, open the task bar, and open the Procyon agent.',
        'Click on the icon that looks like a Web Browser Window (Chrome should bring up the Procyon UI)',
        'On the left side navigation, select "Access Requests"',
        'Click on the "View Details" on the right side of the Developer Demo User Request',
        'Click on "Approve", comment is optional, "Approve again"',
      ],
      substeps: [],
    },
    {
      title: 'Access',
      steps: [
        'Navigate to the Developer machine',
        'Refresh the browser window',
        'On the left side navigation, after selecting "Targets", you should now see a "1" next to Granted, the "Prod" tile should show a Green Granted.',
        'In the bottom right corner, open the task bar, and open the Procyon agent.',
        'Click on the icon that looks like a Stack of Papers (A window appears with hidden access code)',
        'Click on the "Copy" icon under Command',
        'Open up the GitBash application',
        'Paste in the Command.',
        'Remove the carets "<" and ">" from the username, something like this "ssh ec2-user@i-xxxxxxxxx.servers.procyon.ai"',
        'Press ENTER',
        'Voila - you are connected to the server',

      ],
      substeps: [
        'NO IAM Account',
        'NO usernames',
        'NO passwords',
        'NO access keys',
        'NO secret keys',
        'TIME Bound automatically expires in 1 hour',
      ],
    },
    {
      title: '',
      steps: [
        'Navigate to the Admin Machine',
        'In the Procyon UI, select Access Requests from the left side navigation menu',
        'Select the previously granted access',
        'In the upper right corner, click on “Delete”',
      ],
      substeps: [],
    },
    {
      title: 'FEEDBACK',
      steps: [
        'Tell us how we did?',
        'You can talk directly to our dev team in our Discord channel',
        `Join Here https://hackr.link/Discord `,
        'Ask an admin to add you to the PROCYON Channel',
      ],
      substeps: [],
    },
  ];

  // Additional steps can be added here...


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
          <img src='https://app.hackerverse.quest/assets/kikrr/img/Icon-material-timer.svg' className='h-[20px] w-[20px]' />
          <span className='font-semibold text-md'>57:50</span>
        </div>
      </div>
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="content h-full mt-4">
        {activeTab === 'introduction' && (
          <div className="h-[calc(100vh-200px)] overflow-auto custom-scrollbar p-4">
            <h1 className="text-white text-2xl mb-8 font-bold">Introduction Story</h1>
            <p className="text-white text-[13px]">
              Ever have that uneasy feeling about your developers and the wide open access that has been slammed into your dev and production accounts over the years. It's time to clean it up, and we have the perfect tool to lock it down.
            </p>
            <p className="text-white mt-4 text-[13px]">
              Procyon.ai – Simplified Privilege Access Management for multi-cloud developer fine-grained access controls.
            </p>
            <p className="text-white mt-4 text-[13px]">
              In three easy steps you will give your developer access to cloud resources, without using any dedicated IAM accounts, without using any access keys or secret keys, and of course no usernames and passwords. The best part is, it’s time-bound, and automatically expires. And, you will have a simple report to hand to compliance auditors when they ask for it.
            </p>
            <div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 ml-4 mt-12">
            <video controls className="w-full border-2 border-blue-400 rounded-lg" src={Video} type="video/mp4" >
                  Your browser does not support the video tag.
                </video>
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
                <ul className="text-white list-disc list-inside ml-6">
                  {taskContents[taskStep - 1].substeps.map((step, idx) => (
                    <li key={idx} className="mb-2 text-[12px] pl-4" style={{ textIndent: '-1.5em', paddingLeft: '1em' }}>{step}</li>
                  ))}
                </ul>
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
