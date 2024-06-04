import React from 'react';



export default function Header({HeaderHeadline, HeaderLink, HeaderLink2, HeaderLink3, HeaderAnchor, HeaderAnchor2, HeaderAnchor3, Display1, Display2}) {


    return (
        <>
        <div className='header'>
            <h1>{HeaderHeadline}</h1>
            <div className='header-container'>
                <a className='header-link' href={HeaderAnchor}>{HeaderLink}</a>
                <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon' style={{ display: Display1 }}></img>
                <a className='header-link' href={HeaderAnchor2}>{HeaderLink2}</a>
                <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon' style={{ display: Display2 }}></img>
                <a className='header-link' href={HeaderAnchor3}>{HeaderLink3}</a>
            </div>
        </div>
        </>
    );
}
