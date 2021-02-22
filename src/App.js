import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Control from './components/control.jsx';

class App extends Component {
  state = { 
    jokes:"",
    isLoading:true,
   }

  componentDidMount= this.componentDidMount.bind(this)
  componentDidMount(){
    axios.get('https://api.chucknorris.io/jokes/random/?format=json/').then(res=>{
      this.setState({jokes:res.data.value})
      this.setState({isLoading:false})
    })
  }

  render() { 
    return ( 
      <div>
        <Control jokes={this.state.jokes} isLoading={this.state.isLoading} finalHenJokes={this.componentDidMount} />
      </div>
     );
  }
}
 
export default App;
