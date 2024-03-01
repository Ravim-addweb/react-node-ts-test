import React from 'react'

function Loader() {
  return (
    <div>
        <div className='mt-5 mb-5 justify-content-center d-flex'>
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}

export default Loader
