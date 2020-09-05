import React from 'react';
import { Image, Col  } from 'antd';




const Country = ( {nation} ) => {
    return ( 

<div className='max-w-sm rounded overflow-hidden shadow-lg  '>



<img src={nation.flag} className='h-48 w-full object-cover'/>
<div class="p-6 pt-5">
    <div class="font-bold text-xl mb-2"><h3 className='text-gray-800 text-xl'>{nation.name} | {nation.nativeName}</h3></div>
    <div>
        <ul>
          
            <li>Capital: {nation.capital} </li>
            <li>Population: {nation.population} </li>
            <li>Region: {nation.region} </li>
            <li>Subregion: {nation.subregion} </li>

            <li>GINI Index: {nation.gini} </li>

        </ul>
    </div>
  </div>

</div>

     );
}
 
export default Country;