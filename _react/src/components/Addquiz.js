import {useContext, useState} from 'react'
import { QuestionContext } from '../context/QuestionContext'

function Addquiz() {
    const [description, setDescription] =useState("") 
    const [title, setTitle] = useState("")
 

    const {addQuestion} = useContext(QuestionContext)

   
    const handleSubmit = (e)=>{
      e.preventDefault()
        // send Data to rails
        addQuestion(title, description)

    }

  return (
    <div className='flex bg-gray-400 justify-center min-h-[80vh]'>
       <div className={` rounded-lg p-5`}>
          <h1 className='text-center my-3'>Add question</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setTitle(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter title ' /><br/>
            <textarea type="text" onChange={e => setDescription(e.target.value)} className='rounded mt-4 px-3 py-1' placeholder='Enter descr ' /><br/>
            <div className='flex justify-center'>
                <button disabled={!title || !description} className='px-3 py-1 bg-red-600 rounded-full mt-4 text-white '>Submit</button>
            </div>
          </form>

        </div> 
    </div>
  )
}

export default Addquiz