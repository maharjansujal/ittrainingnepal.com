import React from 'react';

type DropdownProps = {
    name: string,
    content: React.ReactNode,
    isExpanded: boolean,
    onToggle: () => void;
};

const DropdownChild: React.FC<DropdownProps> = ({ name, content, isExpanded, onToggle }) => {
    return (
        <div>
            <div className='border-t-2  items-center  py-3'>
                <div className='w-full'>
                  <button className="w-full flex justify-between pb-4 text-left font-semibold" onClick={onToggle}>
                    <span className="text-[18px] font-bold">{name}</span>
                    <span>{isExpanded ? '˄' : '˅'}</span>
                </button>  
                </div>
            </div>
            {/* {isExpanded && (
                    <div className="flex flex-col px-4 py-2">
                        <div>{content}</div>
                    </div>
                )} */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col px-4 py-2">{content}</div>
            </div>
        </div>
    )
};

export default DropdownChild;