import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import reducer from './reducers/reducer'
import {fetchData, postData, updateData} from './actions/action'
import UUID from 'uuid/v4'

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

  handleChange(event) {

    event.preventDefault()
    var input = event.target.value;
      this.setState({
        chars_left: max_chars - input.length
      });
  }

  render(){
    return (
      <div className="App">
        <p>Demo App</p> 
        {Object.keys(this.props.newData).length ? Object.keys(this.props.newData).map((key)=>
          {return (<Display newData={this.props.newData[key]} onBlurInputChange={this.props.onBlurInputChange} key={this.props.newData[key].id} />)}) : null}
        <div style={{position: 'absolute', top:'30px'}}>{this.state.chars_left}</div>
        {this.state.isHidden ? <input style= {{margin:"0 auto", display:'block' }} type='button' value='ADD DATA' onClick={this.toggleHidden}     /> : null }
        
        { !this.state.isHidden &&  
        <input type='text' style={divStyle} placeholder="Enter Data"  onBlur = {(e) => {this.props.onBlurInput(e.target.value, UUID()); this.hideDiv()}} />
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
        <span>
          {160 - props.newData.title.length}
        </span>
      </div>
    )
}

const divStyle = {
  border:'1px solid #333', width:"200px", height:"300px",display: 'inline-block'
} 

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
