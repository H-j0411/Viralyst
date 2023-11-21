import React from 'react';
interface Props {
    name : string
}

export const BtnRegister : React.FC < Props > = ({name}) => {
    return (
        <div
            className="w-[135px] h-[42px] px-8 py-3 cursor-pointer left-[85px] top-0  bg-white rounded-[40px] justify-center items-center gap-2.5 inline-flex">
            <div
                className="text-center text-black text-lg font-normal font-['Inter'] leading-[18px] hover:text-xl">{name}</div>
        </div>
    )
}