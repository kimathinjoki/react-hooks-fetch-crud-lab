import { useEffect, useState } from "react";
import React from "react";
import QuestionItem from "./QuestionItem"




const url1="http://localhost:3000/questions"


function QuestionList({questions, setQuestions}) {


  // const [questions,setQuestions]= useState([])



//  useEffect(()=>{
//     fetch(url1)
//     .then(r => r.json())
//     .then(data =>{
//       console.log(data)
//       setQuestions(()=>data)
//       // data.map((question)=>{
//       //   return setQuestions(question)

//       // })
//     })
  
  
//   },[]) 

  function questionDelete(id){
    fetch(`${url1}${id}`,{
      method: "DELETE",
    })
    .then(r=> r.json())
    .then((data)=>{
      const qnUpdate = questions.filter((qn)=>qn.id !== id)
      setQuestions(()=>qnUpdate)
    })

  }

  function qnUpdate(id,correctIndex){
    fetch(`${url1}${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/",
      },
      body: JSON.stringify({correctIndex})
    })
    .then(r=>r.json())
    .then((data)=>{ 
      console.log(data)
      const updatedQn = questions.map((question)=>{
        if(question.id === id) return {...question, correctIndex};
        return question;
      });
      setQuestions(updatedQn)

    })
  }



  // id={question.id} prompt={question.prompt} answers={question.answerrs} correctIndex={question.correctIndex}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {questions.map((question)=><QuestionItem question={question} questionDelete={questionDelete} qnUpdate={qnUpdate}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
