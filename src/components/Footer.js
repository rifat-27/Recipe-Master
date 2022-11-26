import React from 'react'

const Footer = () => {
  return (
    <div class='grid grid-cols-1 px-2 py-5 lg:grid-cols-2 bg-blue-400'>
      <div className='m-2'>
        <h1 className='font-bold'>About</h1>
        <p>
          A meal recipe app using react and MealDb API
        </p>
      </div>
    </div>
  )
}

export default Footer
