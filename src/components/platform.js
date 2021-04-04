import React,{useState,useEffect} from 'react'
import Lights from './lights'


const Platform = () => {

    //state to store the seconds
    const [time, setTime] = useState(0);

    useEffect(()=>{
        
        //call timer() function every second
        setTimeout(()=>{ timer() }, 1000);
        
    })

    const timer = () =>{

        //increase the time state by one every second, if 20, go back to 0.
        time === 20 ? setTime(0):setTime(time+1);
        

    }

    //function to determine which color should be displayed depending on time
    const activeColor = () =>{

        //first 9 seconds is green
        if(time < 9 ){return 'green'}

        //then 2 seconds of yellow
        else if(time >=9 && time<=10){return 'yellow'}

        //then 9 seconds of green
        else if(time> 10 && time <19){return 'red'}

        //then another 2 seconds of yellow before it turns into green
        else if(time>= 19 && time <= 20){return 'yellow'}
        else { return false}
        
    }
    return (
        <div className={`platform platform-${activeColor()}`}>
            <Lights seconds={time} whatColor={activeColor} />
            <h1>The color is {activeColor()}.</h1>
        </div>
    )
}

export default Platform