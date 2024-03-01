import React, { useState, useEffect } from 'react'
import axios from 'helpers/axiosConfig';
import Loader from './loader';
import { useSelector } from 'react-redux'

interface Image {
  title: string;
  link: string;
  media: {
    m: string
  };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

const ImageGrid = (() => {
  const [images, setImages ] = useState<Image[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const search = useSelector((state: any) => state.demoState)
  const fetchImages = async ()=> {
    try{
      let APIurl = ``
      if(search.data){
        APIurl = `${process.env.REACT_APP_BASIC_URL}search?tags=` + search.data + `&page=1&per_page=${itemsPerPage}`
        setCurrentPage(1)
      } else {
        APIurl = `${process.env.REACT_APP_BASIC_URL}list?page=${currentPage}&per_page=${itemsPerPage}`
      }
      const response = await axios({
        method: "GET",
        url: APIurl
      })
      if(search.data) {
        console.log(response.data.data, "response.data.data")
        setImages(response.data.data);
      } else {
        setImages([...images, ...response.data.data]);
      }
    } catch(error){
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  }
  useEffect((()=> {
    setLoading(true);
    fetchImages()
  }), [currentPage, search.data])
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 100) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);
  return (
    <>
      <div className='d-flex flex-wrap justify-content-between'>
      {images.map((image: any, index: number) => {
        return (
          <div key={index} style={{ height: '200px' }} className='w-auto mt-2'>
            <img src={image.media.m} className="img-fluid" style={{ objectFit: 'cover', maxHeight: '100%', height: "100%" }} />
          </div>
        )
      })}
      </div>
      {loading && <Loader/>}
    </>
  )
})

export default ImageGrid