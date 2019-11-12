import React from "react";
import CatForm from './CatForm'

class RightPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <button>Open New Form</button>
                {this.props.clickedCatDetails && <CatForm clickedCatDetails={this.props.clickedCatDetails} />}
            </div>
        )
    }
}

export default RightPane;