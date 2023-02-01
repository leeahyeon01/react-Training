import React, {useState, useEffect} from "react"; 
 import Timer from "../component/Timer";


const EffextEx2 = () => { 
    const [showTimer,setShowTimer] =useState(false);
    return(
        <div> 
    {/* //showTimer가 true일 때 Timer를 실행하겠다. */}
     {showTimer && <Timer/>} 
        {/* //버튼클릭시 마다 true에서 false 로 왔다갔다한다. */}
            <button onClick={()=> setShowTimer(!showTimer)}>toggle timer</button>
        </div>
    )
} 

export default EffextEx2;