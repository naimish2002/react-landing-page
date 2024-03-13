import React from 'react';
import { Button } from './ui/button';
import { MoveRight } from 'lucide-react';

const achievements = [
  {
    logo: '/assets/people.svg',
    numbers: '2,245,341',
    title: 'Members',
  },
  {
    logo: '/assets/club.svg',
    numbers: '46,328',
    title: 'Clubs',
  },
  {
    logo: '/assets/event.svg',
    numbers: '828,867',
    title: 'Event Bookings',
  },
  {
    logo: '/assets/payment.svg',
    numbers: '1,926,436',
    title: 'Payments',
  },
];

const customerLogos = [
  {
    logo: '/assets/logo1-blue.svg',
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
];

const communityUpdates = [
  {
    image: '/assets/image18.svg',
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
  },
  {
    image: '/assets/image19.svg',
    title:
      'What are your safeguarding responsibilities and how can you manage them?',
  },
  {
    image: '/assets/image20.svg',
    title: 'Revamping the Membership Model with Triathlon Australia',
  },
];

const Body = () => {
  return (
    <div className='flex flex-col gap-y-10 mb-10'>
      {/* Unlock */}
      <div className='w-[95%] lg:w-4/5 m-auto flex flex-col items-center justify-center md:flex-row md:justify-between p-1 md:p-5'>
        <img src='/assets/body-illustration.svg' alt='' className='h-96' />
        <div className='md:w-[53%] m-auto flex flex-col gap-y-5'>
          <p className='font-bold text-2xl md:text-4xl'>
            The unseen of spending three years at Pixelgrade
          </p>
          <p className='text-lightFont text-sm text-justify md:text-start'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button className='rounded-sm w-36 mt-3'>Learn More</Button>
        </div>
      </div>

      {/* Achievements */}
      <div className='bg-[#F5F7FA]'>
        <div className='w-[95%] lg:w-4/5 m-auto flex flex-col justify-center md:flex-row md:items-center md:justify-between py-8 md:py-16 gap-y-10'>
          <div className='flex-1 flex flex-col items-center gap-y-1'>
            <p className='font-semibold text-4xl'>Helping a local</p>
            <p className='text-primary font-semibold text-4xl'>
              business reinvent itself
            </p>
            <p className='font-medium mt-2'>
              we reached here with out hard work and dedication
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-y-5 flex-1'>
            {achievements.map((achievement, index) => (
              <div key={index} className='flex items-center gap-x-4'>
                <img src={achievement.logo} alt='' className='h-9' />
                <div className='flex flex-col'>
                  <p className='font-bold text-2xl'>{achievement.numbers}</p>
                  <p className='text-lightFont text-sm'>{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calender */}
      <div className='w-[95%] lg:w-4/5 m-auto flex flex-col items-center justify-center md:flex-row md:justify-between gap-y-5 p-1 md:p-5'>
        <img src='/assets/pana.svg' alt='' className='h-96' />
        <div className='md:w-[54%] m-auto flex flex-col gap-y-5'>
          <p className='font-bold text-2xl md:text-4xl'>
            How to design your site footer like we did
          </p>
          <p className='text-lightFont text-sm text-justify md:text-start'>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button className='rounded-sm w-36 mt-3'>Learn More</Button>
        </div>
      </div>

      {/* Customers */}
      <div className='bg-[#F5F7FA] py-5'>
        <div className='w-[95%] lg:w-4/5 m-auto flex flex-col justify-center md:flex-row md:justify-evenly'>
          <img
            src='/assets/image9.svg'
            alt=''
            className='h-96 md:h-auto md:w-1/4'
          />
          <div className=' md:w-3/5 flex flex-col gap-y-5'>
            <div className='flex flex-col text-justify gap-y-3'>
              <p className='text-lightFont text-sm'>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <p className='text-primary font-semibold text-center md:text-start'>
                Tim Smith
              </p>
              <p className='text-lightFont text-sm text-center md:text-start'>
                British Dragon Boat Racing Association
              </p>
            </div>
            <div className='flex flex-col md:flex-row gap-x-3 gap-y-3 md:gap-y-0'>
              <div className='w-full flex justify-between items-center'>
                {customerLogos.map((customer, index) => (
                  <img key={index} src={customer.logo} alt='customer-logo' />
                ))}
              </div>

              <Button
                variant='ghost'
                size='sm'
                className='text-primary hover:text-primary/80 font-semibold'>
                <span>Meet all customers</span>
                <MoveRight className='w-3.5 h-3.5 ml-2' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Updates */}
      <div className='w-[95%] lg:w-4/5 m-auto flex flex-col gap-y-5'>
        <div className='flex flex-col items-center gap-y-3'>
          <p className='font-bold text-2xl lg:text-3xl'>
            Caring is the new marketing
          </p>
          <p className='md:w-1/2 m-auto text-sm text-lightFont text-center'>
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className='grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-y-16'>
          {communityUpdates.map((update, index) => (
            <div key={index} className='relative flex flex-col items-center'>
              <img
                src={update.image}
                alt='community-update'
                className='rounded-md object-contain w-[90%]'
              />
              <div className='absolute bottom-[-10%] md:bottom-[-20%] right-1/2 translate-x-1/2 w-[80%] md:w-[75%] bg-[#F5F7FA] px-2 py-3 md:px-12 md:py-2 rounded-md shadow-lg flex flex-col items-center gap-y-3'>
                <p className='text-lightFont font-semibold text-center text-sm'>
                  {update.title}
                </p>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-primary hover:text-primary/80 font-semibold'>
                  <span>Readmore</span>
                  <MoveRight className='w-3.5 h-3.5 ml-2' />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
