import React, { useEffect, useRef } from 'react';
import './Welovecoffee.css';
import { BsFillCupHotFill } from "react-icons/bs";
import { gsap } from 'gsap'; // Make sure gsap is imported

const Welovecoffee = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (btn) {
      const animate = () => {
        gsap.fromTo(
          btn,
          { x: 0, rotate: 0 },
          { x: 2, rotate: 2, yoyo: true, repeat: 5, duration: 0.1 }
        );
      };
      btn.addEventListener("mouseenter", animate);

      return () => {
        btn.removeEventListener("mouseenter", animate);
      };
    }
  }, []);

  return (
    <div className="main-coffee bg-amber-300 h-[900px]">
      <div className='coffee'>
        <div>
          <div className='loveimg'>
            <img
              src='/images/love.jpg'
              className='h-[630px] w-[500px] rounded-[30px]'
              ref={buttonRef} 
            />
          </div>
        </div>
        <div className='right-love'>
          <div className="logo mb-[100px]">
            <p>Cozy</p>
            <BsFillCupHotFill />
            <p>Cups</p>
          </div>
          <h3 className='font-semibold text-[35px]'>We Love Coffee!!!</h3>
          <div className='flex flex-col gap-[20px]'>
            <p className='w-[550px]'>
              The Cozy Cups is a cozy and welcoming spot in the heart of the city, offering a delightful selection of specialty coffees, fresh pastries, and wholesome meals.
            </p>
            <p>
              Join us for a moment of relaxation and indulgence
            </p>
          </div>
          <div className="location flex flex-col gap-[22px]">
            <h3>Location:</h3>
            <div className='flex flex-col gap-[8px]'>
              <p>Cozy Cups</p>
              <p>123 Coffee Lane</p>
              <p>Noida, Sector 15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welovecoffee;
