import React from 'react';

const WelcomeMessage = (props) => {
    console.log(props)
    return (
        <div className='welcomeMessage'>
            <p>{props.user.lastname}, bienvenue sur votre espace</p>
            <div className='separator'></div>
        </div>
    );
};

export default WelcomeMessage;