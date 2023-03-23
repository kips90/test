import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => 
{
  const navigate = useNavigate();
  const [questions, setQuestions] = useState("")
  
  
  // USER REGISTRATION
  const addQuestion = (title,description) => {
    fetch("/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
       })
    })
    .then(res => res.json())
    .then(response => {
        console.log(response)
        if (response.success) {
        console.log("Success")
        }
        else if(response.errors ){
        console.log("Error")
        } 
        else {
        console.log("Something went wrong!");
        }
    })
  };


   //   GET Questions
   useEffect(()=>{
    fetch("/question")
    .then(res=>res.json())
    .then((res)=>{
	
          setQuestions(res)
      
	})
    },[])

// CONTEXT DATA
  const contextData = 
  {
    questions,
    addQuestion,
    
  };

 
  return (
    <>
    <QuestionContext.Provider value={contextData}>
      {children}
    </QuestionContext.Provider>   
    </>
  );

};





