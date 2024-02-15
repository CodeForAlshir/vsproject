import React from 'react'

export const Saved = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          integrity="sha256-i2a2/KHCdO/b0CoLbq7oAM55ENtfmFII3Y/iksjlyzw="
          crossOrigin="anonymous"
        />
        <title>Contacts</title>
      </head>

      <body className="bg-gray-100">
        <nav className="navbar bg-blue-500 p-4">
          <div className="logo text-white"> &copy;</div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" className="hidden" />
            <label htmlFor="checkbox_toggle" className="hamburger text-white cursor-pointer">
              &#9776;
            </label>
            <div className="menu hidden md:flex">
              <li>
                <a href="index.html" className="text-white hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="portfolio.html" className="text-white hover:text-gray-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="contact.html" className="text-white hover:text-gray-300">
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div className="contact-details flex flex-col items-center mt-20">
          <div className="contact-item text-center cursor-pointer mb-8">
          
            <div className="contact-bubble hidden absolute bg-white p-2 border border-gray-300 rounded text-center z-10">
              Facebook: @AlshirGantan @AjSamia @EdrickVisda
            </div>
          </div>
          <div className="contact-item text-center cursor-pointer mb-8">
            
            <div className="contact-bubble hidden absolute bg-white p-2 border border-gray-300 rounded text-center z-10">
              Twitter: @AlshirGantan @AjSamia @EdrickVisda
            </div>
          </div>
          <div className="contact-item text-center cursor-pointer mb-8">
            
            <div className="contact-bubble hidden absolute bg-white p-2 border border-gray-300 rounded text-center z-10">
              Discord: @AlshirGantan @AjSamia @EdrickVisda
            </div>
          </div>
          <div className="contact-item text-center cursor-pointer mb-8">
            
            <div className="contact-bubble hidden absolute bg-white p-2 border border-gray-300 rounded text-center z-10">
              Gmail: edrickvisda@gmail.com
            </div>
          </div>
          <div className="contact-item text-center cursor-pointer mb-8">
            <img src="image/phone-call.png" alt="Phone" className="w-20 h-20 rounded-full" />
            <div className="contact-bubble hidden absolute bg-white p-2 border border-gray-300 rounded text-center z-10">
              Phone: +9983340998
            </div>
          </div>
        </div>

        <div className=" w-auto h-auto text-xl items-center justify-center flex flex-row text-center font-semibold">
        All Copyrights Reserved &copy; <br /> 2024
    </div>
      </body>
    </>
  );
};
    

