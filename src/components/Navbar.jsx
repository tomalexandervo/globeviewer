import React from 'react';



const Navbar = () => {

const globeIcon = <svg class=' h-5 w-5'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>;

    return ( 

        <nav class="px-6 py-2 bg-white shadow-md md:flex ">
                <div class="flex justify-between items-center">
                    <div class="text-3xl text-gray-800 font-bold hover:text-gray-800">
                        <a href="#">globeviewer  </a> 
                        
                    </div> 
                    <div className='ml-1 pt-1  text-gray-800 font-bold hover:text-gray-800'>
                    {globeIcon}
                    </div>
                    <div class="md:hidden">
                        <button type="button" class="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full pb-2 md:flex md:items-center md:justify-between md:pb-0">
                    <div class="flex flex-col px-2 md:flex-row">
                        {/* <a href="#" class="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Home</a> */}
                        
                    </div>
                    <div class=" flex item-center">
                        <input type="text" class="w-full px-4 py-3 mx-4 leading-tight text-sm text-gray-400 bg-gray-900 rounded placeholder-gray-200 focus:outline-none focus:shadow-outline " placeholder="search" />
                        <button class="hidden text-gray-900 hover:text-gray-700 md:block">
                           
                        </button>
                    </div>
                </div>
            </nav>

     );
}
 
export default Navbar;