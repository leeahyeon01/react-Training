//useEffect 예제 
import React,{useState, useEffect} from "react"; 


const EffectEx = () => {
    const[count, setCount] = useState(0);
    const [name,setName] = useState("");
    
     const handleCountUpdate = () =>{
        setCount(count + 1);
     } 

     const hanldeInputChange = (e) => {
        setName(e.target.value)
     }

      
    // 컴포넌트가 렌더링 될 때 마다 매번 실행되는 형태 
    //버튼을 클릭하고,input에 글씨를 쓸때마다 렌더링된다
    //  useEffect(() => {
    //     console.log(" 컴포넌트가 렌더링될때마다 useEffect")
    //  }) 

     //버튼 클릭시에만 렌더링 되게 하고 싶을때 
     useEffect(() => {
        console.log("버튼 클릭시에만 useEffect 렌더링")
     },[count])
    return(
        <div>
        <button onClick={handleCountUpdate}>update</button>
        <span>count:{count}</span> 
        <input type="text" value={name} onChange={hanldeInputChange}></input>   
        <span>name: {name}</span>
        </div>
    )
}

export default EffectEx;