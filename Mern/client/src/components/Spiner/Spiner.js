import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
const Spiner = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-align-items-center' style={{
        width: "100%", heigth: "50vh"
      }}>
        <Spinner animation="border" variant="danger" />&nbsp; Loading...

      </div>
    </>
  )
}

export default Spiner