import  { useEffect, useState } from 'react'

function loadTasks(){ // created a loader function to call for savedData 
  try {
    const SavedData = localStorage.getItem('task') //finding task key 
    const ParsedData = SavedData ? JSON.parse(SavedData) : [] // converted the string into an Array 
    return Array.isArray(ParsedData) ? ParsedData : [] // looking if everyhings All right 

  } catch{
    return []
  }
}
export default function App() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [task, setTask] = useState(loadTasks)
  const [activeIndex, setActiveIndex] = useState(null)
  const [test, setTest] = useState(false)
  const [ChangeImage, setChangeImage] = useState(0)


  const imagePool = [
    "https://i.pinimg.com/736x/47/d9/02/47d90269aae367a7d9deb9be7ebdb7a1.jpg",
    'https://i.pinimg.com/736x/ed/8d/5b/ed8d5b13a1f84bc6c0951d4ed506d002.jpg',
    'https://i.pinimg.com/736x/44/74/2c/44742cf57b06534c337e8a0b0fb78454.jpg',
    "https://i.pinimg.com/736x/f8/93/cb/f893cb2962a5ec989290081903561047.jpg",
    "https://i.pinimg.com/736x/82/1c/2f/821c2fedc33a3a3073a3eb5ed3c5e093.jpg",
    "https://i.pinimg.com/736x/65/e6/e9/65e6e9def9dc7caafe5994844935dde1.jpg",
    "https://i.pinimg.com/1200x/a5/dd/42/a5dd4221b815155a2ba8a8057c2b9cd3.jpg",
    "https://i.pinimg.com/1200x/a2/d7/6e/a2d76e912a8305a5dd352e2d7e7a8721.jpg",
  ]



  const imageIndex = Math.floor(ChangeImage / 3) % imagePool.length

 useEffect(() => {
    localStorage.setItem('task',JSON.stringify(task))
 
 }, [task])



  const openTest = () => {
    setTest(true)
  }

  const closedTest = () => {
    setTest(false)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title.trim() && !text.trim()) return

    setTask((prev) => [...prev, { title: title.trim(), text: text.trim() }])
    setTitle('')
    setText('')
    setChangeImage((prev) => prev + 1) // index image logic 
    
     if ((ChangeImage+1)%3 === 0 ){
      alert("yo!! you just unlocked a new scroll ")
     }                           
  }

  const updateTask = (index, field, value) => {
    setTask((prev) =>
      prev.map((item, i) => (
        i === index ? { ...item, [field]: value } : item
      ))
    )
  }
  
  const DeleteNote = (activeIndex) => {
    const CopyTask = [...task]
    CopyTask.splice(activeIndex,1)
    setTask(CopyTask)

  }

  return (
    <div className='bg-[url("https://i.pinimg.com/1200x/ff/04/fa/ff04fa1eb174905452d866e9be19fcd5.jpg")] bg-cover '>
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

          <button
            type='submit'
            className='w-full py-2 mt-2 cursor-pointer hover:underline decoration-amber-950'
          >
            Add Note
          </button>


        </form>

        <div className='flex flex-row overflow-auto rounded-lg flex-wrap gap-2 shrink-0'>
          {/* {function text(item,index){ */}
          <button
            className='h-32 w-32 shrink-0 focus:outline-none'
            onClick={openTest}
          >
            <img
              src="https://i.pinimg.com/736x/44/74/2c/44742cf57b06534c337e8a0b0fb78454.jpg"
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
              className='absolute top-4 right-4 font-bold text-white '
              onClick={closedTest}
            >
              ✕
            </button>

            <input
              className='px-5 py-2 w-full underline decoration-amber-950 rounded font-serif font-bold leading-6.5 focus:outline-none translate-x-4 overflow-hidden'
              type='text'
              placeholder='Note title'
              name='paglu'
              value={"WELCOME--"}
            />

            <textarea
              className='px-5 py-2 h-80 w-full underline decoration-amber-950 bg-transparent font-serif leading-6.5 rounded resize-none focus:outline-none font-light translate-x-4'
              placeholder='Your notes here'
              name='paglu'
              value={"Hi welcome to my 'PATRA' my notesApp this is made using react js + Tailwind manually this is the (v-2) i will make it better overtime :) by-@ari001 ( thanks for reading ) 10/4/26"}

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
                  src={imagePool[imageIndex]}
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
                className='absolute top-4 right-4 font-bold text-white'
                onClick={() => setActiveIndex(null)}
              >
                ✕
              </button>

              <input
                className='px-5 py-2 w-full underline decoration-amber-950 rounded font-serif font-bold leading-6.5 focus:outline-none translate-x-4 overflow-hidden shrink-0'
                type='text'
                placeholder='Note title'
                name='paglu'
                value={task[activeIndex].title}
                onChange={(e) => updateTask(activeIndex, 'title', e.target.value)}
              />

              <textarea
                className='px-5 py-2 h-80 w-full underline decoration-amber-950 bg-transparent font-serif leading-6.5 rounded resize-none focus:outline-none font-light translate-x-4 shrink-0'
                placeholder='Your notes here'
                name='paglu'
                value={task[activeIndex].text}
                onChange={(e) => updateTask(activeIndex, 'text', e.target.value)}
              />
              <button
                onClick={() => {
                  DeleteNote(activeIndex)
                }}
                className='underline decoration-amber-950 w-50 font-serif rounded-2xl cursor-grab '
              >
                Demolish
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

