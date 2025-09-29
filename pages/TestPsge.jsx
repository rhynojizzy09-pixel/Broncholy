import React, { useEffect, useState } from 'react'

export default function TestPsge() {
    const [country, setcountry] = useState([])
    const [search, setsearch] = useState('')
    const [order, setorder] = useState('Default')

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages,region,flags,population')
        .then((res) => (res.json()))
        .then((data) => {
            setcountry(data)
            console.log(data);
            
        })
        .catch((error) => console.log(error) )
     
    }, [])

    const filteredCountries = country.filter((eachcountry) => {
       const filterName = eachcountry.name.common.toLowerCase().includes(search.toLowerCase())
       const filterRegion = eachcountry.region.toLowerCase().includes(search.toLowerCase())
       return filterName || filterRegion
    })

    filteredCountries.sort((a, b) => {
        if (order === 'Asc') {
        return a.name.common.localeCompare(b.name.common)
            
        } else {
            return b.name.common.localeCompare(a.name.common)
        }
    })
  
    
    
    

  return (
    <div>
        <input type="text" onChange={(e) => setsearch(e.target.value)} value={search} placeholder='Enter country by name' className='w-[30%] border rounded mx-[300px] my-[30px]'/>
        <select name="" id="" onChange={(e) => setorder(e.target.value)} value={order} className='border rounded'>
            <option value="Default">Default</option>
            <option value="Asc">Ascending</option>
            <option value="Desc">Descending</option>
        </select>
        <div className='flex flex-wrap justify-center items-center gap-[30px] my-[50px] '>
            {
               filteredCountries.map((eachcountry) => (
                    <div className='shadow-sm  w-[20%]'>
                      <img src={eachcountry.flags.png} alt="" />
                      <h1>{eachcountry.name.common}</h1>
                      <p>{eachcountry.capital}</p>
                      <p>{eachcountry.population}</p>
                      <p>{Object.values(eachcountry.languages).join()}</p>
                      <p>{Object.values(eachcountry.currencies).map(c =>c.symbol )}</p>
                      <p>{eachcountry.region}</p>

                    </div>

                ))
            }
        </div>
    </div>
  )
}
