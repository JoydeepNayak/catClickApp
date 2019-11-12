import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getCats, addAgeOfCatById } from './actions/catDetails_action';
import LeftPane from './ui_components/left_pane';
import CenterPane from './ui_components/center_pane';
import RightPane from './ui_components/right_pane';
import BottomPane from './ui_components/bottom_pane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catClickedId: "",
      catClickedDetails: null,
    }
    this.childCatClicked = this.childCatClicked.bind(this);
    this.getClickedCatDetails = this.getClickedCatDetails.bind(this);
    this.catClickCallback = this.catClickCallback.bind(this);
  }

  childCatClicked(catId) {
    this.setState({ catClickedId: catId, catClickedDetails: this.getClickedCatDetails(catId) });
  }

  getClickedCatDetails(catId) {
    return this.state.catDetails.filter(cat => cat.CatId === catId)[0];
  }

  catClickCallback(catId) {
    //create an action to add age of cat in store
    this.setState({ catClickedDetails: this.state.catDetails.filter(cat => cat.CatId === catId)[0] }, () => {
      this.props.addAgeOfCatById(catId, this.state.catDetails);
      this.childCatClicked(catId);
    })

  }

  componentDidMount() {
    this.props.getCats();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.catDetails !== state.catDetails) {
      return {
        catDetails: props.catDetails
      }
    }
    return null;
  }

  render() {
    return (
      <div className="grid-container">
        <div className="left">
          <LeftPane catDetails={this.state.catDetails} catClicked={this.childCatClicked} />
        </div>
        <div className="center" style={{textAlign: 'center'}}>
          <CenterPane clickedCatDetails={this.state.catClickedDetails} catClickCallback={this.catClickCallback} />
        </div>
        <div className="right">
          <RightPane clickedCatDetails={this.state.catClickedDetails} />
        </div>
        <div className="bottom">
          <BottomPane catDetails={this.state.catDetails} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catDetails: state.catDetails.cats
  }
};

export default connect(mapStateToProps, { getCats, addAgeOfCatById })(App);
