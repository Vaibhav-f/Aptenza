import React, { useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useNavigate } from "react-router-dom";

const LandingPageContent = () => {
    const nevigate = useNavigate()
    const arrowRef = useRef(null);
    const countRef = useRef(null);
    const countRef1 = useRef(null);

    useGSAP(() => {
        gsap.to(arrowRef.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 0.8,
            ease: "power1.inOut",
        });
    });


    useGSAP(() => {
        const counter = { value: 0 };

        gsap.to(counter, {
            value: 24,
            duration: 1,

            onUpdate: () => {
                countRef.current.innerText = Math.floor(counter.value);
            },
        });
    });

    useGSAP(() => {
        const counter = { value: 0 };

        gsap.to(counter, {
            value: 230,
            duration: 1,

            onUpdate: () => {
                countRef1.current.innerText = Math.floor(counter.value);
            },
        });
    });





    return (
        <section className="relative z-10  flex min-h-[90vh]  w-full flex-col justify-between px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">

            {/* HERO CONTENT */}
            <div className="flex flex-1 flex-col  justify-center pt-30 sm:pt-20 md:pt-24 lg:pt-15 xl:pt-30">

                {/* Heading */}
                <div className="max-w-[1100px]">
                    <h1
                        className=" font-extrabold tracking-[-0.045em]  text-[#F8FAFC] text-[clamp(3rem,10vw,7rem)] leading-[0.92] " >
                        Renting, finally
                        <br />
                        <span className="text-[#F0C445]">
                            done right.
                        </span>
                    </h1>
                </div>

                {/* Description */}
                <div className=" mt-7 max-w-[600px] lg:max-w-[530px] xl:max-w-[700px] sm:mt-8 lg:mt-10">
                    <p
                        className="  text-base font-medium leading-relaxed text-white/95 sm:text-lg lg:text-xl xl:text-2xl  ">
                        Tenants find verified homes they'll actually love.
                        Owners hand off the calls, the repairs, and the
                        paperwork — month to month, no lock-in.
                    </p>
                </div>

                {/* CTA */}
                <div className="  mt-7 flex flex-wrap gap-3 sm:mt-9 sm:flex-row lg:absolut lg:right-10 lg:top-[55vh] xl:top-[60vh] lg:-translate-y-1/2 lg:flex-row-reverse">

                    <button
                    onClick={()=>{
                        nevigate("/homes")
                    }}
                        className="  h-14  w-full  max-w-[15rem]  rounded-full bg-[#F0C445] px-8 text-base font-bold text-black transition-transform  duration-300 hover:scale-[1.03]  cursor-pointer sm:w-auto lg:h-14 lg:px-9 "   >
                        Find your home
                    </button>

                   <div>
                    
                   </div>

                    <Link  to={"/Homelisting"} className="  h-14 w-full max-w-[15rem] rounded-full  border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black cursor-pointer sm:w-auto lg:h-14 lg:px-9  ">

                    I own a rental
                    
                    </Link>

                </div>
            </div>

            {/* BOTTOM */}
            <div className="w-full">

                {/* Divider */}
                <div className="mb-5 h-px w-full bg-white/60 sm:mb-8" />

                <div className="flex flex-col gap-6  sm:gap-7 lg:flex-row lg:items-end lg:justify-between">

                    {/* STATS */}
                    <div className="grid grid-cols-1 gap-4  sm:grid-cols-3 sm:gap-6 lg:gap-10">

                        <div className="flex items-center gap-2">
                            <span ref={countRef} className="text-2xl font-bold text-white sm:text-3xl">
                                0
                            </span>

                            <span className="text-sm text-white/90 sm:text-base">
                                homes listed now
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white sm:text-3xl">
                                24/7
                            </span>

                            <span className="text-sm text-white/90 sm:text-base">
                                tenant support
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span ref={countRef1} className="text-2xl font-bold text-white sm:text-3xl">
                                0
                            </span>

                            <span className="text-sm text-white/90 sm:text-base">

                                happy clients, tenants & guests
                            </span>
                        </div>

                    </div>

                    {/* SCROLL */}
                    <div className="flex items-center justify-end gap-2 text-white/80">

                        <span className="text-sm tracking-[0.15em]">
                            SCROLL
                        </span>

                        <div ref={arrowRef}>
                            <ArrowDown
                                size={18}
                                strokeWidth={1.5}
                            />
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default LandingPageContent;