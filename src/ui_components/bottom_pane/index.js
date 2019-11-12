import React from "react";

class BottomPane extends React.Component {
    render() {
        const cards = this.props.catDetails !== undefined && this.props.catDetails.map(cat => (
            <div key={cat.CatId} style={{ border: '2px solid #b5a8a8', width: '330px' }}>
                <h6>{cat.CatName}</h6>
                <h6>No. of times clicked: {cat.CatClicks}</h6>
                <img src={cat.CatImage} alt="" height='100px' width='300px' />
            </div>
        ))
        return (
            <div style={{ display: 'flex' }}>
                {cards}
            </div>
        )
    }
}

export default BottomPane;