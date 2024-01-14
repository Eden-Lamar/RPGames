// import { useEffect } from 'react'

function Banner({gameList}) {
	// useEffect(() => {
	// 	console.log(gameList)
		
	// }, []);
  return (
	<div className='relative'>
		<div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
			<h2 className='text-[24px] dark:text-white font-bold'>{gameList.name}</h2>
			<button className='bg-blue-700 text-white px-2 p-1 rounded-lg'>Get Now</button>
		</div>
		<img src={gameList.background_image} alt="Banner image" className='md:h-[320px] w-full object-cover rounded-2xl' />
	</div>
  )
}

export default Banner

Banner.propTypes = false