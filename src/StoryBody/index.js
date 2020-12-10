import React, { useState, useEffect } from "react";
import StoryCard from "./StoryCard";
import BtnAllStories from "./buttons/BtnAllStories";
import {Link} from "@reach/router";
import BtnGenre from "./buttons/BtnGenre";
import StoryModal from "./StoryModal";

import "./index.css";
 

const StoryBody = () =>{
	const genreList = [
		"Horror",
		"Comedy",
		"Slice of Life",
		"Drama"
	]

	const [allStories, setAllStories] = useState(false);
	const [filterStories, setFilterStories] = useState(false);
	const [genres, setGenres] = useState(false);
	const [getMyStory, setGetMyStory] = useState(false);

	const [stories, setStories] = useState([]);
	const [users, setUsers] = useState([]);
	const [curGenre, setCurGenre] = useState("");

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
			<BtnAllStories 	btnName={"Get All Stories"} 
							allstories={() => 	setAllStories(!allStories)} 
							filterStories={() =>{	setCurGenre("")
													setFilterStories(false)
														}} />

			<BtnAllStories btnName={"Genres"} allstories={() => setGenres(!genres)}/>

			{genres && genreList.map((gl)=>{
				return (<BtnGenre name={gl} criteria={gl} allstories={()=>setAllStories(false)} filterStories={
					() => {
						setCurGenre(gl)
						setFilterStories(!filterStories)}} />)
			})}

				
			<BtnAllStories btnName ={"My Stories"} allstories={()=>{}}/> 



			{allStories && stories.map((s)=>{
						return 	(	
							<StoryCard 	
										name={s.name}  
										id={s.id}
										image={s.storyImage} 
										author={
							              	users.find((u) => {
							                	return s.userId == u.id;
							              }).userName
							            } 
							            genre={s.genre}
							            
							            action={()=>setGetMyStory(true)}
									/>	
								)
						})}

			{filterStories && stories.map((s)=>{ 
				if (s.genre === curGenre)
						{return 	(<StoryCard 	
										name={s.name}  
										id={s.id}
										image={s.storyImage} 
										author={
										users.find((u) => {
											return s.userId == u.id;
											}).userName
										} 
										genre={s.genre}
										
							            action={()=>setGetMyStory(true)}
							            />	
									)}
						})
					


		}

{/*		{getMyStory && stories.find((f)=>{
			return f.id === 
			<StoryModal/>
		})}*/}


		</div>
	)
}


export default StoryBody