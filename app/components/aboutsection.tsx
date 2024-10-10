"use client"
import React, { useState } from 'react';
import list from './list'; // Assuming list contains the sections
import Block from './blockitem'; // The Block component

const AboutSection: React.FC = () => {
  const [blocks, setBlocks] = useState(list);

  const handleBlockClick = (index: number) => {
    const updatedBlocks = blocks.map((block, i) => 
      i === index ? { ...block, isOpen: !block.isOpen } : { ...block, isOpen: false } // Toggle the clicked block
    );
    setBlocks(updatedBlocks);
  };

  return (
    <div className='max-w-screen-md mx-auto my-5'>
      <div className="border my-5 border-gray-400" />
      {blocks.map((item, index) => (
        <div key={item.name}>
          <Block
            name={item.name}
            isOpen={item.isOpen}
            icon={item.icon}
            onClick={() => handleBlockClick(index)} 
          />
          {item.isOpen && <div className="p-2 my-6 mx-auto">{item.component}</div>} 
        </div>
      ))}
    </div>
  );
};

export default AboutSection;
