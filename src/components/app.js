import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignList from './CampaignList.js'
import {addCampaign, deleteCampaign, renameCampaign} from '../actions/index';

class App extends Component {
constructor(props) {
  super(props);

  this.state ={
    createNew: false,
    campaignName: "",
    selectedCampaign : {}
  }
}

_addCampaign() {
  this.props.addCampaign(this.state.campaignName);
  this.setState({createNew : false });
}

rename(index, newName) {
  this.props.renameCampaign(index, newName);
}

_delete(index) {
  this.props.deleteCampaign(index);
}

  render() {
    return (
      <div>
        <div className = "campaign-header">campaign list</div>
        <div className ="campaign-list-subheader">
          <div className = "subheader-name">Campaign Names</div>
          <input className = "create-new-btn" type="button" value="Create New" onClick = {() => {this.setState({createNew : true})}} />
        </div>
        {this.state.createNew && (
        <div className = "add-new-campaign-section">
          <input type="text" name="campaignname" placeholder = "Enter campaign name" onChange = {(e) => {this.setState({campaignName: e.target.value})}}/>
          <input  className = "confirm-btn" type="button" value="Create Campaign" onClick= {this._addCampaign.bind(this)}/>
          <input className = "cancel-btn" type="button" value="Cancel" onClick = {() => {this.setState({createNew : false, campaignName : ""})}}/>
        </div>
        )}

        <div className = "campaign-and-history-section">
          <CampaignList campaigns = {this.props.campaignInfo} delete = {this._delete.bind(this)} rename = {this.rename.bind(this)}/>
          <div className = "history"></div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = function({campaignInfo}) {
  return {
    campaignInfo
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
      addCampaign: (name) => {
          dispatch(addCampaign(name));
      },
      deleteCampaign: (index) => {
        dispatch(deleteCampaign(index));
      },
      renameCampaign: (index, newName) => {
        dispatch(renameCampaign(index, newName));
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
