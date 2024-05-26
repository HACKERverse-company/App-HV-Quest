import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import TopNavBar from './TopNavBar';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const MainLayout = () => {

  return (
    <div>
      {/* big devices */}
      <div className="hidden md:flex md:flex-col md:h-screen md:overflow-hidden">
        <TopNavBar />
        <div className="flex-1 overflow-hidden -mt-">
          <SplitPane
            split="vertical"
            minSize={280}
            defaultSize={400}
            maxSize={8000}
            resizerClassName="custom-resizer"
          >
            <LeftPane />
            <RightPane />
          </SplitPane>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden lg:hidden ">
        <TopNavBar />
        <div className="">
          <LeftPane />
          <RightPane />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
