import React from 'react';
import { Link} from "react-router-dom"


export default function ServicesComponent() {
    const serviceClick = (btn) => {
        console.log("Button clicked: " + btn);
    }


    return (
        <>
        <div id="services-outer-container">
            <div className='h-services-divider'></div>
                <div id="services-container">
                
                <div className='services-btn-container'>
                    <Link to="/course">
                    <button className='services-btn' onClick={() => serviceClick("Course")}>
                        <img alt="course icon" src='\assets\icons\icon-course.svg'></img>
                    </button>
                    
                    <h1>Kurs</h1>
                    </Link>
                </div>
                
                <div className='v-services-divider'></div>

                <div className='services-btn-container'>
                    <Link to="/presentation">

                    <button className='services-btn' onClick={() => serviceClick("Presentation")}>
                        <img alt="diet icon" src='\assets\icons\icon-presentation.svg'></img>
                    </button>
                    <h1>Foredrag</h1>
                    </Link>
                </div>

                <div className='v-services-divider'></div>

                <div className='services-btn-container'>
                    <Link to="/dieting">

                    <button className='services-btn' onClick={() => serviceClick("Diet")}>
                        <img alt="diet icon" src='\assets\icons\icon-diet.svg'></img>
                    </button>
                    <h1>Kostveiledning</h1>
                    </Link>
                </div>


                <div className='v-services-divider'></div>

                <div className='services-btn-container'>
                    <Link to="/consultant">

                    <button className='services-btn' onClick={() => serviceClick("Consultant")}>
                        <img alt="diet icon" src='\assets\icons\icon-consultant.svg'></img>
                    </button>
                    <h1>Konsulenttjenseter</h1>
                    </Link>
                </div>

            </div>
            <div className='h-services-divider'></div>
        </div>

        </>

    );
}




