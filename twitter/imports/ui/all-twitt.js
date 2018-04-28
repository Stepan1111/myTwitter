import React, { Component, PropTypes } from 'react';
import store from '../reducers/store.js'

export default class AllTwitt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitts: [],
    };
  }
  renderTwitts = () =>{
    const styles = {
       tweetsView :{
         color:'#005a66',
         padding: '10px 0px 10px 0px',
         borderBottom: '1px solid #d2d7da'
       },
    };
    return this.state.twitts.map((twitt) => (
      <li style={styles.tweetsView} key={twitt.id}>{twitt.text}</li>
    ));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.twitts.statuses){
        this.setState({twitts:nextProps.twitts.statuses})
    }
  }
  render() {
    return (
      <ul>
        {this.renderTwitts()}
      </ul>
    );
  }
}
 