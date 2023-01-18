import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions]= useState([])

  const url1="http://localhost:3000/questions"

  useEffect(()=>{
    fetch(url1)
    .then(r => r.json())
    .then(data =>{
      console.log(data)
      return setQuestions(data)
      // data.map((question)=>{
      //   return setQuestions(question)

      // })
    })
  
  
  },[])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestions={setQuestions}/> : <QuestionList questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
