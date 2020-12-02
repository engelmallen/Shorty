import React, {useState, useEffect} from "react";
import StoryCard from "./storyCard";
import BtnAllStories from "./buttons/BtnAllStories";
import BtnGenre from "./buttons/BtnGenre";

import "./index.css";


const StoryBody = () =>{


	const [allStories, setallStories] = useState(false)
	const [genres, setGenres] = useState(false)
	const [stories, setStories] = useState([])
	const [users, setUsers] = useState([])

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
			<BtnAllStories btnName ={"Get All Stories"} allstories={() => setallStories(!allStories)}/>
			<BtnAllStories btnName ={"Genres"} allstories={() => setGenres(!genres)}/>
			{genres && stories.map((s)=>{
						return 	(	
							<BtnGenre genre={s.genre}
									/>	
								)
						})}
			<BtnAllStories btnName ={"My Stories"} allstories={() => setallStories(!allStories)}/>



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
		</div>
	)
}


export default StoryBody