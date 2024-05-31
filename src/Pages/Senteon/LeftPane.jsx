import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faArrowLeft, faArrowRight,faClock } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Tabs from './Tabs';
import SENTEON_Diagram from '../../assets/SENTEON_Diagram.jpeg'

const LeftPane = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [taskStep, setTaskStep] = useState(1);

  const images = [
    SENTEON_Diagram
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
      title: '1. Starting the Demo',
      steps: [
        'Access the Kali Machine',
        '- Open the Kali machine through the Guacamole interface.',
        'Navigate to the Attacks Folder',
        '- Use the command `cd attacks` to move to the attacks directory.',
        'Run the Attack Script',
        '- Execute the script by running `./attacks.sh`.',
      ],
    },
    {
      title: '2. Select and Perform Attacks',
      steps: [
        'Select Option 1: Perform Password Spray Attack',
        '- Choose the first option from the menu.',
        '- Observe the "logon failure" messages on incorrect password attempts.',
        '- Stop the attack by pressing `Ctrl + C` multiple times.',
        'Select Option 2: Perform User Enumeration',
        '- Review the output for user, group, and other Active Directory information.',
        'Select Option 3: Check Local Admin Account Status on Domain Joined Machine',
        '- Re-run the script and choose the third option.',
        '- Verify the dumping of hashes, indicating that the local admin account is enabled.',
        'Select Option 4: Check Password Policy',
        '- Re-run the script and choose the fourth option.',
        '- Note the minimum password length (initially 7) and other password policy details.',
        'Exit the Script',
        'Select option 5 or press `Ctrl + C` to exit the script.',
      ],
    },
    {
      title: '3. Review Hardening Changes in Centeon',
      steps: [
        'Log in to Centeon',
        '- Go to [app.senteon.co](https://app.senteon.co) and log in with the provided credentials.',
        'Access the Tenant Section',
        '- Navigate to the tenant section on the left menu.',
        '- Select the "Hackerverse Demo" tenant.',
        'Enable Endpoint on Windows 10 Domain Member',
        '- Go to the endpoint section.',
        '- Select "Windows 10 Domain Member" from the dropdown.',
        '- Click the dropdown menu on the right side of the machine and select "Enable".',
        'Enable Endpoint on Windows Server 2022 Domain Member',
        '- Repeat the previous step for "Windows Server 2022 Domain Member".',
      ],
    },
    {
      title: '4. Re-run Attacks to Verify Hardening',
      steps: [
        'Re-run Option 1: Perform Password Spray Attack',
        '- Run the script and choose option 1 again.',
        '- Notice that accounts are now locked out after wrong attempts, instead of showing "logon failure".',
        'Re-run Option 2: Perform User Enumeration',
        '- Run the script and choose option 2.',
        '- Observe the limited and non-critical information being dumped.',
        'Re-run Option 3: Check Local Admin Account Status on Domain Joined Machine',
        '- Run the script and choose option 3.',
        '- Confirm that the local admin account is disabled, preventing hash dumps.',
        'Re-run Option 4: Check Password Policy',
        '- Run the script and choose option 4.',
        '- Note the increased minimum password length (14 characters) and other policy changes.',
      ],
    },
    {
      title: '5. Disable Endpoints',
      steps: [
        'Disable Endpoint on Windows 10 Domain Member',
        '- Go to the endpoint section.',
        '- Select "Windows 10 Domain Member" from the dropdown.',
        '- Click the dropdown menu on the right side of the machine and select "Disable".',
        'Disable Endpoint on Windows Server 2022 Domain Member',
        '- Repeat the previous step for "Windows Server 2022 Domain Member".',
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
              Ever have that unsettling feeling that all of the money you spent on EDR tools isn’t really protecting your organization against a Cyberattack. Listen to your instincts, because it’s true.
            </p>
            <p className="text-white mt-4 text-[13px]">
              Just because Microsoft rolls out patches every month, doesn’t mean you’re covered. In fact, a large part of your infrastructure falls into what we call the “Configuration Vulnerability Gap”. Machines that for whatever reason, are configured to not accept patch updates or are left mis-configured because of some “quick and special” project that was abandoned.            </p>
            <p className="text-white mt-4 text-[13px]">
              Senteon is a Configuration Management Tool that fixes this problem, in one click, across your entire organization. Senteon can be used by a single organization or as a multi-tenant MSSP tool. And from our point of view, this is the first step you should take before you consider the rest of the Cybersecurity tools out there. Hardening your systems against the “Configuration Vulnerability Gap” is the first step. Step inside with us.
            </p>
            <div>
              <div className="flex flex-wrap justify-center sm:justify-center  gap-4 ml-4 mt-12">
              <iframe src="https://drive.google.com/file/d/15c8NNjmOSDRJ7A-Pq_3YzxWuf0d0rIvU/preview" className="w-full   rounded-lg" allow="autoplay"></iframe>
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
                  className="h-full w-36 cursor-pointer"
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
