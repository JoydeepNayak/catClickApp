import React from 'react';

class CatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CatName: this.props.clickedCatDetails.CatName || "",
            CatImage: this.props.clickedCatDetails.CatImage || "",
            CatClicks: this.props.clickedCatDetails.CatClicks || 0,
            OldCatName: this.props.clickedCatDetails.CatName,
            OldCatImage: this.props.clickedCatDetails.CatImage,
            OldCatClicks: this.props.clickedCatDetails.CatClicks
        }
        this.submitForm = this.submitForm.bind(this);
        this.undoChanges = this.undoChanges.bind(this);
        this.fieldChanged = this.fieldChanged.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.clickedCatDetails.CatClicks !== state.CatClicks) {
            return {
                CatClicks: props.clickedCatDetails.CatClicks
            }
        }
        return null;
    }

    submitForm() {
        alert(1)
    }
    undoChanges() {
        this.setState({
            CatName: this.props.clickedCatDetails.CatName,
            CatImage: this.props.clickedCatDetails.CatImage,
            CatClicks: this.props.clickedCatDetails.CatClicks
        })
    }
    fieldChanged(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    render() {
        console.log(this.props.clickedCatDetails.CatClicks)
        return (
            <form style={{ display: 'grid', fontSize: '15px' }}>
                Cat Name<input type="text" id="CatName" value={this.state.CatName} onChange={(key) => { this.fieldChanged(key) }} />
                Cat Image<input type="text" id="CatImage" value={this.state.CatImage} onChange={(key) => { this.fieldChanged(key) }} />
                Cat Clicks<input type="number" id="CatClicks" value={this.state.CatClicks} onChange={(key) => { this.fieldChanged(key) }} />
                <span>
                    <button onClick={this.submitForm}>Save</button>
                    <button onClick={() => { this.undoChanges() }}>Undo</button>
                </span>
            </form>
        )
    }
}

export default CatForm;