import React from "react";

class CenterPane extends React.Component {
    constructor(props) {
        super(props);
        this.catClickCallback = this.catClickCallback.bind(this);
    }

    catClickCallback() {
        this.props.catClickCallback(this.props.clickedCatDetails.CatId);
    }
    
    render() {
        // console.log(this.props.clickedCatDetails)
        return (
            <div onClick={this.catClickCallback}>
                {this.props.clickedCatDetails ? <h4>{this.props.clickedCatDetails.CatName}</h4> : 'Please Click a Cat'}
                {this.props.clickedCatDetails && <h6>No. of times clicked: {this.props.clickedCatDetails.CatAge}</h6>}
                {this.props.clickedCatDetails && <img src={this.props.clickedCatDetails.CatImage} alt="" height='200px' width='400px' />}
                {this.props.clickedCatDetails && <h3>{this.props.clickedCatDetails.CatNickNames}</h3>}
            </div>
        )
    }
}

export default CenterPane;