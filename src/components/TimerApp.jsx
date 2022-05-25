import React, { useState } from 'react';
import Timer from './Timer';

const TimerApp = () => {
    const [start,setstart]=useState(null);
    const [end,setend]=useState(null);
    const[timer,settimer]=useState(false);
    let starthandler=(e)=>{
        settimer(false);
         setstart(Number(e.target.value));
         
    }
    let endhandler=(e)=>{
        settimer(false);
        setend(Number(e.target.value));
    }
   let starttimer=()=>{
       if(start!=null&&end!=null){
        settimer(true);
       }

   }
    
    return (
        <>
        <h1>Timer</h1>
        <div><label >Start:</label>
            <select onChange={starthandler}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={5}>5</option>
            </select>
            
            <label >  End:</label>
            <select onChange={endhandler}>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            </select>
            
            </div>
          {timer?<Timer starttime={start} endtime={end}/>:'' } 
          <button onClick={starttimer}>Start</button>
        </>
    );
};

export default TimerApp;