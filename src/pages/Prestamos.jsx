import React from 'react'

const Prestamos = () => {
    return (
        <>
        <div className="mb-10">
                    <h2 className=" font-black text-center text-white text-3xl">Agrega un Cliente</h2>
                   
                </div>
            <div className='container w-1/2  flex  justify-center items-center '>
                
                <form action="" className='bg-white  rounded shadow-md px-8 pt-6 mb-4'>
                    
                    
                    <div className=' mb-4 '>
                        <label htmlFor="" className='block mb-2 font-bold uppercase' for='nombre'>Nombre: </label>
                        <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='nombre' />
                    </div>
                    <div className='p-3 font-bold uppercase w-full'>
                        <label htmlFor="">Nombre: </label>
                        <input type="text" className='bg-slate-100' />
                    </div>
                    <div className='p-3 font-bold uppercase w-full'>
                        <label htmlFor="">Nombre: </label>
                        <input type="text" className='bg-slate-100' />
                    </div>
                    <div className='p-3 font-bold uppercase w-full'>
                        <label htmlFor="">Nombre: </label>
                        <input type="text" className='bg-slate-100' />
                    </div> 
                    <div className='p-3 font-bold uppercase w-full'>
                        <label htmlFor="">Nombre: </label>
                        <input type="text" className='bg-slate-100' />
                    </div>
                </form>
            </div>



        </>
    )
}

export default Prestamos