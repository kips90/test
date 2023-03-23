import React, { useContext } from 'react'
import { QuestionContext } from '../context/QuestionContext'
import Addquiz from './Addquiz'
import Footer from './layout/Footer'

function Questions() 
{

  const {questions} = useContext(QuestionContext)
  console.log(questions)

  return (
    <div>
        <div className='min-h-[70vh] bg-gray-100 rounded container mx-auto p-4'>
            <h1>Questions {questions && questions.length}</h1>

            <div class="grid grid-cols-3 gap-4">
              <div className='col-span-2'>
                {/* display quizez */}
                {
                  questions && questions.map((question)=>(
                    <div className='border p-4 my-5 bg-white rounded-lg'>
                        <h1>{question.title}</h1>
                        <p>{question.description}</p>
                        <p>{question.user.username}</p>
                    </div>
                  ))
                }
              </div>
              <div>
                <Addquiz />
              </div>
            </div>

            

        </div>
        <Footer/>
    </div>
  )
}

export default Questions