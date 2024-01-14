import {useEffect, useState} from 'react'
import GlobalApi from "../Services/GlobalApi"

export default function GeneralList({genreId, selectedGenresName, hidden}) {

	const [genreList, setGenreList] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	// const [hide, setHide] = useState('');

	useEffect(() => {
		getAllGenres()
	}, []);
	
	
	const getAllGenres = async()=> {
		try {
			const response = await GlobalApi.getGenreList
			// console.log(response.data.results)
			setGenreList(response.data.results)
		} catch (error) {
			console.error('Error fetching data:', error.message);
		}

	}

  return (
	<div className={"px-6"}>
		<h2 className='text-3xl font-bold dark:text-white'>Genre</h2>
		{
			genreList.map((item, index) => (
				<div 
				onClick={()=>{setActiveIndex(index); genreId(item.id); selectedGenresName(item.name); hidden("hidden")}}
				className={`flex gap-2 items-center my-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${activeIndex == index ? 'bg-gray-300 dark:bg-gray-600' : null}`} key={item.id}>
					<img src={item.image_background} alt="genera list image" className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ? "scale-105" : null}`} />
			
					<h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex == index ? "font-bold" : null}`}>{item.name}</h3>
				</div>
			))
		}
	</div>
  )
}

GeneralList.propTypes= false