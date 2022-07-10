import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Home = () => {
  return (
    <div className=' md:h-screen xl:flex  flex-wrap items-center justify-center'>
        <div className="m-auto px-6 mb-5  mt-5   sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
            <div className="relative group">
              <div
                role="hidden"
                className="absolute inset-0 w-full h-full rounded-3xl bg-white shadow-xl transition duration-300 group-cursor-pointer group-hover:scale-105"
              ></div>
              <div className="relative p-6  flex  sm:justify-center flex-wrap gap-6 sm:flex-nowrap ">
                <div className="sm:w-5/12 mt-10 ">
                  <CircularProgressbar
                    styles={buildStyles({
                      textSize:'14px',
                      trailColor:'rgb(249 250 251 / var(1)',
                      pathColor:'#eab308',
                      textColor:'rgb(236 72 153 / 1)'
                      
                    })}
                    value={10}
                    text='gastado'
                  
                  
                  />
                </div>
                <div className="sm:w-7/12 pl-5 md:p-0  space-y-4">
                  <h4 className="text-2xl font-bold rounded-md text-center
                  bg-gradient-to-br text-white  from-pink-500 to-yellow-500 uppercase">Presupuesto</h4>
                  <p className="text-gray-600 text-2xl">
                  Presupuesto: $<span className='text-pink-500'>10000</span>
                  </p>
                  <p className="text-gray-600 text-2xl">
                  Disponible: $<span className='text-pink-500'>10000</span>
                  </p>
                  <p className="text-gray-600 text-2xl">
                  Gastado: $<span className='text-pink-500'>10000</span>
                  </p>
                  <button className="block w-full px-4 py-2 rounded-xl  font-medium bg-yellow-100 text-xl 
                  text-yellow-900 hover:bg-yellow-200">
                  Informacion
                  </button>
                  <div className="pt-4 border-t flex gap-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
            <div className="relative group">
              <div
                role="hidden"
                className="absolute inset-0 w-full h-full rounded-3xl bg-white shadow-xl transition duration-300 group-cursor-pointer group-hover:scale-105"
              ></div>
              <div className="relative p-6  flex  sm:justify-center flex-wrap gap-6 sm:flex-nowrap ">
                <div className="sm:w-5/12 mt-10 ">
                  <CircularProgressbar
                    styles={buildStyles({
                      textSize:'10px',
                      trailColor:'rgb(249 250 251 / var(1)',
                      pathColor:'#eab308',
                      textColor:'rgb(236 72 153 / 1)'
                      
                    })}
                    value={30}
                    text='Total Cobrado 30%'
                  
                  
                  />
                </div>
                <div className="sm:w-7/12  space-y-4">
                  <h4 className="text-2xl font-bold rounded-md text-center
                  bg-gradient-to-br text-white  from-pink-500
                   to-yellow-500 uppercase">Prestamo de Hoy</h4>
                  <p className="text-gray-600 text-2xl">
                  Total Prestamos: $<span className='text-pink-500'>10000</span>
                  </p>
                  <p className="text-gray-600 text-2xl">
                  Recaudado: $<span className='text-pink-500'>10000</span>
                  </p>
                  <p className="text-gray-600 text-2xl">
                  Faltante: $<span className='text-pink-500'>10000</span>
                  </p>
                  
                  <button className="block w-full px-4 py-2 rounded-xl  font-medium bg-yellow-100 text-xl 
                  text-yellow-900 hover:bg-yellow-200">
                  Informacion
                  </button>
                  <div className="pt-4 border-t flex gap-4"></div>
                </div>
              </div>
            </div>
          </div>





    </div> 
   
                                
  )
}

export default Home