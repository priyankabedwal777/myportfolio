import React from 'react';

const Tabbutton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab} className={`focus:outline-none mr-3 font-semibold hover:text-white ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default Tabbutton;
