import React from 'react'
import Image from 'next/image';

function Button (props) {

    return (
        <React.Fragment>

            <button className='flex flex-row justify-center mx-1 px-2 py-2 button w-full font-primary'>
                <Image src={props.path} width={22} height={22} className='mx-1'></Image>
                <h5 className='text-[#858585] '>{props.text}</h5>
            </button>
        </React.Fragment>
)}


export default Button;