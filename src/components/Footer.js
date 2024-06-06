import React from 'react';


export default function Footer() {



    return (
        <>
        <div id="footer-container">

                <div id="footer-logo-container">
                    <button href='/home'>
                        <img alt="logo" src='/assets/images/NewLogoText.png' className='footer-logo' ></img>

                    </button>

                    <div className='horizontal-footer'>
                        <img alt="full right arrow" src='/assets/icons/icon-phone.svg' className='right-arrow-icon'></img>
                        <a>922 26 557</a>
                    </div>
                    <div className='horizontal-footer'>
                        <img alt="full right arrow" src='/assets/icons/icon-email.svg' className='right-arrow-icon'></img>
                        <a href='mailto:Godtrening@online.no'>Godtrening@online.no</a>
                    </div>
                    <div className='horizontal-footer'>
                        <img alt="full right arrow" src='/assets/icons/icon-instagram.svg' className='right-arrow-icon'></img>
                        <a href='https://www.instagram.com/godtrening/' target='blank'>@godtrening</a>
                    </div>
                </div>



            <div className='footer-inner-container'>
                <h1>Utforsk</h1>
                <div className='h-footer-divider'></div>

                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/home'>Hjem</a>
                </div>
                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/services'>Tjenester</a>
                </div>
                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/media'>Media</a>
                </div>
                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/contact'>Kontakt</a>
                </div>
            </div>

            <div className='footer-inner-container' id="FIC2">
                <h1>Tjenester</h1>
                <div className='h-footer-divider'></div>

                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/course'>Kurs</a>
                </div>
                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/presentation'>Foredrag</a>
                </div>
                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/consultant'>Konsulenttjenseter</a>
                </div>
                <div className='horizontal-footer'>
                    <img alt="full right arrow" src='/assets/icons/icon-full-right-arrow.svg' className='right-arrow-icon'></img>
                    <a href='/dieting'>Kostveiledning</a>
                </div>
            </div>

        </div>
        </>

    );
}




