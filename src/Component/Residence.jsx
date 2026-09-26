
import { useGSAP } from "@gsap/react";
import  { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Navigate, useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Residence = () => {

  const nevigate = useNavigate()

 const image1= useRef(null)
 const image2= useRef(null)


useGSAP(() => {
  gsap.from(image1.current, {
    clipPath: "inset(0 0 100% 0)",
    duration: 0.6,
    ease: "power4.in",
    scrollTrigger: {
      trigger: image1.current,
      start: "top 85%",
      toggleActions: "play none none none",
          },
  });

  gsap.from(image2.current, {
    clipPath: "inset(0 0 100% 0)",
    duration: 0.7,
    ease: "power4.in",
    scrollTrigger: {
      trigger: image2.current,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});

  return (
    <div className='min-h-[100vh] bg-white text-black dark:bg-[#141414] dark:text-white '>
      <div className='flex flex-col justify-center items-center '>


        <div className='flex justify-center items-center'>
          <h3 className='uppercase font-semibold text-2xl pt-5 tracking-wider '>residence</h3>
        </div>
        <div className='text-[17px] md:text-[20px] w-full md:max-w-[35rem] lg:max-w-[39rem] xl:max-w-[42rem] flex flex-col justify-center items-center pt-23 px-7 text-center  transition-all duration-2000'>
          <p className='' >
            A New Standard of Elevated Living in Noida.
          </p>
          <div className='flex flex-wrap justify-center items-end pt-3 gap-3'>
            <p >
              Strategically located in Sector 150, Noida, this premium residence offers a well-connected neighbourhood, life-enriching amenities, exceptional suite features and elegant finishes.
            </p>
            <p className=''>
              Designed for modern urban living, it provides a perfect blend of comfort, convenience, and contemporary lifestyle, with beautiful views of the surrounding city.
            </p>
          </div>
        </div>
      </div>

      <div className=' border-t-2  border-gray-400  mt-14'></div>

      <div className='px-15 xl:px-40 lg:px-30 md:px-28 pt-18'>
        <div className=' object-contain flex justify-center items-center'>
          <img ref={image1} className=' min-h-[10rem] xl:h-[40rem] sm:min-h-[20rem] md:min-h-[22rem] lg:min-h-[24rem] w-full max-w-[70rem]  ' src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww" alt="" />
        </div>
      </div>

      <div className=' flex flex-col justify-between lg:gap-15 md:gap-15   md:flex-row px-15 md:px-30  lg:px-30 xl:px-50'>
        <div className='flex flex-col   text-sm  w-full md:max-w-[15rem] lg:max-w-[20rem]  xl:max-w-[28rem]  '>
          <h2 className='text-xl font-semibold pt-15'>
            A New Dawn
          </h2>

          <p className='mt-8 xl:text-lg'>
           Aptenza introduces a new standard of elevated living in Sector 150, Noida. Designed for those who appreciate refined architecture and contemporary comfort, the residence brings together elegant design, thoughtfully crafted interiors, and a curated collection of modern amenities.
          </p>

          <p className='mt-6  xl:text-lg'>
            Set within one of Noida’s emerging premium neighbourhoods, Aptenza offers excellent connectivity while maintaining a sense of calm and privacy. Expansive windows, sophisticated finishes, and beautifully planned spaces create a seamless connection between the indoors and the surrounding landscape.
          </p>

          <p className='mt-4  xl:text-lg'>
            Every detail has been thoughtfully considered to create a residence that feels distinctive, timeless, and effortlessly luxurious — offering a lifestyle to be experienced from sunrise to sunset.
          </p>

        </div>

        <div className='object-cover flex pt-20 '>
          <img ref={image2} className='min-h-[20rem] xl:max-h-[40rem] sm:min-h-[22rem] md:max-h-[20px] lg:min-h-[30rem] w-full lg:max-w-[34rem]  xl:max-w-[35rem] md:max-w-[31rem] transition-transform duration-300 ' src="https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww" alt="" />
        </div>
      </div>

      <div className='flex  justify-center items-center mt-30'>
          <button
          onClick={() => nevigate("/homes")}
          className='border-2 rounded-full px-8 py-1 cursor-pointer font-semibold border-gray-400 active:scale-150 transition-all duration-500'>
            See All
          </button>
      </div>

      <div className='border-b-2 border-gray-400 mt-20'>

      </div>


    </div>
  )
}

export default Residence
