"use client";
import React from 'react';

type BlockProps = {
  name: string;
  isOpen: boolean;
  icon: React.ElementType;
  onClick: () => void;
};

const Block: React.FC<BlockProps> = ({ name, isOpen, icon: Icon, onClick }) => {
  return (
    <div 
      className="flex items-center justify-between w-full py-3 px-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
      onClick={onClick} 
    >
      <div className="flex items-center">
        <Icon className="w-6 h-6 mr-3 text-primary" />
        <span className="text-lg text-white">{name}</span>
      </div>
      <span className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </div>
  );
};

export default Block;
