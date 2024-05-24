import React from 'react'
// import { useSelector } from 'react-redux';
// import { RootState } from '../state/store';

const Welcome: React.FC = () => {

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-start px-4 md:px-[100px] lg:px-[200px] dark:bg-[#1c1f21] dark:text-[#CED2D4]">
      <div className="flex flex-row mb-5 gap-x-2 font-semibold justify-center items-center bg-slate-600 px-4 py-2 rounded-full text-white">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Active for work
      </div>
      <h1 className="font-Krona-One text-xl md:text-4xl lg:text-5xl me-auto leading-[40px] lg:leading-[65px]">
        <span className="text-[#646B73]">I'm Jasper <img src="/jasper.jpg" alt="" className="rounded-full w-[50px] inline-block"/></span> ~ a{" "}
        <span className="text-[#646B73]">Full-stack web developer</span> from {""}
        <span className="text-[#646B73]">Philippines</span> focusing on building functional websites that <span className="text-[#646B73]">will increase</span> {""}
        conversion and help <span className="text-[#646B73]">reach customers</span>.
      </h1>
    </div>
  );
};

export default Welcome;
