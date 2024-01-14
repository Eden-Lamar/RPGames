// import {useEffect} from 'react'

export default function GamesByGeneresId({gameListByGenres, selectedGenresName}) {
	// useEffect(() => {
	// 	console.log(gameListByGenres)
	// }, []);
  return (
	<>
		<div>
			<h2 className='font-bold text-3xl dark:text-white mt-5'>{selectedGenresName} Games</h2>
		</div>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
			{
				gameListByGenres.map(item=> (
					<div key={item.id} className='bg-[#76a8f75e]  p-3 rounded-lg pb-12 h-full hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out'>
						<img src={item.background_image} alt="popular games" className='w-full h-[80%] rounded-xl object-cover'/>
						<h2 className='text-xl dark:text-white font-bold'>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
						<h2 className='text-gray-500 dark:text-gray-200'>⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}</h2>
					</div>
				))
			}
		</div>
	
	</>
  )
}

GamesByGeneresId.propTypes= false