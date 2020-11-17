import "./index.css";

import StoryStars from "./StoryStars";

const storyCard = (props) =>{
const alley = props.image
	const divStyle = {
		background: 'url(' + alley + ') black no-repeat center',
		backgroundSize:'contain',
		width: '24%',
		height: '300px',

	};
	return (
			<div className="storyCard p-3 m-2 float-left pt-4 text-warning font-weight-bold" style={divStyle}>
			<div className="h3"> {props.name} </div>
			<div className="h4"> {props.author} </div>
				<div>
					{/*<img src={alley} width="100%"/>	*/}
					</div>
					<div width="50%">
				</div>
			</div>
	)
}

export default storyCard