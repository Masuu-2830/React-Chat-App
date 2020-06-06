import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Realtime  CHAT Application</h1>
            <div>
                <input placeholder="Enter your Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input placeholder="Room name" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className={'button'} type="submit">Join</button>
            </Link>
            </div>
        </div>
    )
}

export default Join;