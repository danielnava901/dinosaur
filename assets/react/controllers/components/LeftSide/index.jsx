import React from 'react';

const LeftSide = ({options, onClickOption}) => {

    return <div className="border-r-2 border-gray-400 p-8">
        <div className="flex flex-col">
            {
                options.map((option, index) => {
                    return <div
                        key={index}
                        onClick={() => {
                            onClickOption(option)
                        }}
                        className="p-2 cursor-pointer hover:bg-gray-200">
                        {option.name}
                    </div>
                })
            }

        </div>
    </div>
}

export default LeftSide;