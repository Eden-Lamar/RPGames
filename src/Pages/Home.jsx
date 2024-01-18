import {useEffect, useState} from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import GeneralList from "../Components/GeneralList"
import GlobalApi from "../Services/GlobalApi"
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesByGeneresId from '../Components/GamesByGeneresId';

function Home() {
  const [gameList, setGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  const [hidden, setHidden] = useState("hidden");


  useEffect(() => {
    getAllGamesList(),
    getGameListbyGenresIdFn(4)
    
  }, []);


  const getAllGamesList = async ()=> {
    try {
      const res = await GlobalApi.getGameList
      // console.log(res.data.results)
      setGameList(res.data.results)
      
    } catch (error) {
      console.log('Error fetching data:', error.message)
    }
  }
  
  const getGameListbyGenresIdFn= async (id)=>{
    // console.log("GENERES", id)
    const res = await GlobalApi.getGameListByGenreId(id)
    setGameListByGenres(res.data.results)
    // console.log("Game List by genera ID",res.data.results)
  }

  const hideSidebar = ()=>{
    if (hidden=== "hidden") {
      return setHidden("")
    }

    setHidden("hidden")
  }

  return (
    <div>
      {/* burger menu visible on mobile view only */}
      <div className="md:hidden cursor-pointer flex " onClick={hideSidebar} >
        {
          hidden=== "hidden" ? <HiMenuAlt2 className='text-4xl  dark:text-gray-400'  />
          :
          <MdCancel className='text-4xl  dark:text-gray-400 my-0 mx-auto' />
        }

      </div>

      <div className="grid grid-cols-4 px-8">

          <div className={`absolute md:static dark:bg-zinc-900 bg-white z-10 ${hidden} md:block h-screen overflow-y-auto`}>
            <GeneralList genreId={(genreId)=> getGameListbyGenresIdFn(genreId)} selectedGenresName={name=> setSelectedGenresName(name)} hidden={name => setHidden(name)}/>
          </div>


        <div className="col-span-4 md:col-span-3 relative md:static">
          {gameList.length >0 && gameListByGenres.length > 0 ? 
            <>
              <Banner gameList={gameList[Math.floor(Math.random() * gameList.length)]}/>
              <TrendingGames gameList={gameList}/>
              <GamesByGeneresId gameListByGenres={gameListByGenres} selectedGenresName={selectedGenresName}/>
            </>
            : null
          }
        </div>

      </div>

    </div>
  )
}

export default Home