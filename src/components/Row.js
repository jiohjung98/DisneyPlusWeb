import React, { useCallback, useEffect, useState } from 'react'
import axios from '../api/axios'
import "./Row.css";
import MovieModal from './MovieModal';
 
 const Row = ({title, id, fetchUrl}) => {

  // 여러 개의 영화 정보가 들어갈 것이므로 객체가 아닌 배열로 넣어줌
  const [movies, setMovies] = useState([]);

  // 영화 모달창
  const [modalOpen, setModalOpen] = useState(false);

  // 클릭한 영화 정보 가져오기
  const [movieSelected, setMovieSelection] = useState({});

  // 컴포넌트가 랜더링되면 함수도 새로 생성됨. 이부분을 막기위해 useCallback 사용(함수를 메모이제이션해줌
  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    // console.log('response', response);
    setMovies(response.data.results);
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelection(movie);
  }

   return (
     <div>
       <h2>{title}</h2>
       <div className="slider">
        <div className="slider__arrow-left">
          <span
            className='arrow'
            onClick={()=> {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
            >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map(movie => (
             <img
             key={movie.id}
             className='row__poster'
             src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
             alt={movie.name}  
             onClick={() => handleClick(movie)}     
           />
          ))}
        </div>
          <div className="slider__arrow-right">
            <span 
              className="arrow"
              onClick={()=> {
                document.getElementById(id).scrollLeft += window.innerWidth - 80;
              }}
            >
              {">"}
            </span>
          </div>
       </div>

       {modalOpen &&
        <MovieModal
          {...movieSelected}
          setModalOpen={setModalOpen}
        />
        }  
     </div>
   )
 }
 
 export default Row
 