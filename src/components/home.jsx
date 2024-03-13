import React from 'react';
import { Button } from './ui/button';

const clientLogos = [
  {
    logo: '/assets/logo1.svg',
  },
  {
    logo: '/assets/logo2.svg',
  },
  {
    logo: '/assets/logo3.svg',
  },
  {
    logo: '/assets/logo4.svg',
  },
  {
    logo: '/assets/logo5.svg',
  },
  {
    logo: '/assets/logo6.svg',
  },
  {
    logo: '/assets/logo3.svg',
  },
];

const Home = () => {
  return (
    <div className='flex flex-col gap-y-14'>
      {/* Hero Section */}
      <div className='bg-[#F5F7FA] relative'>
        <div className='w-[95%] lg:w-4/5 m-auto flex flex-col-reverse items-center justify-center md:flex-row md:justify-between gap-x-5 py-10 md:py-16'>
          <div className=' w-full flex flex-col justify-center items-center md:items-start gap-y-4'>
            <p className='text-4xl sm:text-5xl lg:text-6xl font-semibold'>
              Lessons and insights
            </p>
            <p className='text-primary text-4xl sm:text-5xl lg:text-6xl font-semibold'>
              {' '}
              from 8 years
            </p>
            <p className='text-lightFont text-sm text-center sm:text-start'>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className='w-28 rounded-sm my-3'>Register</Button>
          </div>
          <img src='/assets/hero.svg' alt='' className='h-72 md:h-80 lg:h-96' />
          <div className='flex gap-x-2 absolute bottom-2 sm:bottom-4 right-1/2 translate-x-1/2'>
            <div className='bg-primary rounded-full h-2.5 w-2.5'></div>
            <div className='bg-primary/30 rounded-full h-2.5 w-2.5'></div>
            <div className='bg-primary/30 rounded-full h-2.5 w-2.5'></div>
          </div>
        </div>
      </div>

      {/* Client */}
      <div className='w-[95%] lg:w-4/5 m-auto flex flex-col items-center gap-y-3'>
        <p className='font-semibold text-2xl lg:text-3xl'>Our Clients</p>
        <p className='text-lightFont text-sm'>
          We have been working with some Fortune 500+ clients
        </p>
        <div className='w-full flex justify-between mt-8'>
          {clientLogos.map((client, index) => (
            <img key={index} src={client.logo} alt='client-logo' />
          ))}
        </div>
      </div>

      {/* Community */}
      <div className='w-[95%] lg:w-4/5 m-auto flex flex-col items-center gap-y-2'>
        <p className='lg:w-[40%] text-center font-semibold text-2xl lg:text-3xl'>
          Manage your entire community in a single system
        </p>
        <p className='text-sm text-lightFont'>Who is Nextcent suitable for?</p>
        <div className='w-full flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-between mt-5'>
          <div className='w-full lg:w-[25%] text-center flex flex-col items-center gap-y-2 bg-white rounded-lg shadow-md p-5'>
            <img src='/assets/membership.svg' alt='' className='h-12' />
            <p className='text-xl font-semibold'>Membership Organisations</p>
            <p className='text-sm text-lightFont w-full'>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className='w-full lg:w-[25%] text-center flex flex-col items-center gap-y-2 bg-white rounded-lg shadow-md p-5'>
            <img src='/assets/buildings.svg' alt='' className='h-12' />
            <p className='text-xl font-semibold'>National Associations</p>
            <p className='text-sm text-lightFont text-center'>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className='w-full lg:w-[25%] text-center flex flex-col items-center gap-y-2 bg-white rounded-lg shadow-md p-5'>
            <img src='/assets/clubs.svg' alt='' className='h-12' />
            <p className='text-xl font-semibold'>Clubs and Groups</p>
            <p className='text-sm text-lightFont'>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
