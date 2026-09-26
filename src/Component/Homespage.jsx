import Navbar from "../Pages/Navbar"
import { MapPinHouse, HandCoins } from 'lucide-react'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Homespage = () => {

  const nevigate = useNavigate()

  const properties = [
    {
      id: 1,
      homeImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      location: "Seoul, South Korea",
      rent: 1850,
      bed: 3,
      bath: 2,
      kitch: 1,
      hall: 1,
      garage: 1,
      furnished: "Full Furnished",
      availability: "Available Now",
      pets: "Pets Allowed",
      utilityBills: "Included",

      description:
        "A beautifully designed three-bedroom residence in Seoul, offering a refined balance of contemporary architecture and everyday comfort. The spacious interiors feature generous natural light, elegant finishes, a modern kitchen, and thoughtfully planned living areas. Located in a well-connected neighbourhood, this home is ideal for residents looking for a sophisticated urban lifestyle with comfort, privacy, and convenience."
    },

    {
      id: 2,
      homeImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      location: "Busan, South Korea",
      rent: 1450,
      bed: 2,
      bath: 2,
      kitch: 1,
      hall: 1,
      garage: 1,
      furnished: "Furnished",
      availability: "Available from Oct 1",
      pets: "Pets Not Allowed",
      utilityBills: "Not Included",

      description:
        "A stylish two-bedroom apartment in Busan designed for comfortable modern living. The residence combines warm interiors with clean architectural lines, creating a calm and inviting atmosphere. With two well-appointed bathrooms, a functional kitchen, spacious living area, and private parking, the property offers an ideal combination of practicality and contemporary design."
    },

    {
      id: 3,
      homeImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      location: "Incheon, South Korea",
      rent: 1200,
      bed: 2,
      bath: 1,
      kitch: 1,
      hall: 1,
      garage: 0,
      furnished: "No Furnished",
      availability: "Available Now",
      pets: "Pets Not Allowed",
      utilityBills: "Not Included",

      description:
        "A bright and thoughtfully planned two-bedroom residence in Incheon, perfect for residents who value simplicity and flexibility. The unfurnished layout allows you to create a space that reflects your own style, while the spacious living room, practical kitchen, and large windows provide a comfortable foundation for everyday life."
    },

    {
      id: 4,
      homeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      location: "Gangnam, Seoul",
      rent: 2800,
      bed: 4,
      bath: 3,
      kitch: 1,
      hall: 1,
      garage: 2,
      furnished: "Full Furnished",
      availability: "Available from Nov 15",
      pets: "Pets Allowed",
      utilityBills: "Included",

      description:
        "An exceptional four-bedroom residence in Gangnam offering an elevated standard of city living. Designed with spacious interiors, sophisticated furnishings, and premium finishes, the home provides generous room for families or professionals. Three bathrooms, a modern kitchen, expansive living areas, and two parking spaces complete this distinguished urban residence."
    },

    {
      id: 5,
      homeImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      location: "Daegu, South Korea",
      rent: 980,
      bed: 1,
      bath: 1,
      kitch: 1,
      hall: 1,
      garage: 0,
      furnished: "Furnished",
      availability: "Available Now",
      pets: "Pets Not Allowed",
      utilityBills: "Not Included",

      description:
        "A comfortable furnished one-bedroom apartment in Daegu, thoughtfully designed for efficient modern living. The residence offers a welcoming living area, practical kitchen, well-maintained bathroom, and tasteful furnishings. Its compact yet functional layout makes it an excellent choice for individuals seeking a comfortable home in the city."
    },

    {
      id: 6,
      homeImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      location: "Daejeon, South Korea",
      rent: 1350,
      bed: 2,
      bath: 2,
      kitch: 1,
      hall: 1,
      garage: 1,
      furnished: "No Furnished",
      availability: "Available from Oct 10",
      pets: "Pets Allowed",
      utilityBills: "Included",

      description:
        "A spacious two-bedroom residence in Daejeon offering a clean and adaptable living environment. The unfurnished interiors provide complete freedom to personalise the home, while two bathrooms, a practical kitchen, generous living space, and private parking ensure everyday convenience. Included utilities add further value to this well-balanced residence."
    },

    {
      id: 7,
      homeImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      location: "Suwon, South Korea",
      rent: 1650,
      bed: 3,
      bath: 2,
      kitch: 1,
      hall: 1,
      garage: 1,
      furnished: "Full Furnished",
      availability: "Available Now",
      pets: "Pets Allowed",
      utilityBills: "Not Included",

      description:
        "A refined three-bedroom home in Suwon created for comfortable family living. The fully furnished interiors combine modern elegance with practical functionality, featuring a spacious living area, contemporary kitchen, two bathrooms, and private parking. With a welcoming atmosphere and pet-friendly policy, this residence is designed to feel like home from the moment you arrive."
    },

    {
      id: 8,
      homeImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      location: "Jeju, South Korea",
      rent: 2100,
      bed: 3,
      bath: 2,
      kitch: 1,
      hall: 1,
      garage: 2,
      furnished: "Furnished",
      availability: "Available from Dec 1",
      pets: "Pets Allowed",
      utilityBills: "Included",

      description:
        "A beautifully furnished three-bedroom residence in Jeju that brings together contemporary comfort and a relaxed island lifestyle. Spacious interiors, refined furnishings, a modern kitchen, two bathrooms, and generous parking create an effortless living experience. With utilities included and pets welcome, this home offers an ideal retreat for those seeking comfort, privacy, and a premium residential atmosphere."
    },
  ];


  const image = useRef(null)
  useGSAP(() => {
    const images = gsap.utils.toArray(".home-image");

    images.forEach((img) => {
      gsap.fromTo(
        img,
        {
          clipPath: "inset(0 0 100% 0)",

        },
        {
          clipPath: "inset(0 0 0% 0)",

          duration: 0.1,
          ease: "power3.Inout",

          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none none",

          },
        }
      );
    });
  });


  return (
    <div className='min-h-screen  bg-white text-black dark:bg-[#141414] dark:text-white'>
      <Navbar />

      <div className='flex justify-center items-center text-[18px]  font-medium uppercase mt-8 tracking-wide '>
        <h1>Homes</h1>
      </div>
      <div className=" flex flex-wrap gap-25  mt-10  lg:px-10 xl:px-20">

        {properties.map((elem, idx) => (
          <div key={idx} className="flex flex-wrap lg:flex-row gap-55 object-cover px-5">
            <div className="flex flex-wrap lg:flex-row gap-5  ">

              <img 
                onClick={()=>{
                  nevigate("/MoreDetail")
                }}
              ref={image} className=" home-image max-h-[25rem] sm:min-h-[28rem] md:min-h-[30rem] lg:min-h-[24rem] w-full lg:w-7/12 xl:max-w-10/12  transition-all duration-1000 cursor-pointer active:scale-115" src={elem.homeImage} alt="" />

              <div className="min-h-[20rem]  flex flex-wrap lg:flex-nowrap flex-col gap-1 w-full lg:w-1/2 xl:max-w-1/3 text-black text-[#FFFFFF] px-5 pt-3 border-b-[1px] border-b-black dark:border-b-white bg-white text-black dark:bg-[#141414] dark:text-white">
                <div className="flex w-full  flex-wrap gap-2 items-center text-2xl leading-none ">
                  <p>
                    <MapPinHouse />
                  </p>
                  <h1 className="font-semibold">
                    {elem.location}
                  </h1>
                  <p className="text-[16px] tracking-wide leading-snug mt-3  ">
                    {elem.description}
                  </p>


                  <div className="w-full flex justify-center items-center">
                   <Link to="/MoreDetail"
                   className="h-10 rounded-full   cursor-pointer hover:underline active:scale-110 transition-all duration-300 mt-10 text-lg"
                   >
                    More details

                   </Link>
                  </div>
                </div>
              </div>

            </div>







          </div>




        ))}



      </div>


      <div className="mt-10">
        <Footer />
      </div>




    </div>
  )
}

export default Homespage
