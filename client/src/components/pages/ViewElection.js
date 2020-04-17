import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class ViewElection extends Component {
	check = () => {
		// console.log("Hey");
		// console.log(this.props.item._id);
		// return <ViewCandidates components={this.props.item} />;
	};

	render() {
		return (
			<div className="product" style={{ backgroundColor: '#f4f4f4' }}>
				<Link
					to={{
						pathname: '/view/ongoing/election',
						state: {
							electionId: this.props.item._id,
							token: this.props.token,
							election_name: this.props.item.name
						}
					}}
				>
					<Fragment>
						<img
							src={this.props.item.imageURL}
							alt="Election"
							style={img_styles}
						/>
						<h2 className="header">{this.props.item.name}</h2>
						<br />
						<p className="description">
							{' '}
							{this.props.item.description}{' '}
						</p>
						<br />
						<button className="button" style={btn_style}>
							VOTE!
						</button>
					</Fragment>
				</Link>
			</div>
		);
	}
}

const img_styles = {
	objectFit: 'cover',
	maxWidth: '250px',
	maxHeight: '450px'
};

const btn_style = {
	marginTop: '80px'
};

export default ViewElection;
