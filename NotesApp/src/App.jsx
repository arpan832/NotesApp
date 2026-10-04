import React, { useState } from 'react'

export default function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [task, setTask] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)
  const [test, setTest] = useState(false)

  const openTest = () => {
    setTest(true)
  };

  const closedTest = () => {
    setTest(false)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title.trim() && !text.trim()) return

    setTask((prev) => [...prev, { title: title.trim(), text: text.trim() }])
    setTitle('')
    setText('')
  }

  const updateTask = (index, field, value) => {
    setTask((prev) =>
      prev.map((item, i) => (
        i === index ? { ...item, [field]: value } : item
      ))
    )
  }

  return (
    <div className='h-screen flex lg:flex-row flex-col'>
      <form
        onSubmit={submitHandler}
        className='gap-4 flex lg:flex-row flex-col justify-center p-10 w-150 h-150 bg-cover bg-no-repeat bg-center flex-wrap shrink-0'
        style={{ backgroundImage: "url('https://png.pngtree.com/png-clipart/20240220/original/pngtree-old-royal-scroll-painting-art-damaged-photo-png-image_14370195.png')" }}
      >
        <input
          className='px-5 py-2 w-full underline decoration-amber-950 rounded font-serif font-bold leading-6.5 resize-none focus:outline-none outline-none translate-x-4 overflow-hidden'
          type='text'
          placeholder='Note title '
          id=''
          name='paglu'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className='px-5 py-2 h-80 w-full underline decoration-amber-950 bg-transparent font-serif leading-6.5 rounded resize-none focus:outline-none font-light outline-none translate-x-4'
          type='text'
          placeholder='Your notes here'
          id=''
          name='paglu'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className='w-full py-2 mt-2 cursor-pointer hover:underline decoration-amber-950'>Add Note</button>
      </form>

      <div className='flex flex-row overflow-auto rounded-lg flex-wrap gap-2'>
        {/* {function text(item,index){ */}
        <button
          className='h-32 w-32 shrink-0 focus:outline-none'
          onClick={openTest}
        >
          <img
            src='https://i.pinimg.com/736x/44/74/2c/44742cf57b06534c337e8a0b0fb78454.jpg'
            alt='closed scroll thumbnail'
            className='w-full h-full object-contain cursor-pointer rotate-90'
          />
        </button>
      </div>
      
      {test && (  // test scroll 
        <div
          className='gap-4 flex lg:flex-row flex-col justify-center p-10 w-150 h-150 bg-cover bg-no-repeat bg-center flex-wrap shrink-0 relative'
          style={{ backgroundImage: "url('https://png.pngtree.com/png-clipart/20240220/original/pngtree-old-royal-scroll-painting-art-damaged-photo-png-image_14370195.png')" }}
        >
          <button
            className='absolute top-4 right-4 font-bold text-amber-950'
            onClick={closedTest}
          >
            ✕
          </button>

          <input
            className='px-5 py-2 w-full underline decoration-amber-950 rounded font-serif font-bold leading-6.5 focus:outline-none translate-x-4 overflow-hidden'
            type='text'
            placeholder='Note title'
            name='paglu'
            value={"WELCOME--" }
          />

          <textarea
            className='px-5 py-2 h-80 w-full underline decoration-amber-950 bg-transparent font-serif leading-6.5 rounded resize-none focus:outline-none font-light translate-x-4'
            placeholder='Your notes here'
            name='paglu'
            value={"Hi welcome to my notesApp this is made using react js + Tailwind manually this is the (v-1) i will make it better overtime :) by-@ari001 ( thanks for reading ) 10/4/26"}
          />
        </div>
      )}
      
      <div className='flex flex-col gap-6 p-4'>
        <div className='flex flex-row overflow-auto rounded-lg flex-wrap gap-2'>
          {task.map((item, index) => (
            <button
              key={index}
              className='h-32 w-32 shrink-0 focus:outline-none'
              onClick={() => setActiveIndex(index)}
            >
              <img
                src='https://i.pinimg.com/736x/ed/8d/5b/ed8d5b13a1f84bc6c0951d4ed506d002.jpg'
                alt='closed scroll thumbnail'
                className='w-full h-full object-contain cursor-pointer'
              />
            </button>
          ))}
        </div>

        {activeIndex !== null && task[activeIndex] && (
          <div
            className='gap-4 flex lg:flex-row flex-col justify-center p-10 w-150 h-150 bg-cover bg-no-repeat bg-center flex-wrap shrink-0 relative'
            style={{ backgroundImage: "url('https://png.pngtree.com/png-clipart/20240220/original/pngtree-old-royal-scroll-painting-art-damaged-photo-png-image_14370195.png')" }}
          >
            <button
              className='absolute top-4 right-4 font-bold text-amber-950'
              onClick={() => setActiveIndex(null)}
            >
              ✕
            </button>

            <input
              className='px-5 py-2 w-full underline decoration-amber-950 rounded font-serif font-bold leading-6.5 focus:outline-none translate-x-4 overflow-hidden'
              type='text'
              placeholder='Note title'
              name='paglu'
              value={task[activeIndex].title}
              onChange={(e) => updateTask(activeIndex, 'title', e.target.value)}
            />

            <textarea
              className='px-5 py-2 h-80 w-full underline decoration-amber-950 bg-transparent font-serif leading-6.5 rounded resize-none focus:outline-none font-light translate-x-4'
              placeholder='Your notes here'
              name='paglu'
              value={task[activeIndex].text}
              onChange={(e) => updateTask(activeIndex, 'text', e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
