import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import Country from './Country'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



const Main = () => {

const fetchCountries = async (  ) => {
    const res = await fetch ('https://restcountries.eu/rest/v2/all')
    return res.json();
}
//______________________________________________________________________//

const {data, status} = useQuery('countries', fetchCountries)

console.log(data);





    return ( 
<div >

{status === 'loading' && (
    <div>

<SkeletonTheme color="#E1E1E1" highlightColor="#fafafa">
  <p className='m-4 p-4'>
    <Skeleton duration={2.2} height={80} count={25} />
  </p>
  
</SkeletonTheme>

    </div>
)}




<div className=''>
{status === 'success' && (
    <div className=' grid grid-cols-5 gap-4 m-10 '>
       

        { data.map(country => <Country key={country.name} nation= {country}/>)}

    </div>
)}
</div>
</div>
     );
}
 
export default Main;