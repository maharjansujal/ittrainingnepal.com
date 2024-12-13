'use client';
import React, { useState } from 'react';
import Dropdown from './dropdownChild';

type ParentDropdownProps = {
  dropdowns: { name: string; content: React.ReactNode }[];
};

const ParentDropdown: React.FC<ParentDropdownProps> = ({ dropdowns }) => {
  const [expandedStates, setExpandedStates] = useState<Record<number, boolean>>({});

  const toggleAll = (expand: boolean) => {
    const newState = dropdowns.reduce(
      (acc, _, index) => ({ ...acc, [index]: expand }),
      {}
    );
    setExpandedStates(newState);
  }
  const toggleDropdown = (index: number) => {
    setExpandedStates((prev) => ({ ...prev, [index]: !prev[index] }));
  }
  const areAllExpanded = dropdowns.every((_, index) => expandedStates[index]);
  return (
    <div>
      <div className="mt-10 flex justify-between">
        <h1 className='text-[25px] text-[#004E98] font-bold'>Syllabus</h1>
        <button
          onClick={() => toggleAll(!areAllExpanded)}
          className="text-[#004E98]"
        >
          {areAllExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      {dropdowns.map((dropdown, index) => (
        <Dropdown
          key={index}
          name={dropdown.name}
          content={dropdown.content}
          isExpanded={expandedStates[index] || false}
          onToggle={() => toggleDropdown(index)}
        />
      ))}

    </div>
  )
};

export default ParentDropdown;