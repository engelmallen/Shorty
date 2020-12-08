
import React, {useState, useEffect} from "react";

const Story = (props) =>{
	const  [story, setStory] = useState({});
	const  [reviews, setReviews] = useState([]);

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

	}, [])
	return (
		<div>
			<div className="story">
			<div className="h1">{story.name}</div>
			<div className="h1">{story.text}</div>
			<div className="reviews mt-5 bg-dark text-light">
				{reviews.map((r)=>{
					return(
							<div className="curReview">
								<div>{r.text}</div>
								<div className="border-bottom">{r.stars}</div>
							</div>
						)
				})}
			</div>
			</div>
		</div>
		)

}

export default Story