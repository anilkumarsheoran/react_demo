import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import reducer from './reducers/reducer'
import {fetchData, postData, updateData} from './actions/action'
import UUID from 'uuid/v4'
import { Jumbotron } from 'react-bootstrap';

const max_chars = 160;
class App extends Component {
  constructor(props){
    super(props)
    this.state = {isHidden : true, hideCheck : false, chars_left :160}
    this.toggleHidden = this.toggleHidden.bind(this)
    this.hideDiv = this.hideDiv.bind(this)
    this.handleChange =this.handleChange.bind(this)
  }

  componentDidMount(dispatch) {
        this.props.fetchData()
  }
  hideDiv(event){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange(title, id) {
    // debugger;
   
      this.setState({
        chars_left: max_chars - title.length
      });
  }

  render(){
    return (
      <div className="App">
        <Jumbotron style={{padding:'14px'}}><h1>Demo App</h1></Jumbotron>
        {this.state.chars_left !== 160  ? <div style={{float:'left', width:'7%', position:'fixed', top:'200px'}}>Current Feed available limit : {this.state.chars_left}</div> : null}
        {Object.keys(this.props.newData).length ? Object.keys(this.props.newData).map((key)=>
          {return (
            <Jumbotron style={style} key={this.props.newData[key].id}>
              <Display newData={this.props.newData[key]} onBlurInputChange={this.props.onBlurInputChange} handleChange={this.handleChange} key={this.props.newData[key].id} />
            </Jumbotron>)}) : null}
       
        {this.state.isHidden ? <input className='btn btn-primary' style= {{margin:"0 auto", display:'block' }} type='button' value='Add New Feed' onClick={this.toggleHidden}     /> : null }
        
        { !this.state.isHidden &&  
        <div className='jumbotron' style={style} ><input  type='text' style={divStyle} placeholder="Type your Feed (Max Character Count: 160)"  onBlur = {(e) => {this.props.onBlurInput(e.target.value, UUID()); this.hideDiv()}} /></div>
          }

      </div>
    )
  }
}

function Display(props) {
    return (
      <div>
        <input type='text' key={UUID()} style={divStyle} 
        onBlur={(e) => props.onBlurInputChange(e.target.value,props.newData.id)}
       
          defaultValue= {props.newData.title }     
          />
        <span style={{float:'right',marginRight:'25px'}}>
          {160 - props.newData.title.length}
        </span>
      </div>
    )
}

const divStyle = {
  width:"99%", height:"100px",display: 'inline-block'
} 
const style ={width:'80%', margin:'0 auto',borderRadius:'30px', marginBottom:'20px'}
const mapDispatchToProps = (dispatch) => {
  return {
    onBlurInput: (data, id) => {
      dispatch(postData(data, id ))

    },
    onBlurInputChange: (data, id) => {
      dispatch(updateData(data, id ))

    },
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

const mapStateToProps=(state, ownProps)=> {
    return(
      {
        display: state.fetchReducer,
        newData : state.postReducer
      }
    ) 
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
