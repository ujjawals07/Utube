import React, { useEffect } from "react";
import Nav from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchVideos } from "../Actions";
import { useSelector } from "react-redux";
import SearchScreen from "../components/SearchScreen";

const SearchResult = () => {
  const { q } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SearchVideos(q));
  }, [dispatch, q]);

  const SearchResults = useSelector((state) => state.search.items);

  return (
    <React.Fragment>
      <div className="section">
        <Nav />
        <div className="search-screen">
          <div className="search-screen-container">
            {SearchResults?.map((video) => {
        
              return <SearchScreen video={video} id={video.id.videoId} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SearchResult;
