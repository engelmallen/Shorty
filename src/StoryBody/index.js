import React, {useState, useEffect} from "react";
import StoryCard from "./storyCard";
import "./index.css";


const StoryBody = () =>{

	const [open, setOpen] = useState(false)
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

  			<button className="btn-dark w-100" onClick={() => setOpen(!open)} value="getStories">getStories</button>
			{open && stories.map((s)=>{
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