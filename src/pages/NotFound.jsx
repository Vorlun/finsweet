import React from 'react'
import error from "../assets/error.webp"

const NotFound = () => {
  return (
    <>
      <section className='py-40 flex justify-center'>
        <img src={error} alt="" />
      </section>
    </>
  )
}

export default NotFound