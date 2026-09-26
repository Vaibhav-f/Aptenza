import React from 'react'
import Navbar from '../Pages/Navbar'
import { MapPinHouse, HandCoins, BedDouble, ReceiptIndianRupee, Dog, Sofa, Bath, CookingPot, Landmark, Car, House } from 'lucide-react'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const MoreDetail = () => {


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
            furnished: "Fully Furnished",
            availability: "Available Now",
            pets: "Pets Allowed",
            utilityBills: "Included",

            description:
                "A beautifully designed three-bedroom residence in Seoul, offering a refined balance of contemporary architecture and everyday comfort. The spacious interiors feature generous natural light, elegant finishes, a modern kitchen, and thoughtfully planned living areas. Located in a well-connected neighbourhood, this home is ideal for residents looking for a sophisticated urban lifestyle with comfort, privacy, and convenience."
        },

    ];

    const propertyFeatures = [
        {
            image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Furniture",
            description:
                "Move into a fully furnished home equipped with essential furniture, appliances, and everything you need for comfortable everyday living.",
        },


        {
            image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Bedroom",
            description:
                "Three spacious and comfortable bedrooms provide plenty of room for residents, guests, storage, and a peaceful personal living experience.",

        },
        {
            image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Bathroom",
            description:
                "Two clean and modern bathrooms provide added convenience and privacy, making everyday routines easier for everyone in the home.",

        },
        {
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Kitchen",
            description:
                "A modern and well-equipped kitchen provides essential appliances, practical storage, and enough workspace for preparing everyday meals.",

        },
        {
            image: "https://images.unsplash.com/photo-1763560705345-5aed55f99c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Vlc3QlMjBhcmVhfGVufDB8fDB8fHww",
            title: "Hall",
            description:
                "A spacious and welcoming hall creates the perfect area for relaxing, spending quality time with family, or entertaining friends and guests.",

        },
        {
            image: "https://plus.unsplash.com/premium_photo-1728262247643-bb75be51c15b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFya2luZyUyMGFwcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
            title: "Parking",
            description:
                "A secure and spacious private parking provides convenient parking while helping keep your vehicle protected and safely stored.",

        },
    ];

    return (
        <div className='bg-white text-black dark:bg-[#141414] dark:text-white' >

            <Navbar />
            <div className='flex justify-center items-center mt-10 text-xl uppercase font-normal '>
                <h1>More Details </h1>
            </div>

            <div className='flex flex-wrap px-6 md:px-12 xl:px-35 lg:px-25 gap-8'>
                {properties.map((elem, idx) => (
                    <div key={idx} className='flex flex-col gap-10'>
                        <div className='  gap-3 flex flex-col  mt-5  py-3'>
                            <div className=''>
                                <img className='sm:max-h-[22rem] md:max-h-[28rem] lg:max-h-[31rem] xl:max-h-[34rem] w-full transition-all duration-1000 object-cover' src={elem.homeImage} alt="" />
                            </div>
                            <div className='flex text-2xl leading-none gap-2 font-semibold mt-2 '>
                                <p>
                                    <MapPinHouse
                                    />
                                </p>
                                <h1>
                                    {elem.location}
                                </h1>
                            </div>
                            <div className='font-medium flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-4 transition-all duration-700'>

                                <div className='flex  leading-none gap-2  '>
                                    <p>
                                        <Sofa size={19} />
                                    </p>
                                    <h1>
                                        {elem.furnished}
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2 '>
                                    <p>
                                        <Dog size={19} />
                                    </p>
                                    <h1>
                                        {elem.pets}
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2 font- '>
                                    <p>
                                        <House size={19} />
                                    </p>
                                    <h1>
                                        {elem.availability}
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2 '>
                                    <p>
                                        <ReceiptIndianRupee size={19} />
                                    </p>
                                    <h1>
                                        UtilityBills-{elem.utilityBills}
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2 '>
                                    <p>
                                        <HandCoins size={19} />
                                    </p>
                                    <h1>
                                        Rent-{elem.rent}/Month
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2  '>
                                    <p>
                                        <BedDouble size={19} />
                                    </p>
                                    <h1>
                                        {elem.bed}-Bed
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2 '>
                                    <p>
                                        <Bath size={19} />
                                    </p>
                                    <h1>
                                        {elem.bath}-Bathroom
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2  '>
                                    <p>
                                        <CookingPot size={19} />
                                    </p>
                                    <h1>
                                        {elem.kitch}-Kitchen
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2 '>
                                    <p>
                                        <Landmark size={19} />
                                    </p>
                                    <h1>
                                        {elem.hall}-Hall
                                    </h1>
                                </div>
                                <div className='flex  leading-none gap-2 '>
                                    <p>
                                        <Car size={19} />
                                    </p>
                                    <h1>
                                        {elem.garage}-Parking
                                    </h1>
                                </div>


                            </div>




                        </div>



                    </div>
                ))}

                <div className='flex justify-center items-center w-full   text-xl lg:text-2xl '>
                    <Link to={"/Apply"} className='border-[1px] bg-[#D7CDC3] cursor-pointer active:scale-110 transition-all duration-300 border-none rounded-full py-2 px-7 dark:text-black font-bold'>
                    Apply to rent
                    
                    </Link>
                </div>




            </div>
            <div className='min-h-screen mt-10 px-6 md:px-12 lg:px-25'>
                {propertyFeatures.map((elem, idx) => (
                    <div key={idx} className='flex flex-wrap lg:flex-col justify-center items-center '>
                        <div className='flex justify-center uppercase items-center font-medium text-xl tracking-wide'>
                            <h1>{elem.title} </h1>
                        </div>
                        <div className=' flex flex-col  md:flex-row justify-center mt-8 gap-8 lg:gap-15 md:mb-20'>
                            <div className='object-cover '>
                                <img className='w-full lg:max-h-[60vh] xl:max-h-[70vh]  transition-all duration-1000 ' src={elem.image} alt="Image not found" />
                            </div>
                            <div className=' mb-20 w-full md:max-w-60 lg:max-w-80 xl:max-w-96  lg:text-2xl md:text-[21px] xl:text-[28px] tracking-normal font-light '>
                                <p>{elem.description}</p>

                            </div>


                        </div>

                    </div>
                ))}


            </div>
            <Footer />

        </div>
    )
}

export default MoreDetail
