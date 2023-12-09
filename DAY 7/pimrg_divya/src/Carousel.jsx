import React from 'react'
import Footer from './Footer'

const Carousel = () => {
  return (
    <>
      <div className='w-full flex items-center justify-round my-4'>
        <div className='left w-1/2 ml-4'>
          {/* CAROUSEL */}
          <div
            id='default-carousel'
            class='relative w-full'
            data-carousel='slide'
          >
            <div class='relative h-56 overflow-hidden rounded-lg md:h-96'>
              <div class='hidden duration-700 ease-in-out' data-carousel-item>
                <img
                  src='https://images.unsplash.com/photo-1702098122484-4738c3b4c4c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
                  class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  alt='...'
                />
              </div>

              <div class='hidden duration-700 ease-in-out' data-carousel-item>
                <img
                  src='https://images.unsplash.com/photo-1702098122484-4738c3b4c4c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
                  class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  alt='...'
                />
              </div>
            </div>

            <div class='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
              <button
                type='button'
                class='w-3 h-3 rounded-full'
                aria-current='true'
                aria-label='Slide 1'
                data-carousel-slide-to='0'
              ></button>
              <button
                type='button'
                class='w-3 h-3 rounded-full'
                aria-current='false'
                aria-label='Slide 2'
                data-carousel-slide-to='1'
              ></button>
              <button
                type='button'
                class='w-3 h-3 rounded-full'
                aria-current='false'
                aria-label='Slide 3'
                data-carousel-slide-to='2'
              ></button>
              <button
                type='button'
                class='w-3 h-3 rounded-full'
                aria-current='false'
                aria-label='Slide 4'
                data-carousel-slide-to='3'
              ></button>
              <button
                type='button'
                class='w-3 h-3 rounded-full'
                aria-current='false'
                aria-label='Slide 5'
                data-carousel-slide-to='4'
              ></button>
            </div>

            <button
              type='button'
              class='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-prev
            >
              <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <svg
                  class='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M5 1 1 5l4 4'
                  />
                </svg>
                <span class='sr-only'>Previous</span>
              </span>
            </button>
            <button
              type='button'
              class='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              data-carousel-next
            >
              <span class='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <svg
                  class='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 6 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 9 4-4-4-4'
                  />
                </svg>
                <span class='sr-only'>Next</span>
              </span>
            </button>
          </div>
        </div>
        {/* LOGIn */}
        <div className='right w-1/2'>
          <form class='max-w-sm mx-auto'>
            <div class='mb-5'>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div class='mb-5'>
              <label
                for='password'
                class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your password
              </label>
              <input
                type='password'
                id='password'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div class='flex items-start mb-5'>
              <div class='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  value=''
                  class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                  required
                />
              </div>
              <label
                for='remember'
                class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Remember me
              </label>
            </div>
            <button
              type='submit'
              class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* CARDS */}
      <div className='flex items-center gap-4 mx-12 my-8 justify-center'>
        <a
          href='#'
          class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        >
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
          <p class='font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href='#'
          class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        >
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
          <p class='font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>

        <a
          href='#'
          class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        >
          <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
          <p class='font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>

      {/* MARQUE */}

      <marquee behavior='scroll' direction='left' scrollamount='5'>
        <img
          src='https://images.unsplash.com/photo-1682687982183-c2937a74257c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'
          width='120'
          height='80'
          alt='Natural'
        />
      </marquee>
      {/* <marquee behavior='scroll' direction='left' scrollamount='15'>
        <img
          src='https://images.unsplash.com/photo-1682687982183-c2937a74257c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'
          width='120'
          height='80'
          alt='Natural'
        />
      </marquee> */}

      {/* FOOTER */}

      {/* <footer class='bg-white dark:bg-gray-900'>
        <div class='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
          <div class='md:flex md:justify-between'>
            <div class='mb-6 md:mb-0'>
              <a href='https://flowbite.com/' class='flex items-center'>
                <img
                  src='https://flowbite.com/docs/images/logo.svg'
                  class='h-8 me-3'
                  alt='FlowBite Logo'
                />
                <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                  Flowbite
                </span>
              </a>
            </div>
            <div class='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
              <div>
                <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  Resources
                </h2>
                <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                  <li class='mb-4'>
                    <a href='https://flowbite.com/' class='hover:underline'>
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a href='https://tailwindcss.com/' class='hover:underline'>
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  Follow us
                </h2>
                <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                  <li class='mb-4'>
                    <a
                      href='https://github.com/themesberg/flowbite'
                      class='hover:underline '
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://discord.gg/4eeurUVvTy'
                      class='hover:underline'
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                  Legal
                </h2>
                <ul class='text-gray-500 dark:text-gray-400 font-medium'>
                  <li class='mb-4'>
                    <a href='#' class='hover:underline'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='#' class='hover:underline'>
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <div class='sm:flex sm:items-center sm:justify-between'>
            <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
              © 2023{' '}
              <a href='https://flowbite.com/' class='hover:underline'>
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div class='flex mt-4 sm:justify-center sm:mt-0'>
              <a
                href='#'
                class='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              >
                <svg
                  class='w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 8 19'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='sr-only'>Facebook page</span>
              </a>
              <a
                href='#'
                class='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
              >
                <svg
                  class='w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 21 16'
                >
                  <path d='M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z' />
                </svg>
                <span class='sr-only'>Discord community</span>
              </a>
              <a
                href='#'
                class='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
              >
                <svg
                  class='w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 17'
                >
                  <path
                    fill-rule='evenodd'
                    d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='sr-only'>Twitter page</span>
              </a>
              <a
                href='#'
                class='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
              >
                <svg
                  class='w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='sr-only'>GitHub account</span>
              </a>
              <a
                href='#'
                class='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
              >
                <svg
                  class='w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='sr-only'>Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer />
    </>
  )
}

export default Carousel
