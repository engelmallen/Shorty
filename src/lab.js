	return (<div className="storyCard bg-success">
				<div className="h2">The man that lives in the alley </div>
				<div className="h3">Edgar Allan Poe</div>
				<div>
					<p >
						Lorem ipsum ut eiusmod in sed ad ad qui non sit anim ut quis in duis dolor culpa.
					</p>
				</div>
		</div>)

				
		<div className="card" style="width: 18rem;">
	  <img src="" className="card-img-top" alt="">
	  <div className="card-body">
	    <p className="card-text">
	    Some quick example text to build on the card title and make up the bulk of the card's content.
	    </p>
	  </div>
	</div>

	useEffect((props) =>{
	const [open, setOpen] = useState(false);
	const [stories, setStories] = useState([]);
});

{filterStories && stories.map((s)=>{ 

				if (s.genre === curGenre)
						{return 	(	
													<StoryCard 	name={s.name}  
																image={s.storyImage} 
																author={
													              	users.find((u) => {
													                	return s.userId == u.id;
													              }).userName
													            } 
													            genre={s.genre}
															/>	
														)}
					else {}
						})
