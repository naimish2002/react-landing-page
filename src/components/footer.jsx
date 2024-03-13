import React from 'react';
import { Button } from './ui/button';
import { MoveRight, Send } from 'lucide-react';
import { Input } from './ui/input';

const socialIcons = [
  {
    icon: '/assets/instagram.svg',
  },
  {
    icon: '/assets/dribble.svg',
  },
  {
    icon: '/assets/twitter.svg',
  },
  {
    icon: '/assets/youtube.svg',
  },
];

const companyList = [
  {
    name: 'About us',
  },
  {
    name: 'Blog',
  },
  {
    name: 'Contact us',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'Testimonials',
  },
];

const supportList = [
  {
    name: 'Help center',
  },
  {
    name: 'Terms of service',
  },
  {
    name: 'Legal',
  },
  {
    name: 'Privacy Policy',
  },
  {
    name: 'Status',
  },
];

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <div className='flex-1 bg-[#F5F7FA] flex flex-col items-center justify-center gap-y-8 py-8'>
        <p className='w-full md:w-3/5 text-3xl md:text-5xl font-bold text-[#263238] text-center md:leading-tight'>
          Lorem ipsum dolor sit amet consectetuer
        </p>
        <Button className='rounded-sm w-36'>
          <span>Get a demo</span>
          <MoveRight className='w-3.5 h-3.5 ml-2' />
        </Button>
      </div>
      <div className='flex-1 bg-footerBg'>
        <div className='w-[95%] lg:w-4/5 m-auto flex flex-col md:flex-row justify-between py-10 gap-x-5 gap-y-8'>
          <div className='md:w-1/4 lg:w-2/5 flex flex-col gap-y-7 px-5'>
            <div className='text-[#F5F7FA] font-extralight text-xs flex flex-col gap-y-2'>
              <p>Copyright © 2020 Landify UI Kit.</p>
              <p>All rights reserved</p>
            </div>
            <div className='flex gap-x-3'>
              {socialIcons.map((icon, index) => (
                <div key={index} className='bg-white/10 rounded-full p-2 flex items-center justify-center'>
                  <img src={icon.icon} alt='social-icon' />
                </div>
              ))}
            </div>
          </div>

          <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col md:flex-row gap-y-7 md:gap-y-5 justify-between'>
            <div className=' flex-grow flex justify-between'>
              <div className='flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-7'>
                <p className='text-white font-semibold text-lg md:text-base'>
                  Company
                </p>
                <div className='flex flex-col gap-y-2 text-[#F5F7FA]'>
                  {companyList.map((list, index) => (
                    <p
                      key={index}
                      className='text-sm lg:text-xs font-light hover:text-white cursor-pointer'>
                      {list.name}
                    </p>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-7'>
                <p className='text-white font-semibold text-lg md:text-base'>
                  Support
                </p>
                <div className='flex flex-col gap-y-2 text-[#F5F7FA]'>
                  {supportList.map((list, index) => (
                    <p
                      key={index}
                      className='text-sm lg:text-xs font-light hover:text-white cursor-pointer'>
                      {list.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-7 px-5 md:px-0'>
              <p className='text-white font-semibold'>Stay up to date</p>
              <div className='bg-white/20 rounded-lg px-2 flex items-center justify-between'>
                <Input
                  type='text'
                  placeholder='Your email address'
                  className='placeholder:text-[#D9DBE1] w-full bg-transparent outline-none text-white border-none focus-visible:ring-transparent focus-visible:ring-offset-0'
                />
                <Send className='w-5 h-5 text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
