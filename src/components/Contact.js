import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/ff01b5ad-4d0e-460f-9d47-d271da7f5fb7' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C1FF72] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <a className='hover:text-[#C1FF72]' href='mailto:jessica.sunmee.hong@gmail.com' target='_blank'>jessica.sunmee.hong@gmail.com</a></p>
            </div>
            <input className='my-2 p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
            <input className='my-2 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='my-2 p-2 bg-[#ccd6f6]' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#C1FF72] hover:border-[#C1FF72] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact