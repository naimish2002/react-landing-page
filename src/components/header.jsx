import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, MoveRight, X } from 'lucide-react';

const NavLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Features',
    url: '/features',
  },
  {
    name: 'Community',
    url: '/community',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Pricing',
    url: '/pricing',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='h-16'>
      <div className='h-full w-[95%] lg:w-4/5 m-auto flex items-center justify-between'>
        <div className='text-2xl md:text-3xl font-medium text-black'>
          P<span className='text-primary'>cl</span>
        </div>
        <div className='flex items-center gap-x-8'>
          <div className='hidden lg:flex items-center gap-x-8'>
            {NavLinks.map((link, index) => (
              <div
                key={index}
                className='hover:text-primary font-medium text-sm cursor-pointer transition-colors'>
                {link.name}
              </div>
            ))}
          </div>
          <Button className='hidden lg:flex'>
            <span>Register Now</span>
            <MoveRight className='w-3.5 h-3.5 ml-2' />
          </Button>

          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsOpen(!isOpen)}
            className='flex lg:hidden transition'>
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className='flex basis-full flex-col items-center bg-white shadow-md gap-y-8 py-5'>
          {NavLinks.map((link, index) => (
            <div
              key={index}
              className='hover:text-primary font-medium cursor-pointer transition-colors'>
              {link.name}
            </div>
          ))}
          <Button className='flex'>
            <span>Register Now</span>
            <MoveRight className='w-3.5 h-3.5 ml-2' />
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
