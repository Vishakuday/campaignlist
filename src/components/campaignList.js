import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class CampaignList extends Component {

constructor(props) {
    super(props);
    this.state = {
        showrenameStateFor : '',
        newName : ''
    }
}
_renderCampaigns() {
    return this.props.campaigns.map((campaign, index) => {
        return (
            (<li className = "single-camnpaign">
            {this.state.showrenameStateFor !== index ? (<div className = "single-campaign-parent">
                <div className = "campaign-name">{campaign.name}</div>
                <div className = "comment-btn" onClick = {this.props.addComment}>Comment</div>
                <div className = "rename-btn" onClick = {(e) => {this.setState({showrenameStateFor : index})}}>Rename</div>
                <div className = "delete-btn" onClick = {() => {this.props.delete(index)}}>Delete</div>
            </div>) :
            <div className = "rename-section">
               <input className = "rename-text-box" type="text" name="campaignname" placeholder = "Enter the new campaign name" onChange = {(e) => {this.setState({newName: e.target.value})}}/>
               <input  className = "confirm-btn" type="button" value="Rename Campaign" onClick= {() => {
                   this.props.rename(index, this.state.newName);
                   this.setState({showrenameStateFor : ''});

                }}/>
            </div>}
            </li> )
        )
    })
}

    render() {
        return (
            <ul className = "campaignlist">
                {this._renderCampaigns()}
            </ul>
        )
    }
}