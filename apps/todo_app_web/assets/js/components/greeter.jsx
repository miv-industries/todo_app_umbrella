import React from "react";
import { useState } from "react"

const Greeter = (props) => {
    const name = props.name;
    const [counter, setCounter] = useState(0) 

    const increment = () => {
      if(counter <= 12) setCounter(counter + 1)
    }
    return (
        <section className={`relative phx-hero flex space-y-8 flex-col items-center justify-center ${counter <= 12 ? 'bg-green-900/30' : 'bg-red-900/30'} rounded-lg w-screen h-screen`}>
          
          <h1 className="underline mb-5 font-normal text-2xl">{counter <= 12 ?`Welcome to ${name} SSR with JavaScript React and tailwind!` : 'Ooooops !?'}</h1>
          <p>{counter <= 12 ? 'How many times can you click until it breaks?' : 'Can u even click bruv?'}</p>
          <div className={`py-2 px-5 bg-red-500/30 rounded-lg transition transform ease-in-out duration-1000 ${counter >= 13 ? 'opacity-100' : 'opacity-0 top-56'}`}>

            <p className={`text-xl text-red-900 transition transform ease-in-out duration-1000 ${counter >= 13 ? 'opacity-100' : 'opacity-0'}`}>
              Apparently not that many ahahahah
            </p>
          </div>

          <h1>{ counter }</h1>
          <button className={`w-48 h-10 text-white rounded-lg transition ease-in-out duration-1000 ${counter >= 13 ? 'bg-red-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-900'}`} onClick={increment}>
            {counter <= 13 ? 'click' : 'non'}
          </button>
        </section>
    );
};

export default Greeter;