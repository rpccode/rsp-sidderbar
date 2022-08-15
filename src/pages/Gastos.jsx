import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Gastos = () => {
  return (
    <div>
     <div className="mb-10">
     <h2 className=" font-black text-center text-white text-3xl">Listado De Gastos</h2>
      <p className="text-center mt-5   before:font-normal text-xl">
        Administra tus {""}
        <span className="text-yellow-200 font-bold ">Gastos</span>
      </p>
     </div>

      <div className="h-screen px-5  md:flex md:justify-between ">
        <div className="md:w-1/2 p-5   mx-3 flex items-center justify-between">
        <div className="m-auto px-6   mt-0">
            <div className="relative group">
              <div
                role="hidden"
                className="absolute inset-0 w-full h-full rounded-3xl bg-white shadow-xl transition duration-300 group-cursor-pointer group-hover:scale-105"
              ></div>
              <div className="relative p-6   flex  sm:justify-center flex-wrap gap-6 sm:flex-nowrap ">
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
        </div>

        <div className="md:w-1/2 p-5  h-20 ">
          
            <div className="px-4 py-2  mb-5 bg-white rounded-xl shadow-xl flex items-center">
              <img src="src\img\icono_ahorro.svg" alt="icono_ahorro" className="h-10 w-15 rounded " />
              <div className="px-5 flex flex-grow items-center justify-between">
                <div className="space-y-1">
                  <p className="uppercase text-sm font-bold text-gray-500">
                    juan antonio
                  </p>
                  <p className=" text-sm font-bold text-black">Comida</p>
                  <p className=" text-sm font-bold text-black">
                    Agregado el:{" "}
                    <span className="text-gray-500 text-base">23/7/22</span>
                  </p>
                </div>
                <span className="text-black font-bold text-xl ">$4000</span>
              </div>
            </div>
            <div className="px-4 py-2 mb-5 bg-white rounded-xl shadow-xl flex items-center">
              <img src="src\img\icono_casa.svg" className="h-15 w-10 rounded-md " />
              <div className="px-5 flex flex-grow items-center justify-between">
                <div className="space-y-1">
                  <p className="uppercase text-sm font-bold text-gray-500">
                    juan antonio
                  </p>
                  <p className=" text-sm font-bold text-black">Comida</p>
                  <p className=" text-sm font-bold text-black">
                    Agregado el:{" "}
                    <span className="text-gray-500 text-base">23/7/22</span>
                  </p>
                </div>
                <span className="text-black font-bold text-xl ">$4000</span>
              </div>
            </div>

            <div className="px-4 py-2 bg-white rounded-xl shadow-xl flex items-center">
              <img src="src\img\icono_comida.svg" className="h-10 w-10 rounded-md " />
              <div className="px-5 flex flex-grow items-center justify-between">
                <div className="space-y-1">
                  <p className="uppercase text-sm font-bold text-gray-500">
                    juan antonio
                  </p>
                  <p className=" text-sm font-bold text-black">Comida</p>
                  <p className=" text-sm font-bold text-black">
                    Agregado el:{" "}
                    <span className="text-gray-500 text-base">23/7/22</span>
                  </p>
                </div>
                <span className="text-black font-bold text-xl ">$4000</span>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Gastos;
