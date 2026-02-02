import React, { useState } from 'react'
import { Search } from 'lucide-react'

const Searchbox = ({city}) => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) =>{
        setInput(e.target.value);
    }
    const handleButtonClick = () => {
        const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
        !capitalizedInput ? alert("Please enter a city name") : city(capitalizedInput.trim());
        setInput('');
    }
    return (
    <div className="flex justify-between items-center rounded-lg mb-4 h-10">
            <input type="text" 
            placeholder="Search city..." 
            className="bg-white border-none outline-none w-[80%] mr-1 sm:mr-2 h-10 rounded-2xl p-4 overflow box-border" 
            value={input}
            onChange={handleInputChange}
            />
            <button className='bg-white h-10 w-[30%] sm:w-[20%] p-2 rounded-full flex items-center justify-center border-none outline-none'
            onClick={handleButtonClick}
            >
                <Search className="text-black w-full" />
            </button>
            
    </div>
  )
}

export default Searchbox