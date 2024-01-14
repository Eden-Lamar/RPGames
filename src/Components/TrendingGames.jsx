// import {useEffect} from 'react'

export default function TrendingGames({gameList}) {
	// useEffect(() => {
	// 	console.log(gameList)
		
	// }, []);
  return (
	<div className='mt-5 hidden md:block'>
		<h2 className='font-bold text-3xl dark:text-white'>Trending Games</h2>
		<div className='hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5'>
			{
				gameList.map((item, index) => index < 4 && (
					<div key={item.id} className="bg-[#76a8f75e] rounded-b-lg group hover:scale-105	 transition-all duration-300 ease-in-out cursor-pointer">
						<img src={item.background_image} alt="Trending Games Images" className='h-[270px] rounded-t-lg object-cover' />
						<h2 className='dark:text-white text-[20px] font-bold px-2'>{item.name}</h2>
					</div>
				))
			}

		</div>

	</div>
  )
}

TrendingGames.propTypes = false