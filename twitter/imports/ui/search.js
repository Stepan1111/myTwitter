import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import store from '../reducers/store.js'
import TextField from 'material-ui/TextField';
import AllTwitt from './all-twitt.js';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitts: [],
    };
  }
  getTweets= (data) => {
    Meteor.call("getTweet", data, (error,result) => {
      if(error){
        console.log(error)
      }else{
        console.log(result)
        this.setState({twitts:result})
      }
    })
  }
  toSearch= () => {
    let newTwitt = store.getState().newTwitt;
    let inpValue = document.getElementById("ourInp").value || newTwitt[newTwitt.length-1]; 
    store.dispatch({
      type: 'ADD_VALUE',
      text: inpValue
    })
    this.getTweets(inpValue)
  }
  searchBut = () => (
    <RaisedButton  onClick={this.toSearch} label="Search" />
  );
  componentDidMount(){
    let newTwitt = store.getState().newTwitt;
    this.getTweets(newTwitt)
  }
  render() {
    const styles = {
      view:{
        maxWidth: 1500,
        display: 'flex'
      },
      inpView:{
        position: 'fixed',
        minWidth: 500,
        marginTop: 150
      },
      twittsView:{
        minWidth: 1000,
        marginLeft: 500
      },
      titles:{
        color: 'rgb(0, 188, 212)',
        marginTop: 25,
        marginBottom: 25,
        textAlign: 'center'
      },
      textFieldView:{
        marginLeft: 100
      },
      buttView:{
        marginTop: 15
      }
    };
    return (
      <div style={styles.view}>
        <div style={styles.inpView}>
          <h1 style={styles.titles}>Enter tweet</h1>
          <div style={styles.textFieldView}>
            <div >
              <TextField 
                className="rew" 
                id = "ourInp"
                floatingLabelText="Enter tweet"
              />
            </div>
            <div style={styles.buttView}>
              {this.searchBut()}
            </div>
          </div>
        </div>
        <div style={styles.twittsView}>
          <h1 style={styles.titles}>Your tweets</h1>
          <div id="res" >
            <AllTwitt twitts={this.state.twitts}/>
          </div>
        </div>
      </div>
    );
  }
}

