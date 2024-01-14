import axios from "axios";

const key= "98f5fcb42c79454593783b5f5a681d11"
const axiosCreate =  axios.create({
	baseURL: "https://api.rawg.io/api"
}) 

const getGenreList = axiosCreate.get(`/genres?key=${key}`)
const getGameList = axiosCreate.get(`/games?key=${key}`)
const getGameListByGenreId = (id)=> axiosCreate.get(`/games?key=${key}&genres=${id}`)

export default {
	getGenreList,  
	getGameList,
	getGameListByGenreId
}