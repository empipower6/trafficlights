import React,{useRef,useEffect} from 'react'

const Lights = ({seconds,whatColor}) => {


    const focusDiv = useRef(null);

    useEffect(()=>{

        focusDiv.current.focus();
    },[])


    return (

        <div className="lights" ref={focusDiv}>

            {/* Green Light */}
            <div className={`${whatColor() === 'green'? 'greenLight light':'light'}`}>

                <h1 className={`${whatColor() === 'green'? 'activeH1':'disabledH1'}`}>{9 - seconds}</h1> 

            </div>

            {/* Yellow Light */}
            <div className={`${whatColor() === 'yellow'? 'yellowLight light':'light'}`}> </div>

            {/* Red Light */}

            <div className={`${whatColor() === 'red'? 'redLight light':'light'}`}>
           
                 <h1 className={`${whatColor() === 'red'? 'activeH1':'disabledH1'}`}>{19 - seconds}</h1> 

            </div>


            
        </div>
    )
}

export default Lights;