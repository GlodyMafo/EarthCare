import React from 'react'

export default function Homecard(props) {
  return (
    <div className="pb-10 z-10">
    <div className="flex justify-around">
      <div class="group before:hover:scale-95 before:hover:h-80 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all hover:text-white before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#A4BD01] via-[#A4BD01] to-[#679436] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-28 h-28 bg-white mt-8 rounded-full content-center border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 hover:text-white  group-hover:-translate-y-20 transition-all duration-500"><img className='pl-6 w-20 ' src={props.icon} alt="" /></div>
        <div class="z-10 px-4 cursor-pointer  group-hover:-translate-y-10 transition-all duration-500">
          <span class="text-2xl font-semibold">{props.domaine}</span>
          <p>{props.description}</p>
        </div>
        <a
          class="bg-white px-4 py-1 text-[#A4BD01] rounded-md z-10 hover:scale-80 transition-all duration-500 hover:bg-[#679436] hover:text-white"
          href="#"
        >
          Voir Plus
        </a>
        
      </div>

    

    </div>
  </div>  )
}
