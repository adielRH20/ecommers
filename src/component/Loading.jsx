import React from 'react';
import '../styles/loading.css'
const Loading = () => {
    return (
        <div className='overlay'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;