import React, {useState, useEffect} from "react";
import {Link} from "@reach/router";
import { useForm } from "react-hook-form";


const Story = (props) =>{
	const  [story, setStory] = useState({});
	const  [reviews, setReviews] = useState([]);
	const  [users, setUsers] = useState([]);
	const { register, handleSubmit } = useForm();

	useEffect(async () => {
		const getStory = async () => {
			const storiesResponse = await fetch(`http://localhost:3000/stories/${props.storyId}`);
			const storyData = await storiesResponse.json();
			return storyData	
		}
		
		const story =  await getStory();
		setStory(story);


		const getReviews = async () =>{
			const response = await fetch(`http://localhost:3000/stories/${props.storyId}/reviews`);
			const data = await response.json();
			return data;

		}
		const reviews = await getReviews();
		setReviews(reviews);

		const getUsers = async () =>{
			const usersResponse = await fetch(`http://localhost:3000/users`);
			const usersData = await usersResponse.json();
			return usersData;

		}
		const users = await getUsers();
		setUsers(users);		

	}, [])
	return (
		<div className="container">
			<Link to="/" className="btn-dark px-3">Back</Link>
			<div className="story">
			<div className="h1 text-center">{story.name}</div>
			<div className="h6">{story.text}</div>
			<div className="reviews mt-5 bg-dark text-light">
			
			<form className="p-3 mb-2">
				<label htmlFor="">Review:</label>
				<input type="text" placeholder="Write review..." className="w-100 mb-2"/>
				<label htmlFor="" className="w-100">Rate:</label>
				<input type="number" min="1" max="5" className="w-25"/>
				<button type="submit" name="submit" className="btn-success">Summit Review</button>
			</form>

			<div className="w-100 bg-light text-dark px-2 pt-2 pb-1">Shorters Reviews:</div>
				
				{reviews.map((r)=>{
					return(
							<div className="curReview row px-3">
								<div className="px-3 col-12">{r.text}</div>
								<div className="px-3 col-12 border-bottom">{r.stars}</div>
							</div>
						)
				})}
			</div>
			</div>
		</div>
		)
}

export default Story