import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story"


const stories = [
    {
        id: '123',
        img: 'http://personal.rhul.ac.uk/zkac/332/Screenshot%202022-03-28%20at%2018.21.59.png',
        username: 'minami_hamabe.official'

    },
    {
        id: '123',
        img: 'http://personal.rhul.ac.uk/zkac/332/ilove.jpg',
        username: 'ilove'

    },

]

function Stories() {
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8
         border-gray-200 border rounded-sm overflow-scroll scrollbar-thin
        scrollbar-thumb-black">
            {stories.map(profile => (
                <Story key={profile.id} img={profile.img}
                    username={profile.username} />
            ))}

        </div>
    )
}

export default Stories
