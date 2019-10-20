import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {anotherName} from './actions/myaction'

function App(props) {
  // const mywish = props.mywish.map(item=>{return <h2>{item}</h2>})
  // console.log(mywish)
  return (
    <div className="App">
     This is app
     My name is {props.myname}
     {/* {mywish} */}
     <button onClick={() => {props.changeName()}}>Change It</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
return{
  myname: state.name,
  mywish: state.wish
}
}
const mapDispatchToProps = (dispatch) => {
  return{
    changeName: () => {dispatch(anotherName())}
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);
