import React from "react";
import { connect } from 'react-redux';
import { getCats } from '../../actions/catDetails_action';

class LeftPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: null
        }
        this.catClicket = this.catClicket.bind(this);
    }

    catClicket(catId) {
        this.props.catClicked(catId);
    }

    render() {
        const catList = this.props.catDetails !== undefined && this.props.catDetails.map(cat => {
            return (
                <div style={{ fontSize: '1rem', maxHeight: '50vh' }} key={cat.CatId} onClick={() => this.catClicket(cat.CatId)}>
                    <span style={{ float: 'left' }}>
                        {cat.CatName}
                    </span>
                    <span style={{ float: 'right' }}>
                        {cat.CatAge}
                    </span>
                </div>
            )
        });
        return (
            <div style={{ display: 'grid', padding: '0px 5px' }}>
                {catList}
            </div>
        )
    }
}

export default LeftPane;