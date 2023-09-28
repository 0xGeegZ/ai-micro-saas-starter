import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='overflow-hidden'>
          <div className='px-8 py-2 bg-white justify-between flex'>
            <div className='w-auto flex items-center'>
              <div className='flex flex-wrap'>
                <div className='w-auto mr-14'>
                  <a href='#'>
                    <img
                      src='images/SocialMed-317-66-px-3.png'
                      alt=''
                      className='max-w'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='w-auto'>
              <div className='flex flex-wrap items-center'>
                <div className='w-auto hidden lg:block items-center'></div>
                <div className='w-auto hidden lg:block'>
                  <button className='group relative p-0.5 font-heading block w-full md:w-auto text-lg text-gray-900 hover:text-white transition duration-300 ease-in-out font-medium bg-gradient-orange overflow-hidden rounded-10'>
                    <div className='absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-orange transition ease-in-out duration-500' />
                    <div className='py-2 px-5 bg-white rounded-lg'>
                      <p className='relative z-10'>Essayez gratuitement</p>
                    </div>
                  </button>
                </div>
                <div className='w-auto lg:hidden'>
                  <a href='#'></a>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
            <nav className='relative z-10 px-9 py-8 bg-white h-full'>
              <div className='flex flex-wrap justify-between h-full'>
                <div className='w-full'>
                  <div className='flex items-center justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <a className='inline-block' href='#'>
                        <img
                          src='images/SocialMed-317-66-px-3.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-auto p-2'>
                      <a className='navbar-burger' href='#'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6 18L18 6M6 6L18 18'
                            stroke='#111827'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center py-8 w-full'>
                  <ul>
                    <li className='mb-12'>
                      <a
                        className='font-heading font-medium text-lg text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Notre solution
                      </a>
                    </li>
                    <li className='mb-12'>
                      <a
                        className='font-heading font-medium text-lg text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Solutions
                      </a>
                    </li>
                    <li className='mb-12'>
                      <a
                        className='font-heading font-medium text-lg text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        className='font-heading font-medium text-lg text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col justify-end w-full'>
                  <div className='flex flex-wrap'>
                    <div className='w-full mb-3'>
                      <button className='p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10'>
                        <div className='py-2 px-5 rounded-10'>
                          <p>Login</p>
                        </div>
                      </button>
                    </div>
                    <div className='w-full'>
                      <button className='group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10'>
                        <div className='absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500' />
                        <div className='py-2 px-5 bg-white rounded-lg'>
                          <p className='relative z-10'>Start Free Trial</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section
          className='overflow-hidden'
          style={{
            background: 'url(gradia-assets/images/hero/bg.png) no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <div className='mx-auto'>
              <div className='relative pt-9 overflow-hidden sm:pb-28 pb-8 bg-black bg-opacity-80'>
                <div className='container px-4 mx-auto'>
                  <div className='sm:my-16 max-w-4xl mx-auto text-center'>
                    <h1 className='mb-4 sm:mb-8 font-heading text-3xl md:text-11xl xl:text-13xl text-white'>
                      L'outil IA ultime pour{' '}
                      <span className='text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-500'>
                        la création de contenu
                      </span>
                    </h1>
                    <p className='mb-8 sm:mb-14 md:text-2xl sm:font-heading text-gray-200 max-w-3xl mx-auto'>
                      Gagnez du temps en créant des stratégies et contenu
                      personnalisés facilement et boostez l'engagement de vos
                      réseaux avec SocialDude
                    </p>
                    <div className='mb-8 sm:mb-14 md:text-2xl sm:font-heading max-w-3xl mx-auto text-gray-100 inline-block'>
                      <button className='group relative p-0.5 font-heading block w-full md:w-auto text-lg text-gray-900 hover:text-white transition duration-300 ease-in-out font-medium bg-gradient-orange overflow-hidden rounded-10'>
                        <div className='absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-orange transition ease-in-out duration-500' />
                        <div className='py-2 px-5 bg-white rounded-lg'>
                          <p className='relative z-10'>Essayez gratuitement</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className='relative mx-auto overflow-hidden'>
                    <div className='flex flex-wrap justify-center -m-1.5 mb-10'>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <svg
                              className='mr-1.5'
                              width={22}
                              height={22}
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M10.9995 0.439941C5.16725 0.439941 0.439453 5.16774 0.439453 10.9999C0.439453 16.8321 5.16725 21.5599 10.9995 21.5599C16.8317 21.5599 21.5595 16.8321 21.5595 10.9999C21.5595 5.16774 16.8317 0.439941 10.9995 0.439941ZM13.5009 7.73734H11.9136C11.7255 7.73734 11.5165 7.98484 11.5165 8.31374V9.45994H13.502L13.2017 11.0945H11.5165V16.0016H9.64315V11.0945H7.94365V9.45994H9.64315V8.49854C9.64315 7.11914 10.6002 5.99824 11.9136 5.99824H13.5009V7.73734Z'
                                fill='#2977EE'
                              />
                            </svg>
                          </div>
                          <span className='font-bold tracking-tight'>
                            Facebook
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <svg
                              className='mr-1.5'
                              width={22}
                              height={22}
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M10.9995 0.439941C5.16725 0.439941 0.439453 5.16774 0.439453 10.9999C0.439453 16.8321 5.16725 21.5599 10.9995 21.5599C16.8317 21.5599 21.5595 16.8321 21.5595 10.9999C21.5595 5.16774 16.8317 0.439941 10.9995 0.439941ZM8.41445 15.3768H6.27605V8.49524H8.41445V15.3768ZM7.33205 7.65044C6.65665 7.65044 6.21995 7.17194 6.21995 6.58014C6.21995 5.97624 6.66985 5.51204 7.35955 5.51204C8.04925 5.51204 8.47165 5.97624 8.48485 6.58014C8.48485 7.17194 8.04925 7.65044 7.33205 7.65044ZM16.2245 15.3768H14.0861V11.5631C14.0861 10.6754 13.7759 10.0726 13.0026 10.0726C12.4119 10.0726 12.061 10.4807 11.9059 10.8734C11.8487 11.0131 11.8344 11.2111 11.8344 11.408V15.3757H9.69485V10.6897C9.69485 9.83064 9.66735 9.11234 9.63875 8.49414H11.4967L11.5946 9.45004H11.6375C11.9191 9.00124 12.6088 8.33904 13.7627 8.33904C15.1696 8.33904 16.2245 9.28174 16.2245 11.3079V15.3768Z'
                                fill='#70A8CF'
                              />
                            </svg>
                          </div>
                          <span className='font-bold tracking-tight'>
                            LinkedIn
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <svg
                              className='mr-1.5'
                              width={22}
                              height={22}
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18.319 14.6094C18.319 14.3993 18.214 14.2704 18.0039 14.2227C17.3641 14.0794 16.8008 13.7977 16.3138 13.3776C15.8268 12.9575 15.4449 12.4418 15.168 11.8307C15.1011 11.6493 15.0677 11.5299 15.0677 11.4727C15.0677 11.3294 15.1608 11.2053 15.347 11.1003C15.5332 10.9952 15.7385 10.9141 15.9629 10.8568C16.1873 10.7995 16.3926 10.7016 16.5788 10.5632C16.765 10.4247 16.8581 10.2504 16.8581 10.0404C16.8581 9.85894 16.7697 9.70855 16.5931 9.58919C16.4165 9.46984 16.2326 9.41016 16.0417 9.41016C15.9271 9.41016 15.7743 9.44835 15.5833 9.52474C15.3924 9.60113 15.2444 9.63932 15.1393 9.63932C15.1011 9.63932 15.0438 9.62977 14.9674 9.61068C15.0152 8.70356 15.0391 8.15929 15.0391 7.97786C15.0391 7.22352 14.9579 6.67925 14.7956 6.34505C14.4518 5.60026 13.9601 5.02018 13.3203 4.60482C12.6806 4.18945 11.9549 3.98177 11.1432 3.98177C9.24306 3.98177 7.93012 4.76953 7.20443 6.34505C7.0421 6.67925 6.96094 7.22352 6.96094 7.97786C6.96094 8.15929 6.98481 8.70356 7.03255 9.61068C6.99436 9.62977 6.92752 9.63932 6.83203 9.63932C6.71745 9.63932 6.56467 9.60352 6.3737 9.5319C6.18273 9.46029 6.0395 9.42448 5.94401 9.42448C5.74349 9.42448 5.55968 9.48177 5.39258 9.59635C5.22548 9.71094 5.14193 9.86372 5.14193 10.0547C5.14193 10.2552 5.23503 10.4247 5.42122 10.5632C5.60742 10.7016 5.81272 10.7995 6.03711 10.8568C6.2615 10.9141 6.4668 10.9952 6.65299 11.1003C6.83919 11.2053 6.93229 11.3294 6.93229 11.4727C6.93229 11.5299 6.89887 11.6493 6.83203 11.8307C6.22092 13.1484 5.27561 13.9457 3.99609 14.2227C3.78602 14.2704 3.68099 14.3993 3.68099 14.6094C3.68099 15.0486 4.33507 15.3733 5.64323 15.5833C5.66233 15.6311 5.69097 15.7552 5.72917 15.9557C5.76736 16.1563 5.82227 16.3019 5.89388 16.3926C5.96549 16.4833 6.07769 16.5286 6.23047 16.5286C6.34505 16.5286 6.52409 16.5072 6.76758 16.4642C7.01107 16.4212 7.19965 16.3997 7.33333 16.3997C7.66753 16.3997 7.98741 16.4714 8.29297 16.6146C8.59852 16.7578 8.85634 16.913 9.06641 17.0801C9.27648 17.2472 9.551 17.4023 9.88997 17.5456C10.2289 17.6888 10.5942 17.7604 10.9857 17.7604C11.3963 17.7604 11.7734 17.6888 12.1172 17.5456C12.4609 17.4023 12.7355 17.2472 12.9408 17.0801C13.1461 16.913 13.4015 16.7578 13.707 16.6146C14.0126 16.4714 14.3325 16.3997 14.6667 16.3997C14.8003 16.3997 14.9889 16.4188 15.2324 16.457C15.4759 16.4952 15.6597 16.5143 15.7839 16.5143C15.9366 16.5143 16.0464 16.4666 16.1133 16.3711C16.1801 16.2756 16.2326 16.1324 16.2708 15.9414C16.309 15.7504 16.3377 15.6311 16.3568 15.5833C17.6649 15.3733 18.319 15.0486 18.319 14.6094ZM22 11C22 12.9957 21.5082 14.8362 20.5247 16.5215C19.5412 18.2068 18.2068 19.5412 16.5215 20.5247C14.8362 21.5082 12.9957 22 11 22C9.00434 22 7.16385 21.5082 5.47852 20.5247C3.79319 19.5412 2.45877 18.2068 1.47526 16.5215C0.491754 14.8362 0 12.9957 0 11C0 9.00434 0.491754 7.16385 1.47526 5.47852C2.45877 3.79319 3.79319 2.45877 5.47852 1.47526C7.16385 0.491754 9.00434 0 11 0C12.9957 0 14.8362 0.491754 16.5215 1.47526C18.2068 2.45877 19.5412 3.79319 20.5247 5.47852C21.5082 7.16385 22 9.00434 22 11Z'
                                fill='#FDE15E'
                              />
                            </svg>
                          </div>
                          <span className='font-bold tracking-tight'>
                            Snapchat
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <svg
                              className='mr-1.5'
                              width={22}
                              height={22}
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M10.9995 0.439941C5.16725 0.439941 0.439453 5.16774 0.439453 10.9999C0.439453 16.8321 5.16725 21.5599 10.9995 21.5599C16.8317 21.5599 21.5595 16.8321 21.5595 10.9999C21.5595 5.16774 16.8317 0.439941 10.9995 0.439941ZM11.7222 13.5024C11.0446 13.4507 10.7608 13.1152 10.2306 12.794C9.93905 14.3241 9.58265 15.7915 8.52665 16.5582C8.19995 14.2438 9.00405 12.508 9.37805 10.6633C8.74115 9.59084 9.45395 7.43374 10.7982 7.96394C12.4515 8.61954 9.36595 11.9514 11.4373 12.3683C13.5999 12.8017 14.4832 8.61514 13.1423 7.25554C11.2041 5.28984 7.50255 7.21044 7.95795 10.0242C8.06795 10.7117 8.77965 10.9207 8.24175 11.87C7.00205 11.595 6.63135 10.6171 6.67975 9.31364C6.75565 7.17964 8.59705 5.68474 10.4429 5.47904C12.7782 5.21944 14.9694 6.33594 15.273 8.53374C15.6129 11.0131 14.2181 13.696 11.7222 13.5024Z'
                                fill='#D86D74'
                              />
                            </svg>
                          </div>
                          <span className='font-bold tracking-tight'>
                            Pinterest
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <svg
                              className='mr-1.5'
                              width={22}
                              height={22}
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M12.7628 10.8162L10.2922 9.66344C10.0766 9.56334 9.89945 9.67554 9.89945 9.91424V12.0856C9.89945 12.3243 10.0766 12.4365 10.2922 12.3364L12.7617 11.1836C12.9784 11.0824 12.9784 10.9174 12.7628 10.8162ZM10.9995 0.439941C5.16725 0.439941 0.439453 5.16774 0.439453 10.9999C0.439453 16.8321 5.16725 21.5599 10.9995 21.5599C16.8317 21.5599 21.5595 16.8321 21.5595 10.9999C21.5595 5.16774 16.8317 0.439941 10.9995 0.439941ZM10.9995 15.2899C5.59405 15.2899 5.49945 14.8026 5.49945 10.9999C5.49945 7.19724 5.59405 6.70994 10.9995 6.70994C16.4049 6.70994 16.4995 7.19724 16.4995 10.9999C16.4995 14.8026 16.4049 15.2899 10.9995 15.2899Z'
                                fill='#F60D19'
                              />
                            </svg>
                          </div>
                          <span className='font-bold tracking-tight'>
                            YouTube
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <img
                              className='mr-1.5'
                              src='basko-assets/images/integrations/instagram.svg'
                              alt=''
                            />
                          </div>
                          <span className='font-bold tracking-tight'>
                            Instagram
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <svg
                              className='mr-1.5'
                              width={22}
                              height={22}
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <circle cx={11} cy={11} r={11} fill='#8D47FB' />
                              <path
                                d='M10.7604 6.9535H11.7138V9.80683H10.7604M13.3804 6.9535H14.3338V9.80683H13.3804M7.66711 4.3335L5.28711 6.7135V15.2868H8.14044V17.6668L10.5271 15.2868H12.4271L16.7138 11.0002V4.3335M15.7604 10.5268L13.8604 12.4268H11.9538L10.2871 14.0935V12.4268H8.14044V5.28683H15.7604V10.5268Z'
                                fill='white'
                              />
                            </svg>
                          </div>
                          <span className='font-bold tracking-tight'>
                            Twitch
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <img
                              className='mr-1.5'
                              src='basko-assets/images/integrations/google.svg'
                              alt=''
                            />
                          </div>
                          <span className='font-bold tracking-tight'>
                            Google
                          </span>
                        </a>
                      </div>
                      <div className='w-auto p-1.5'>
                        <a
                          className='flex items-center px-6 py-2.5 bg-white hover:bg-gray-100 border border-gray-300 rounded-full transition duration-200'
                          href='#'
                        >
                          <div className='inline-block'>
                            <svg
                              className='mr-1.5'
                              width={22}
                              height={22}
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M10.9995 0.439941C5.16725 0.439941 0.439453 5.16774 0.439453 10.9999C0.439453 16.8321 5.16725 21.5599 10.9995 21.5599C16.8317 21.5599 21.5595 16.8321 21.5595 10.9999C21.5595 5.16774 16.8317 0.439941 10.9995 0.439941ZM15.295 9.09034C15.2994 9.18054 15.3005 9.27074 15.3005 9.35874C15.3005 12.1087 13.2094 15.2778 9.38355 15.2778C8.25308 15.2797 7.14612 14.955 6.19575 14.3428C6.35745 14.3626 6.52355 14.3703 6.69185 14.3703C7.66645 14.3703 8.56295 14.0392 9.27465 13.4804C8.84094 13.4719 8.42069 13.3283 8.07247 13.0696C7.72426 12.8109 7.46543 12.45 7.33205 12.0372C7.64352 12.0965 7.96439 12.0841 8.27035 12.0009C7.79961 11.9057 7.37627 11.6507 7.07213 11.279C6.76799 10.9073 6.60177 10.4418 6.60165 9.96154V9.93624C6.88215 10.0913 7.20335 10.1859 7.54435 10.1969C7.10303 9.90316 6.79062 9.45188 6.671 8.93539C6.55139 8.41889 6.63361 7.87622 6.90085 7.41834C7.4233 8.06074 8.07484 8.58626 8.81328 8.96088C9.55172 9.3355 10.3606 9.55087 11.1876 9.59304C11.0824 9.14678 11.1277 8.67829 11.3163 8.2604C11.5049 7.8425 11.8262 7.49863 12.2304 7.28223C12.6346 7.06583 13.099 6.98904 13.5513 7.06378C14.0037 7.13852 14.4187 7.36062 14.7318 7.69554C15.1972 7.60344 15.6436 7.4327 16.0518 7.19064C15.8966 7.67259 15.5718 8.08183 15.1377 8.34234C15.55 8.29268 15.9526 8.18183 16.3323 8.01344C16.0534 8.43132 15.7021 8.79602 15.295 9.09034Z'
                                fill='#60ACEC'
                              />
                            </svg>
                          </div>
                          <span className='font-bold tracking-tight'>
                            Twitter
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='relative z-10 overflow-hidden rounded-xl'>
                    <div className='bg-gradient-orange px-3 py-2.5'>
                      <div className='flex flex-wrap items-center -m-2'>
                        <div className='w-auto p-2'>
                          <div className='flex flex-row'>
                            <div className='w-auto p-1'>
                              <div className='w-2 h-2 bg-red-400 border border-red-500 rounded-full' />
                            </div>
                            <div className='w-auto p-1'>
                              <div className='w-2 h-2 bg-yellow-400 border border-yellow-500 rounded-full' />
                            </div>
                            <div className='w-auto p-1'>
                              <div className='w-2 h-2 bg-green-400 border border-green-500 rounded-full' />
                            </div>
                          </div>
                        </div>
                        <div className='flex-1 p-2'>
                          <div className='max-w-xs mx-auto py-0.5 px-4 text-sm text-white text-opacity-50 text-center bg-white bg-opacity-10 tracking-tight rounded'>
                            <span>social.ai</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='p-4 sm:p-12 bg-white border'>
                      <div className='flex flex-wrap justify-center lg:items-center -m-8'>
                        <div className='w-full md:w-1/2 p-8'>
                          <div className='max-w-md'>
                            <div className='flex flex-wrap -m-4'>
                              <div className='w-full p-4'>
                                <div className='flex flex-wrap -m-2'>
                                  <div className='w-auto p-2'>
                                    <span className='inline-block sm:text-xl text-red-500 font-semibold tracking-tight'>
                                      1.
                                    </span>
                                  </div>
                                  <div className='flex-1 p-2'>
                                    <h3 className='mb-3 sm:text-xl text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-500 font-semibold tracking-tight'>
                                      Créez un compte gratuitement
                                    </h3>
                                    <p className='sm:text-xl text-gray-500 tracking-tight'>
                                      Inscrivez-vous et configurer l'outil avec
                                      vos informations. Pas de pièges, juste une
                                      expérience utilisateur simple et
                                      intuitive..
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className='w-full p-4'>
                                <div className='flex flex-wrap -m-2'>
                                  <div className='w-auto p-2'>
                                    <span className='inline-block sm:text-xl text-red-500 font-semibold tracking-tight'>
                                      2.
                                    </span>
                                  </div>
                                  <div className='flex-1 p-2'>
                                    <h3 className='mb-3 sm:text-xl text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-500 font-semibold tracking-tight'>
                                      Générez la stratégie sur-mesure{' '}
                                    </h3>
                                    <p className='sm:text-xl text-gray-500 tracking-tight'>
                                      Oubliez les approches génériques,
                                      SocialDude génère des stratégies
                                      personnalisées pour atteindre vos
                                      objectifs et toucher votre audience.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className='w-full p-4'>
                                <div className='flex flex-wrap -m-2'>
                                  <div className='w-auto p-2'>
                                    <span className='inline-block sm:text-xl text-red-500 font-semibold tracking-tight'>
                                      3.
                                    </span>
                                  </div>
                                  <div className='flex-1 p-2 mb-8'>
                                    <h3 className='mb-3 sm:text-xl text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-500 font-semibold tracking-tight'>
                                      Publiez le contenu parfait.
                                    </h3>
                                    <p className='sm:text-xl text-gray-500 tracking-tight'>
                                      Révisez, éditez et publiez votre contenu
                                      généré par l'IA afin d'engager votre
                                      public et développer votre marque.
                                    </p>
                                  </div>
                                </div>
                                <div className='flex -m-1.5 mx-4'>
                                  <button className='group relative p-0.5 font-heading inline-block w-full md:w-auto text-lg text-gray-900 hover:text-white transition duration-300 ease-in-out font-medium bg-gradient-orange overflow-hidden rounded-10'>
                                    <div className='absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-orange transition ease-in-out duration-500' />
                                    <div className='py-2 px-5 bg-white rounded-lg'>
                                      <p className='relative z-10'>
                                        Essayez gratuitement
                                      </p>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='w-full md:w-1/2 p-8'>
                          <div className='group relative max-w-max ml-auto'>
                            <a
                              className='absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-white hover:bg-gray-200 rounded-full transition duration-200'
                              href='#'
                            >
                              <svg
                                width={21}
                                height={23}
                                viewBox='0 0 21 23'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M4.29871 0.690679C2.36694 -0.459709 0.800781 0.482703 0.800781 2.79393V19.8498C0.800781 22.1633 2.36694 23.1045 4.29871 21.9552L18.6583 13.4058C20.5907 12.255 20.5907 10.3905 18.6583 9.23999L4.29871 0.690679Z'
                                  fill='orange'
                                />
                              </svg>
                            </a>
                            <div className='max-w-max overflow-hidden rounded-xl'>
                              <img
                                className='transform group-hover:scale-105 transition duration-500 w-screen'
                                src='https://images.unsplash.com/photo-1557682260-96773eb01377?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyNXx8b3JhbmdlfGVufDB8MHx8fDE2OTU4MjUyMDR8MA&ixlib=rb-4.0.3&q=85&w=1920'
                                alt=''
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                  <svg
                    className='w-full'
                    width='100%'
                    height={186}
                    preserveAspectRatio='none'
                    viewBox='0 0 1600 186'
                    fill='red'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1608 127.618C969.729 -103.398 167.657 31.1518 0 127.618V186H1608V127.618Z'
                      fill='white'
                      className=''
                    />
                  </svg>
                  <div className='bg-white sm:h-80 h-40' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='overflow-hidden bg-gradient-orange2'
          contentEditable='false'
        >
          <div className='container mx-auto px-4 pt-8 pb-4'>
            <p className='mb-16 font-heading font-semibold sm:text-7xl text-white text-center text-3xl'>
              Ils nous font confiance...
            </p>
            <div className='flex flex-wrap justify-center items-center -m-10 border-b border-white'>
              <div className='w-auto sm:p-10 p-4'>
                <img
                  src='images/4-png-1695674466971.webp'
                  alt=''
                  className='size'
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className='w-auto sm:p-10 p-4'>
                <img
                  src='images/SocialMed-317-66-px-2.png'
                  alt=''
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className='w-auto sm:p-10 p-4'>
                <img
                  src='images/7.png'
                  alt=''
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className='w-auto sm:p-10 p-4'>
                <img
                  src='images/LOGO-Kalstein86-3.png'
                  alt=''
                  className='size'
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
            <div className='mt-12 max-w-2xl mx-auto text-center'></div>
          </div>
        </section>
        <section className='relative overflow-hidden sm:pt-20 pt-10 sm:pb-32'>
          <div className='container mx-auto px-4 mb-12'>
            <h2 className='mb-6 mx-auto font-heading sm:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-yellow-500 max-w-3xl text-3xl sm:text-center'>
              <b>
                Concevez la stratégie, générez le contenu, développez votre
                communauté
              </b>
            </h2>
            <p className='max-w-lg mx-auto text-gray-600 sm:mb-16 mb-8 sm:text-center'>
              SocialDude exploite la puissance de l'IA générative pour produire
              du contenu unique.
            </p>
            <div className='flex flex-wrap -m-8'>
              <div className='w-full md:w-1/3 p-8'>
                <a className='group' href='#'>
                  <div className='mb-9 overflow-hidden rounded-2xl'>
                    <img
                      className='transform hover:scale-110 w-full transition ease-out duration-500'
                      src='images/3.png'
                      alt=''
                    />
                  </div>
                  <h3 className='mb-4 font-heading font-bold text-xl group-hover:underline text-gray-900'>
                    Conception de stratégie personnalisée
                  </h3>
                  <p className='mb-5 text-gray-600 text-base'>
                    Exploiter l'IA pour générer et optimiser des stratégie
                    cohérentes et adaptés en fonction de vos objectifs
                    (conseils, idées de contenu...)
                  </p>
                </a>
                <a
                  className='group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden'
                  href='#'
                >
                  <p className='mb-1'>Essayez l'outil</p>
                  <div className='w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500' />
                </a>
              </div>
              <div className='w-full md:w-1/3 p-8'>
                <a className='group' href='#'>
                  <div className='mb-9 overflow-hidden rounded-2xl'>
                    <img
                      className='transform hover:scale-110 w-full transition ease-out duration-500'
                      src='images/2.png'
                      alt=''
                    />
                  </div>
                  <h3 className='mb-4 font-heading font-bold text-xl group-hover:underline text-gray-900'>
                    Génération de contenu engageant
                  </h3>
                  <p className='mb-5 text-gray-600 text-base'>
                    Automatisez la création de contenu unique et captivant,
                    adapté à votre marque et votre audience.
                  </p>
                </a>
                <a
                  className='group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden'
                  href='#'
                >
                  <p className='mb-1'>Essayez l'outil</p>
                  <div className='w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500' />
                </a>
              </div>
              <div className='w-full md:w-1/3 p-8'>
                <a className='group' href='#'>
                  <div className='mb-9 overflow-hidden rounded-2xl'>
                    <img
                      className='transform hover:scale-110 w-full transition ease-out duration-500'
                      src='images/1.png'
                      alt=''
                    />
                  </div>
                  <h3 className='mb-4 font-heading font-bold text-xl group-hover:underline text-gray-900'>
                    Planification et organisation
                  </h3>
                  <p className='mb-5 text-gray-600 text-base'>
                    Concentrez-vous sur ce qui ce compte le plus, gagnez en
                    temps et en efficacité dans votre gestion des réseaux
                    sociaux.
                  </p>
                </a>
                <a
                  className='group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden'
                  href='#'
                >
                  <p className='mb-1'>Essayez l'outil</p>
                  <div className='w-full transform -translate-x-0 group-hover:translate-x-full h-0.5 bg-gradient-cyan transition ease-in-out duration-500' />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-gradient-orange overflow-hidden'>
          <div className='lg:py-28 overflow-hidden sm:py-24 py-10'>
            <div className='container px-4 mx-auto'>
              <div className='mx-auto text-center flex-col bg-white p-10 rounded-10'>
                <h2 className='font-heading mb-6 tracking-tighter sm:text-6xl text-3xl bg-clip-text text-transparent bg-gradient-orange'>
                  Faites décoller vos communautés !
                </h2>
                <p className='mb-6 tracking-tighter sm:text-2xl font-medium'>
                  Travaillez avec SocialDude, réinventez votre stratégie de
                  médias sociaux
                </p>
                <button className='group p-0.5 font-heading block w-full md:w-auto text-lg text-gray-900 hover:text-white transition duration-300 ease-in-out font-medium bg-gradient-orange overflow-hidden rounded-10 relative inline-block'>
                  <div className='top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-orange transition ease-in-out duration-500 absolute' />
                  <div className='py-2 px-5 bg-white rounded-lg'>
                    <p className='relative z-10'>Essayez gratuitement</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-24 overflow-hidden'>
          <img
            className='absolute bottom-0 left-0'
            src='gradia-assets/elements/footers/radial.svg'
            alt=''
          />
          <div className='relative z-10 container mx-auto px-4'>
            <div className='flex flex-wrap -m-6'>
              <div className='w-full md:w-1/2 lg:w-5/12 p-6'>
                <div className='flex flex-col justify-between h-full'>
                  <div>
                    <img
                      className='mb-4'
                      src='images/SocialMed-317-66-px-3.png'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='mb-4 font-heading font-medium text-base'>
                      SocialDude est la solution idéale pour les community
                      managers, les spécialistes du marketing sur les réseaux
                      sociaux et les travailleurs du numérique. Grâce à notre
                      application web SaaS, développez vos réseaux sociaux,
                      automatisez la création de contenu et simplifiez la
                      planification et l'organisation de vos publications.
                    </p>
                    <p className='text-gray-600 text-sm'>
                      © Copyright 2023. All Rights Reserved by SocialDude.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-2/12 p-6'></div>
              <div className='w-full md:w-1/2 lg:w-2/12 p-6'>
                <div className='h-full'>
                  <h3 className='mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px'>
                    Support
                  </h3>
                  <ul>
                    <li className='mb-4'>
                      <a
                        className='font-heading font-medium text-base text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Mon compte
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='font-heading font-medium text-base text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Aide
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='font-heading font-medium text-base text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className='font-heading font-medium text-base text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-3/12 p-6'>
                <div className='h-full'>
                  <h3 className='mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px'>
                    Mentions légales
                  </h3>
                  <ul>
                    <li className='mb-4'>
                      <a
                        className='font-heading font-medium text-base text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        CGV
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        className='font-heading font-medium text-base text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Politique de confidentialité
                      </a>
                    </li>
                    <li>
                      <a
                        className='font-heading font-medium text-base text-gray-900 hover:text-gray-700'
                        href='#'
                      >
                        Licence
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

