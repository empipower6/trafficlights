import React from 'react'

const Lights = ({seconds,whatColor}) => {



    return (

        <div className="lights">

            {/* Green Light */}
            <div className={`${whatColor() === 'green'? 'greenLight light':'light'}`}>

                <h1 className={`${whatColor() === 'green'? 'activeH1':'disabledH1'}`}>{8 - seconds}</h1> 

            </div>

            {/* Yellow Light */}
            <div className={`${whatColor() === 'yellow'? 'yellowLight light':'light'}`}> </div>

            {/* Red Light */}

            <div className={`${whatColor() === 'red'? 'redLight light':'light'}`}>
           
                 <h1 className={`${whatColor() === 'red'? 'activeH1':'disabledH1'}`}>{18 - seconds}</h1> 

            </div>


            
        </div>
    )
}

export default Lights;