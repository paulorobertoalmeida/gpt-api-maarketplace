import React from 'react';

const Header: React.FC = () => {
  return <div>
    <div>

      <div className="absolute inset-x-0 top-0 z-50 py-6">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <nav className="w-full flex justify-between gap-6 relative">

            <div className="min-w-max inline-flex relative">
              <a href="/" className="relative flex items-center gap-3">
                <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">
                  <span className="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
                  <span className="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
                  <span className="absolute w-4 h-4 -bottom-1 -left-1 bg-blue-600 rounded-md rotate-45"></span>
                  <span
                    className="absolute w-2 h-2 rounded-full bg-gray-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                </div>
                <div className="inline-flex text-lg font-semibold text-gray-900">
                  <span className='text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600'>Hyff</span>
                </div>
              </a>
            </div>

            <div data-nav-overlay aria-hidden="true"
              className="fixed hidden inset-0 lg:!hidden bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl">
            </div>
            <div data-navbar
              className="flex invisible opacity-0  translate-y-10 overflow-hidden lg:visible lg:opacity-100  lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0">
              <ul
                className="border-t border-gray-100  lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-700 w-full lg:justify-center lg:items-center">
                <li>
                  <a href="#" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                    Features
                  </a>
                </li>
              </ul>

              <div
                className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100   lg:border-0 px-6 lg:px-0">
                <a href="#"
                  className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                  <span className="relative z-10 text-white">
                    Get Started
                  </span>
                </a>
              </div>
            </div>


            <div className="min-w-max flex items-center gap-x-3">

              <button data-toggle-navbar data-is-open="false"
                className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative">
                <span id="line-1"
                  className="w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear"></span>
                <span id="line-2"
                  className="w-6 origin-center  mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"></span>
                <span id="line-3"
                  className="w-6 mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"></span>
                <span className="sr-only">togglenav</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <section className="relative py-32 lg:py-36 bg-white">
        <div
          className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span
              className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
          </div>
          <span
            className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
          <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
        font-bold text-gray-900">
              Secure & scalable platform where <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Developers</span>
              can upload and manage their actions.
            </h1>
            <p className="mt-8 text-gray-700">
              Developing CustomGPTs that are widely used and creating a bustling marketplace of actions — puts us at the intersection of innovation and commerce in the AI space. By focusing on quality and user engagement, we position ourselves to earn revenue shares from OpenAI and direct sales through our marketplace.
            </p>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <form action="#"
                  className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20
                        border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white  focus-within:border-blue-600">
                  <span className="min-w-max pr-2 border-r border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                    </svg>
                  </span>
                  <input type="email" name="" id="" placeholder="johndoe@gmail.com"
                    className="w-full py-3 outline-none bg-transparent" />
                  <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                            after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                    <span className="hidden sm:flex relative z-[5]">
                      Get Started
                    </span>
                    <span className="flex sm:hidden relative z-[5]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width="2350" height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
          </div>
        </div>
      </section>
    </div>;
  </div>

}

export default Header;