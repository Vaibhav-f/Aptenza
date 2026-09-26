import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1784790601988-7915393bc5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1788872749625-9d9e91f0bd71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1782720829237-ec146b0afe0a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1788395706643-53e22910d208?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1784790601988-7915393bc5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1788872749625-9d9e91f0bd71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1782720829237-ec146b0afe0a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1788395706643-53e22910d208?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2VzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2VzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzfGVufDB8fDB8fHww"
];
const SummaryPage = () => {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);

  const text =
    "Renting in aptenza should feel effortless. We verify every home, answer every call at any hour, and treat your property like it's our own — that's the whole idea.";

  useGSAP(() => {
    gsap.fromTo(
      wordsRef.current,
      {
        opacity: 0.25,
      },
      {
        opacity: 1,
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1.5,
          
        },
      }
    );
  }, { scope: sectionRef });




const imageContainer = useRef(null);

useGSAP(() => {
  const images = gsap.utils.toArray(".summary-image");

  gsap.set(images, {
    opacity: 0,
  });

  gsap.set(images[0], {
    opacity: 1,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      start: 'top 10%',
        end: 'top -100%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 0.4, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
       
    },
  });

  images.forEach((img, index) => {
    if (index === 0) return;

    tl.to(images[index - 1], {
      opacity: 0,
      duration: 0.8,
    });

    tl.to(
      img,
      {
        opacity: 1,
        duration: 0.8,
      },
      "<"
    );
  });
}, []);


  return (
    <section
      ref={sectionRef}
      className="bg-stone-100 min-h-[55vh] lg:min-h-[60vh] xl:min-h-[66vh] transition-all duration-2000 flex items-center "
    >
      <div className="px-5 xl:px-20 max-w-[30rem] md:max-w-[39rem] lg:max-w-[41rem] xl:max-w-[54rem] ">
        <h1 className="font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.1rem] xl:text-[2.4rem] leading-snug text-stone-800 transition-all duration-2000">
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => (wordsRef.current[index] = el)}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

     


  <div
    ref={imageContainer}
    className="h-96 w-full lg:max-w-76 xl:max-w-96 transition-all duration-700 xl:mr-5 rounded-3xl hidden lg:block xl:block xl:ml-20 lg:ml-10 overflow-hidden relative"
  >
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        className="summary-image absolute inset-0 h-full w-full object-cover rounded-3xl"
        alt=""
      />
    ))}
  </div>


    </section>
  );
};

export default SummaryPage;