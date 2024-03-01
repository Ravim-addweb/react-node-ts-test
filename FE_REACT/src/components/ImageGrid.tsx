import React, { useState, useEffect } from 'react'
import axios from "axios"

const ImageGrid = (() => {
  const [images, setImages ] = useState([])
  useEffect((()=> {
  }), [])
  const fetchImages = async ()=> {
    const response = await axios({
      method: "get",
      url: "apiUrl",
      // data: "requestData",
      // headers: "headers"
    })
  }
  return (
    <>
      {images.map((image) => {
        return image
      })}
    </>
  )
})

export default ImageGrid