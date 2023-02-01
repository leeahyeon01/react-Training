//ref예제 
import React, { useState ,useRef } from "react";

const Ref = () => {
    //state의 변화-> 컴포넌트 렌더링 -> 컴포넌트 내부변수를 초기화
    const [count, setCount] =useState(0); 
    //Ref의 변화 -> no렌더링 -> 변수들의 값이 유지됨->불필요한 렌더링을 막을 수 있다.
    const countRef = useRef(0); 
 
    console.log(countRef);
    console.log("렌더링")

    const increaseCountState = () => {
        setCount(count + 1)
    }  

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('Ref:' , countRef.current)
 
    }

    return(
        <div>
            <p>state:{count}</p> 
            <p>ref: {countRef.current}</p>
            <button onClick={increaseCountState}> State +1</button>
            <button onClick = {increaseRef}>Ref +1</button>
        </div>
    );
    // Ref+1 버튼을 클릭했을때는 화면변화가 없다 => 렌더링이안되므로
    // state +1 버튼을 누르면 Ref+1에 쌓인 +1도 렌더링 되면서 화면에 출력된다
};

export default Ref;