import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import reducer from './reducers/reducer'
import {fetchData, postData} from './actions/action'



class App extends Component {
  constructor(props){
   
    super(props)
    this.state = {isHidden : true}
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  componentDidMount(dispatch) {
        this.props.fetchData()
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    console.log("asas", this.props.display)
    return (
      <div className="App">
          <p>Demo App</p>
         
         
      
        <div>{ Object.keys(this.props.display).length !== 0 ? Object.keys(this.props.display).map((key,index) => 
            {return(<input type='text' style={divStyle} key={key}  defaultValue={this.props.display[key].title} onBlur={(e)=> this.props.onBlurInput(e.target.value)}/>)}) : null}</div>
      
        <input type='button' value='ADD DATA' onClick={this.toggleHidden}     />
        {!this.state.isHidden &&  <div style={{border:'1px solid #333', width:"200px", height:"300px",display: 'inline-table'}}>
            <p>Please Enter the Data you want to post</p>
            <input type='text'   onBlur = {(e) => this.props.onBlurInput(e.target.value)} />
          </div>}

      </div>
    )
  }
}



 const divStyle = {
    border:'1px solid #333', width:"200px", height:"300px",display: 'inline-table'
  } 

const mapDispatchToProps = (dispatch) => {
  return {
    onBlurInput: (data) => {
      dispatch(postData(data))
    }, fetchData: () => {
      dispatch(fetchData())
    }
  }
}



const mapStateToProps=(state, ownProps)=> {
    return(
      {
        display: state.fetchReducer,
      }
    ) 

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
