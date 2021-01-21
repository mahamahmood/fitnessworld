import React from 'react';
import './Layout.css';

function Layout(props) {

    return (
        <>
            <div className="header">
                <div className='logoTitleContainer'>
                    <div className='logoBox'></div>
                    <h1 className='headerTitle'>FitnessWorld</h1>
                </div>
                <div className="navBar">
                    <div className='navItem'>
                        <a className='itemText' href='/classes'>Home</a>
                    </div>
                    <div className='navItem'>
                        <a className='itemText' href='/classes'>On-Demand Classes</a>
                    </div>
                    <div className='navItem'>
                        <a className='itemText' href='/livestream-group'>Live Group Sessions</a>
                    </div>
                    <div className='navItem'>
                        <a className='itemText' href='/livestream-personal'>Live Personal Coaching</a>
                    </div>
                    <div className='navItem'>
                        <a className='itemText' href='/dashboard'>Dashboard</a>
                    </div>
                    <div className='navItem'>
                        <a className='itemText' href='/login'>Log In</a>
                    </div>
                </div>
            </div>
            <div>
                {props.children}
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Layout;