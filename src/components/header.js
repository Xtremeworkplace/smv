import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/"><StaticImage 
                  className="h-12 w-12"
                  src="../images/logo1.png"
                  alt="Workflow"
                /></Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="https://seekmyvision.thinkific.com/users/sign_in"
                    className=" hover:bg-amber-400 text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>

                  <Link href="mailto:info@seekmyvision.com"
                    className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Email Support
                  </Link>

                  <Link href="https://www.youtube.com/channel/UC9Zs03cVzZzBRNDJ_pmpv9w"
                    className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Resources
                  </Link>

                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-900"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="https://seekmyvision.thinkific.com/users/sign_in"
                  className="hover:bg-amber-400 text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>

                <Link href="mailto:info@seekmyvision.com"
                  className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Email Support
                </Link>

                <Link href="https://www.youtube.com/channel/UC9Zs03cVzZzBRNDJ_pmpv9w"
                  className="text-gray-900 hover:bg-amber-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Resources
                </Link>

              
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
  );
}

export default Nav;