import React, {useState, useEffect} from "react";
import StoryCard from "./storyCard";
import BtnAllStories from "./buttons/BtnAllStories";
import BtnGenre from "./buttons/BtnGenre";

import "./index.css";


const StoryBody = () =>{
	const genreList = [
		"Horror",
		"Comedy",
		"Slice of Life",
		"Drama"
	]

	const [allStories, setAllStories] = useState(false)
	const [filterStories, setFilterStories] = useState("")
	const [genres, setgenres] = useState(false)
	const [stories, setStories] = useState([])
	const [users, setUsers] = useState([])
	const [curGenre, setCurGenre] = useState("")

	useEffect(() => {
		const getStories = async () => {
			const storiesResponse = await fetch("http://localhost:3000/stories");
			const userResponse = await fetch("http://localhost:3000/users");
			const stories = await storiesResponse.json();
			const users = await userResponse.json();
			setStories(stories);
			setUsers(users);
		}

		getStories();
	}, []);

	return (
		<div className="StoryBody container-fluid px-5">
{/*			<BtnAllStories btnName={"Get All Stories"} btnCriteria={""} allstories={() => setAllStories(!allStories)}/>*/}
			<BtnAllStories btnName={"Get All Stories"} allstories={() => setAllStories(true) }/>
			<BtnAllStories btnName={"Genres"} allstories={() => setgenres(!genres)}/>
			{genres && genreList.map((gl)=>{
				return (<BtnGenre name={gl} criteria={gl} allstories={()=>setAllStories(false)} filterStories={
					() => {
						setCurGenre(gl)
						setFilterStories(gl)}} />)
			})}

				
			<BtnAllStories btnName ={"My Stories"} allstories={() => setAllStories(!allStories) }/>



			{allStories && stories.map((s)=>{
						return 	(	
							<StoryCard 	name={s.name}  
										image={s.storyImage} 
										author={
							              	users.find((u) => {
							                	return s.userId == u.id;
							              }).userName
							            } 
							            genre={s.genre}
									/>	
								)
						})}
			{filterStories && stories.map((s)=>{ 

				if (s.genre === curGenre)
						{return 	(<StoryCard 	
										name={s.name}  
										image={s.storyImage} 
										author={
										users.find((u) => {
											return s.userId == u.id;
											}).userName
										} 
										genre={s.genre}/>	
									)}
						})
					


		}
		</div>
	)
}


export default StoryBody