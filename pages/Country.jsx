import React, { useEffect, useState } from 'react'

export default function Country() {
    const [country, setcountry] = useState([])
    const [search, setsearch] = useState('')
    const [order, setOrder] = useState('default')
    const [selectedCountry, setselectedCountry] = useState(null)
    const [currentPage, setcurrentPage] = useState(1)
    const itemsPerPage = 10
     

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,languages,region,flags,population')
        .then((res) => (res.json()))
        .then((data) => { 
            setcountry(data)
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
            
        })
      
    }, [])

     const filteredCountries = country.filter((countries) => {
        const filterName = countries.name.common.toLowerCase().includes(search.toLowerCase())
        const filterRegion = countries.region.toLowerCase().includes(search.toLowerCase())

        return filterName || filterRegion
     })

  
       
        filteredCountries.sort((a, b) => {
            if (order === 'asc') {
                return a.name.common.localeCompare(b.name.common) 
            } else {
                return b.name.common.localeCompare(a.name.common)
            }
        })

         filteredCountries.sort((a, b) => {
            if (order === 'asc') {
                return a.population - b.population
            } else if (order === 'desc') {
                return b.population - b.population
                
            } else {
                return 0
            } 
        })
       

        const lastPage = currentPage * itemsPerPage
        const firstPage = lastPage - itemsPerPage
        const totalPage = filteredCountries.length / itemsPerPage
        const currentCountries = filteredCountries.slice(firstPage , lastPage)
        

        

  return (
    <div className='' >
        <h1 className='italic text-[40px] '>{country.length}</h1>
        <div >
            <div className='bg-blue-950'>
              <input type="text" onChange={(e) => setsearch(e.target.value)} value={search} placeholder='search country by name' className='border  rounded-[10px] bg-[#f4f4f4] text-[center] my-[30px] mx-[400px] outline-0 w-[30%] ' />
              <select name="" id="" onChange={(e) => setOrder(e.target.value)} value={order} className='border  rounded-[10px] bg-[#f4f4f4] font-serif my-[30px] mx-[20px] outline-0 w-[15%] '>
                <option value="default">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className='  bg-[#f4f4f4]  my-[30px] flex flex-wrap gap-[40px] justify-center'>
                {
               currentCountries.map((eachcountry) => (
                    <div className=' shadow-lg w-[20%]   ' onClick={() =>setselectedCountry(eachcountry)} > 
                        <img className='w-full h-[200px] object-cover ' src={eachcountry.flags.png} alt="" /> 
                        <div className=' pl-[10px] my-[20px] '>
                         <h1 className='text-[24px] text-amber-950 font-bold'>{eachcountry.name.common}</h1>
                         <p className='text-[14px] '>Capital: {eachcountry.capital}</p>
                         <p className='text-[14px]'>Languages: {Object.values(eachcountry.languages).join('')}</p> 
                         <p className='text-[14px]'>Region: {eachcountry.region}</p>
                         <p className='text-[14px]'>Currencies: {Object.values(eachcountry.currencies).map(c=>c.symbol)}</p>
                        <p className='text-[14px]'>Population: {eachcountry.population.toLocaleString()}</p>
                        </div>
                    </div>
                ))
            }
            </div>

             <div>
              {
                selectedCountry && (
                    <div className='fixed inset-0 justify-center flex items-center bg-amber-700
                    '>
                        <div className='shadow-lg  bg-white w-[30%]'>
                            <img src={selectedCountry.flags.png} alt="" className='w-[100%]' />
                            <p>{selectedCountry.name.common}</p>
                            <p>{selectedCountry.capital}</p>
                            <p>{selectedCountry.capital}</p>
                            <button></button>
                        </div>
                    </div>
                )
              }

              </div>

            <div className='flex my-10 justify-center items-center gap-5'>
                <button onClick={() =>setcurrentPage((prev) => prev > 1 ? prev -1 : prev)} disabled={currentPage === 1}>Previous</button>
                <p>Page {currentPage} / {totalPage}</p>
                <button onClick={() =>setcurrentPage((next) => next < totalPage ? next +1 : next)} >Next </button>
            </div>
        </div>
    </div>
  )
}
