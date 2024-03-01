import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import { fetchImages, clearImages } from "../../reduxstore/slices/imagesSlice";
import FormComponent from "./FormComponent";
import ImageGrid from "./ImageGrid";
import Loader from "./Loader";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const Home: React.FC = () => {
  const [tags, setTags] = useState("");
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.images.images);
  const loading = useAppSelector((state) => state.images.status) === "loading";
  const idle = useAppSelector((state) => state.images.status) === "idle";
  const [page, setPage] = useState(1);

  const loader = useInfiniteScroll(() => {
    setPage((prevPage) => prevPage + 1);
  }, loading);

  useEffect(() => {
    if (idle && !loading) {
      dispatch(fetchImages({ tags, page }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchImages({ tags, page }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  useEffect(() => {
    if (tags === "" && !loading && !idle) {
      dispatch(clearImages());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, tags]);

  const handleSearch = (newTags: string) => {
    setTags(newTags);
    dispatch(clearImages());
    setPage(1);
    dispatch(fetchImages({ tags: newTags, page: 1 }));
  };

  return (
    <>
      <FormComponent onSearch={handleSearch} />

      <ImageGrid images={images} />

      <div className="pb-4 pt-4">
        {loading && <Loader />}
        {!idle && !loading && <div ref={loader} />}
      </div>
    </>
  );
};

export default Home;
