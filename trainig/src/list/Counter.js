import React, { Component } from "react";

class Counter extends Component { 
//state 정의 방법1 
 state = {
    number:0
 }

//state 정의 방법2 (생성자함수)
//   constructor(props){
//     super(props); 

//     this.state = {
//         number:0
//     }
//   } 

  render(){
    const{number} =this.state; // state조회를 할때는 this.state로함
    return(
        <> 
        <h1>안녕하세용

        </h1>
         <h1>{number}</h1> 
        <button 
      
        onClick= {()=>{
        //방법1 -객체를 통체로 만듬
            // this.setState({number: number +1}) 

        //방법2  - 앞에값을 사용해서
        //     this.setState(prevState =>{ 
        //         return{
        //             number: prevState.number +1
        //         }     
        //     })
        // }} 

        //방법 2-2 바로 객체를 반환
        this.setState(prevState => ({
            number:prevState.number +1
        }))
    }}
        >+1</button>
        
        </>
       
    )
  }
}


export default Counter;