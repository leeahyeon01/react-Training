import React, {useEffect} from "react";

const Timer =(props)=>{
    //첫실행때만 실행 하게금
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아가는중 ...")
        },1000)
     
    //💥return으로 종료를 시켜줘야한다
        return()=> {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다")
        }
    },[]); 

    return(
        <div>
            <span>타이머를 시작합니다, 콘솔을 보세요!</span>
        </div>
    )
} 

export default Timer;