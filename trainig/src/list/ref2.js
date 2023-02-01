//변수와 stata,ref의 차이 - 변수는 리렌더링 될때 초기화되버린다
import React, { useRef, useState } from "react"; 

const Var = () => {
    const [render,setRender] =useState(0);
    const countRef = useRef(0); 
    const countVar =0;  

    const Rendering = () => {
        setRender(render + 1);
    }

    const increaseRef = () =>{
        countRef.current = countRef.current +1;
        console.log('ref:', countRef.current)
    }

    const increasevar = ()=>{
        countVar = countVar +1
        console.log('var:',countVar)
    }

    return(
        <div>
         <p>Ref: {countRef.current}</p> 
         <p>Var: {countVar}</p> 
         <button onClick ={increaseRef}>Ref +1</button>
         <button onClick ={increasevar}>Ref +1</button>
         <button onClick ={Rendering}> state 렌더링</button>
        </div>
    ) 

    // 변수와 ref 둘다 자체적인 렌더링을 못하기때문에
    //버튼을 아무리 클릭해도 화면의 변화가 없다
    //그래서 state 렌더링 버튼을 만들어 클릭하면 
    //변수는 리렌더링 될때 초기화되버림으로 다시 0이 되버리고
    //ref 값만 올라간다
}

export default Var;