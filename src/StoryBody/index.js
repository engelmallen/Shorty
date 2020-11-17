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
		<div className="StoryBody px-5">

  			<button className="btn-dark" onClick={() => setOpen(true)} value="getStories">getStories</button>
			{open && stories.map((a)=>{
						return 	(	
							<StoryCard name={a.name} image={a.storyImage} />	

								)
						})}
		</div>
	)
}


export default StoryBody