import React, { useState } from 'react'

export default function App() {
  const [title, settitle] = useState('')
  const [text, settext] = useState('')
  const [task, settask] = useState([])
  const SubmitHandler = (e) => {
    const newTask = [...task]

    newTask.push({ title, text })
    settask(newTask)


    e.preventDefault()
    console.log({ title, text })
    settitle('')
    settext('')
  }
  return (
    <div className='h-screen flex lg:flex-row flex-col '>
      <form onSubmit={(e) => {
        SubmitHandler(e)
      }}
        className=' gap-4  flex lg:flex-row flex-col justify-center p-10 w-150 h-150 bg-cover bg-no-repeat bg-center flex-wrap  '
        style={{ backgroundImage: "url('https://png.pngtree.com/png-clipart/20240220/original/pngtree-old-royal-scroll-painting-art-damaged-photo-png-image_14370195.png') " }}>

        <input
          className='px-5 py-2 w-5/5 underline decoration-amber-950 rounded font-serif font-bold leading-6.5 resize-none focus:outline-none outline-none translate-x-4 overflow-hidden'
          type='text'
          placeholder='Note title '
          id=''
          name='paglu'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <textarea
          className='px-5 py-2 h-80 w-5/5 underline decoration-amber-950 bg-transparent  font-serif leading-6.5  rounded resize-none focus:outline-none font-light outline-none translate-x-4 '
          type='text'
          placeholder='Your notes here'
          id=''
          name='paglu'
          value={text}
          onChange={(e) => {
            settext(e.target.value)
          }} />

        <button className='w-5/5   py-2 mt-2 cursor-pointer hover:underline decoration-amber-950'>Add Note</button>
      </form>

        {task.map(function () {
          return
          < div  className='h-32 w-32 group relative overflow-hidden rounded-lg '>
            <img
              src='https://i.pinimg.com/736x/ed/8d/5b/ed8d5b13a1f84bc6c0951d4ed506d002.jpg'
              alt='my picture'
              className='w-full h-full   group-hover:hidden'></img>

            <img
              src='https://i.pinimg.com/736x/94/47/5c/94475c21def2961005d759637d5ca7d5.jpg'
              alt='my picture'
              className='w-full h-full  group-hover:block'></img>
          </div>



        })}


      </div>


  

  )
}
