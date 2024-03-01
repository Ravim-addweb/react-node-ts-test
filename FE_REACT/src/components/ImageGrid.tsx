import React, { useState, useEffect } from "react";
import axios from "helpers/axiosConfig";
import Loader from "./loader";
import { useSelector, useDispatch } from "react-redux";
import { searchStatus } from "reduxstore/slices/searchSlice";
import { IReduxState } from "reduxstore/store";

interface Image {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

const ImageGrid = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const itemsPerPage = 20;
  const search = useSelector((state: IReduxState) => state.searchState);

  const fetchImages = async () => {
    try {
      let APIurl = ``;
      if (search.data) {
        if (search.searched === true) {
          dispatch(searchStatus());
          setImages([]);
          setCurrentPage(1);
        }
        APIurl =
          `${process.env.REACT_APP_API_URL}search?tags=` +
          search.data +
          `&page=${currentPage}&per_page=${itemsPerPage}`;
      } else {
        APIurl = `${process.env.REACT_APP_API_URL}list?page=${currentPage}&per_page=${itemsPerPage}`;
      }
      const response = await axios({
        method: "GET",
        url: APIurl,
      });
      if (search.data) {
        setImages(response.data.data);
      } else {
        setImages([...images, ...response.data.data]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, search.data]);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= documentHeight - 100) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between">
        {images.map((image, index: number) => {
          return (
            <div
              key={index}
              style={{ height: "200px" }}
              className="w-auto mt-2"
            >
              <img
                src={image.media.m}
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  maxHeight: "100%",
                  height: "100%",
                }}
              />
            </div>
          );
        })}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default ImageGrid;
