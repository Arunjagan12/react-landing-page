import React from "react";


function Faq() {

    return(
        <section className="bg-white">
    <div className="container max-w-4xl px-6 py-10 mx-auto">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-900 lg:text-5xl">Frequently asked questions</h1>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">Everything you need to know about the product and the billing.</p>
        </div>
        <div className="mt-12 space-y-8">
            <div data-aos="zoom-in-down" className="border-2 border-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-xl text-gray-800">Is there a free trial available?</h1>

                    <span className="text-gray-800 border-2  border-gray-800 bg-transparent rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>
                </button>


                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                </p>
            </div>

            <div data-aos="zoom-in-down" className="border-2 border-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-xl text-gray-800">Can I change my plan later?</h1>

                    <span className="text-gray-800 border-2  border-gray-800 bg-transparent rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>

            <div data-aos="zoom-in-down" className="border-2 border-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-xl text-gray-800">What is your cancellation policy?</h1>

                    <span className="text-gray-800 border-2  border-gray-800 bg-transparent rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>

            <div data-aos="zoom-in-down" className="border-2 border-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-xl text-gray-800">Can other info be added to an invoice??</h1>

                    <span className="text-gray-800 border-2  border-gray-800 bg-transparent rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>

            <div data-aos="zoom-in-down" className="border-2 border-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-xl text-gray-800">How does billing work?</h1>

                    <span className="text-gray-800 border-2  border-gray-800 bg-transparent rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>
            <div data-aos="zoom-in-down" className="border-2 border-gray-100 rounded-lg">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-xl text-gray-800">How do I change my account email?</h1>

                    <span className="text-gray-800 border-2  border-gray-800 bg-transparent rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
</section>

    );
}

export default Faq;