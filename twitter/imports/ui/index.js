import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Search from './search.js';
import store from '../reducers/store.js'
import TextField from 'material-ui/TextField';
import AllTwitt from './all-twitt.js';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitts: [],
    };
  }
  toSearch= () => {
    this.props.history.push("/search");
    const inpValue = document.getElementById("ourInp").value;
    store.dispatch({
      type: 'ADD_VALUE',
      text: inpValue
    })
  }
  searchBut = () => (
    <RaisedButton  onClick={this.toSearch} label="Search" />
  );
  componentDidMount(){
    let newTwitt = "#javascript";
    Meteor.call("getTweet",newTwitt,  (error,result) => {
      if(error){
        console.log(error)
      }else{
        console.log(result)
        this.setState({twitts:result})
      }
    })
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