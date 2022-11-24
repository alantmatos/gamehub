import React from 'react';
import './user.css'

const Hero = () => {

    const userData = [{
        id: 1,
        firstName: "Alan",
        lastName: "Matos",
        country: "USA",
        games: [{

        }],
        systems: [{

        }],
        profileImage: "https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png"
    }];

    return (
        <div className='user_container'>
        {userData ?
            userData.map(user => (
                <div key={user.id}>
                    <ul>
                        <li><img className='user_image' src={user.profileImage}></img> </li>
                        <li>{user.firstName} {user.lastName}</li>
                        <li></li>
                    </ul>
                </div>
            ))
            : ""}
    </div>
    )
}

export default Hero