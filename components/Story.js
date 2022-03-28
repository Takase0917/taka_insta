function Story({ img, username }) {
    return (
        <div>
            <img className="h-14 w-14 rounded-full 
            p-[1.5px] border-red-500 border-2 
            object-contain cursor-pointer
             hover:scale-110 transition transform
              duration-200 ease-out" src="http://personal.rhul.ac.uk/zkac/332/Screenshot%202022-03-28%20at%2018.21.59.png" alt="" />
            <p className="text-xs w-14 truncate text-center">
                {username}
            </p>
        </div>
    )
}

export default Story