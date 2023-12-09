import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      {/* NAVBAR */}
      {/* <nav class='bg-white border-gray-200 dark:bg-gray-900'>
        <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a
            href='https://flowbite.com/'
            class='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              class='h-8'
              alt='Flowbite Logo'
            />
            <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'></span>
          </a>
          <div class='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <button
              data-collapse-toggle='navbar-cta'
              type='button'
              class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-cta'
              aria-expanded='false'
            >
              <span class='sr-only'>Open main menu</span>
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-cta'
          >
            <ul class='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <a
                  href='#'
                  class='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href='#'
                  class='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Navbar />
      {/* CONTENT */}
      <div class='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
        <div class='absolute inset-0 -z-10 overflow-hidden'>
          <svg
            class='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                width='200'
                height='200'
                x='50%'
                y='-1'
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y='-1' class='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                stroke-width='0'
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              stroke-width='0'
              fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
            />
          </svg>
        </div>
        <div class='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
          <div class='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div class='lg:pr-4'>
              <div class='lg:max-w-lg'>
                <p class='text-base font-semibold leading-7 text-indigo-600'>
                  Deploy faster
                </p>
                <h1 class='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  A better workflow
                </h1>
                <p class='mt-6 text-xl leading-8 text-gray-700'>
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas.
                </p>
              </div>
            </div>
          </div>
          <div class='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
            <img
              class='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
              src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
              alt=''
            />
          </div>
          <div class='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div class='lg:pr-4'>
              <div class='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <ul role='list' class='mt-8 space-y-8 text-gray-600'>
                  <li class='flex gap-x-3'>
                    <svg
                      class='mt-1 h-5 w-5 flex-none text-indigo-600'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    <span>
                      <strong class='font-semibold text-gray-900'>
                        Push to deploy.
                      </strong>{' '}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li class='flex gap-x-3'>
                    <svg
                      class='mt-1 h-5 w-5 flex-none text-indigo-600'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    <span>
                      <strong class='font-semibold text-gray-900'>
                        SSL certificates.
                      </strong>{' '}
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li class='flex gap-x-3'>
                    <svg
                      class='mt-1 h-5 w-5 flex-none text-indigo-600'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z' />
                      <path
                        fill-rule='evenodd'
                        d='M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    <span>
                      <strong class='font-semibold text-gray-900'>
                        Database backups.
                      </strong>{' '}
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul>
                <p class='mt-8'>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
                <h2 class='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                  No server? No problem.
                </h2>
                <p class='mt-6'>
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                  consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                  euismod vitae interdum mauris enim, consequat vulputate nibh.
                  Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                  Tincidunt enim cursus ridiculus mi. Pellentesque nam sed
                  nullam sed diam turpis ipsum eu a sed convallis diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default About
