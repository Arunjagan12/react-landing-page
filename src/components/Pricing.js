import React from "react";

function Pricing (){

    return (
        <section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Pricing made for collaborative support.</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
         {/* Pricing Card 1 */}
          <div data-aos="zoom-in" className="flex flex-col hover p-6 mx-auto max-w-lg text-left  hover:bg-gray-800 hover:text-white text-gray-900 bg-white rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8">
              <h3 className="mb-4 text-3xl font-bold">Freebie</h3>
              <p className="font-light text-gray-500 sm:text-lg">Ideal for individuals who need quick access to basic features.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$29</span>
                  <span className="text-gray-500">/month</span>
              </div>
              <div>
              <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border font-semibold border-thin border-gray-900 text-gray-700 px-4 sm:px-8 py-1 sm:py-3 text-sm w-full">Get Started Now</button>
              </div>
              <br />
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>20,000+ of PNG & SVG graphics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Access to 100 million stock images</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upload custom icons and fonts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Unlimited Sharing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upload graphics & video in up to 4k</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Unlimited Projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400  bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Instant Access to our design system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400  bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Create teams to collaborate on designs</span>
                  </li>
              </ul>
             
          </div>
          {/* Pricing Card 2 */}
          <div data-aos="zoom-in" className="flex flex-col p-6 mx-auto max-w-lg hover:bg-gray-800 hover:text-white text-left text-gray-900 bg-white rounded-lg border border-gray-300 shadow  xl:p-8">
              <h3 className="mb-4 text-3xl font-bold">Professional</h3>
              <p className="font-light text-gray-500 sm:text-lg">Ideal for individuals who who need advanced features and tools for client work.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-500">/month</span>
              </div>
              <div>
              <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border font-semibold border-thin border-gray-900 text-gray-700 px-4 sm:px-8 py-1 sm:py-3 text-sm w-full">Get Started Now</button>
              </div>
              <br />
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>20,000+ of PNG & SVG graphics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Access to 100 million stock images</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upload custom icons and fonts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Unlimited Sharing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upload graphics & video in up to 4k</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Unlimited Projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400  bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Instant Access to our design system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400  bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Create teams to collaborate on designs</span>
                  </li>
              </ul>
          </div>
          {/* Pricing Card 3 */}
          <div data-aos="zoom-in" className="flex flex-col p-6 mx-auto max-w-lg text-left text-gray-900 bg-white hover:bg-gray-800 hover:text-white rounded-lg border border-gray-300 shadow xl:p-8">
              <h3 className="mb-4 text-3xl font-bold">Enterprise</h3>
              <p className="font-light text-gray-500 sm:text-lg">Ideal for businesses who need personalized services and security for large teams.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$499</span>
                  <span className="text-gray-500">/month</span>
              </div>
              <div>
              <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border font-semibold border-thin border-gray-900 text-gray-700 px-4 sm:px-8 py-1 sm:py-3 text-sm w-full">Get Started Now</button>
              </div>
              <br />
              {/*List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>20,000+ of PNG & SVG graphics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Access to 100 million stock images</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upload custom icons and fonts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Unlimited Sharing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Upload graphics & video in up to 4k</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400 bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Unlimited Projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400  bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Instant Access to our design system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/* Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-gray-400 border-2  border-gray-400  bg-transparent rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Create teams to collaborate on designs</span>
                  </li>
              </ul>
             
          </div>
      </div>
  </div>
</section>
    );
}

export default Pricing;