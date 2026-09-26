import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
    return (
        <div className='min-h-[70vh] bg-[#211C15]'>
            <div className='flex flex-wrap gap-8 justify-between px-6 xl:px-35 lg:px-12 pt-20'>

                <div className='text-[#F4EFE6]'>
                    <h1 className='text-2xl font-bold md:text-3xl xl:text-4xl transition-all duration-1000'>
                        Be first to new listings.
                    </h1>
                    <p className='mt-5 text-[#8A7664] text-[13px] md:text-[15px] lg:max-w-[25rem] xl:max-w-[40rem] '>
                        New homes, before they hit Facebook and Instagram. No spam — unsubscribe anytime.
                    </p>

                </div>

                <div className='flex flex-wrap  gap-2 items-center '>
                    <input className='min-h-11 md:min-h-13 w-full max-w-50 min-w-40 md:min-w-75 px-5 border-[0.1px] border-[#5a5149] rounded-full placeholder:text-[#8A7664] transition-all duration-1000' type="text" placeholder='you@email.com' />

                    <button className='rounded-full min-h-11  md:min-h-13 shrink-0 max-w-30 md:min-w-33 cursor-pointer active:scale-125 px-5 bg-[#F0C445] font-bold transition-all duration-500'>
                        Notify me
                    </button>
                </div>
            </div>

            <div className='border-t-[1px]  border-[#aba197] mt-13 opacity-20'></div>

            <div className='px-6 pt-10 flex flex-wrap gap-7 lg:px-12 lg:gap-15 xl:px-35 xl:gap-22 transition-all duration-500'>
                <div className='flex flex-col flex-wrap max-w-[20rem]'>
                    <h1 className='text-[#F4EFE6] text-2xl font-bold'>
                        Aptenza Properties
                    </h1>
                    <p className='text-[#8A7664] text-[14px] mt-3'>
                        Redefining rental living standards across India.
                        Built for modern Indian homes 🇮🇳
                    </p>
                </div>

                <div className='flex flex-wrap flex-col gap-2'>
                    <h4 className='text-[#8A7664] text-[15px] uppercase'>
                        Contact
                    </h4>
                    <p className='text-[#F4EFE6] text-sm font-semibold mt-3'>
                        (+91)-7266069193
                    </p>
                    <p className='text-[#F4EFE6] text-sm font-semibold'>
                        vaibhavkushwaha136@gmail.com
                    </p>
                </div>

                 <div className='flex flex-wrap flex-col gap-1'>
                    <h4 className='text-[#8A7664] text-[15px] uppercase'>
                        Hours
                    </h4>
                    <p className='text-[#8A7664] text-sm font-semibold mt-3'>
                        Monday — Friday · 9 am — 5 pm
                    </p>
                    <p className='text-[#8A7664] text-sm font-semibold'>
                       Weekends · Closed
                    </p>
                    <p className='text-[#F4EFE6] text-lg font-semibold'>
                       Tenant support · 24/7
                    </p>
                </div>

                <div className='flex flex-wrap flex-col gap-2'>
                    <h4 className='text-[#8A7664] text-[15px] uppercase'>
                       Explore
                    </h4>
                    <p 
                     onClick={() => navigate("/homes")}
                    className='text-[#F4EFE6] text-sm font-semibold mt-3 cursor-pointer'>
                       All available homes
                    </p>
                    <p  onClick={() => navigate("/signin")}
                     className='text-[#8A7664] text-sm font-semibold cursor-pointer'>
                     Portal sign-in
                    </p>
                     <p className='text-[#F4EFE6] text-sm font-semibold cursor-pointer'>
                     Raise a Complaint
                    </p>
                </div>
                </div>

                <div className='flex justify-center items-start '>
                     <h1 className='uppercase text-[#2C261D] font-extrabold xl:text-[15rem] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] transition-all duration-2000'>
                    Aptenza
                </h1>
                </div>
        </div>
    )
}

export default Footer
