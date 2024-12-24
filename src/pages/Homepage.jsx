import { useState } from "react";


const Homepage = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Default to the first tab

  const tabs = [
    { id: 'tab1', label: "What's new", content: 'Content for What\'s new' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-12">
      {/* Sidebar */}
      <div className="sidebar md:col-span-3  p-4 rounded-lg">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={` h-[48px] ps-[14px] flex items-center rounded-lg cursor-pointer ${
                activeTab === tab.id ? 'bg-white text-black font-bold' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className=" bg-gray-50 md:col-span-6 rounded-lg">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'block' : 'hidden'}
          >
            <h2 className="text-2xl font-semibold">{tab.label}</h2>
            <p className="mt-4">{tab.content}</p>
          </div>
        ))}
      </div>
      <div className="md:col-span-3 h-[90px] bg-gray-50 p-4 rounded-lg">
       
      </div>
    </div>
    </div>
  );
};

export default Homepage