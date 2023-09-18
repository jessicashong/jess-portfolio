import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#e2f0f9] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/ff01b5ad-4d0e-460f-9d47-d271da7f5fb7'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#df4c73] text-[#24305e]'>
            Contact
          </p>
          <p className='text-[#24305e] py-4'>
            // Submit the form below or shoot me an email -{' '}
            <a
              className='hover:text-[#C1FF72]'
              href='mailto:jessica.sunmee.hong@gmail.com'
              target='_blank'
            >
              jessica.sunmee.hong@gmail.com
            </a>
          </p>
        </div>
        <input
          className='my-2 p-2 bg-white'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-2 p-2 bg-white'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='my-2 p-2 bg-white'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-[#374785] border-[#374785] border-2 hover:bg-[#df4c73] hover:border-white hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
