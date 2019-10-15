import React from 'React';
import axios from 'axios';
import Style from './App.css';

import Scroller from './components/Scroller/Scroller.jsx';
import ImageBar from './components/ImageBar/ImageBar.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url_75x75s: [],
      url_170x135s: [],
      url_570xNs: [],
      url_fullxfulls: [],
      index: 0,
    }
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  scrollRight(){
    this.setState({
      index: (this.state.index === this.state.url_fullxfulls.length - 1) ? 0 : this.state.index + 1,
    })
  }
  
  scrollLeft(){
    this.setState({
      index: (this.state.index === 0) ? this.state.url_fullxfulls.length - 1 : this.state.index - 1,
    })
  }

  componentDidMount(){
    console.log('..Mounted..')
    // let http = 'http://ec2-3-15-235-11.us-east-2.compute.amazonaws.com/urls';
    let http = 'http://localhost:3003/urls';
    axios.get(http, {
      params: {
        productId: 729513146
      }
    })
    .then((urls) => {
      // Come back and check to see which set(s) of urls
      // are actually needed for the carousel
      const seventyFives = [];
      const oneSeventies = [];
      const fiveSeventies = [];
      const fulls = [];
      let images = urls.data[0].Images
      if(images.length === 0){
        throw images
      }
      for(let i = 0; i < images.length; i++){
        seventyFives.push(images[i].url_75x75);
        oneSeventies.push(images[i].url_170x135);
        fiveSeventies.push(images[i].url_570xN);
        fulls.push(images[i].url_fullxfull);
      }
      console.log(seventyFives)
      this.setState({
        url_75x75s: seventyFives,
        url_170x135s: oneSeventies,
        url_570xNs: fiveSeventies,
        url_fullxfulls: fulls,
      })
    })
    .catch((err) => {
      if(err.response.status === 422){
        console.log('No Product Found with that Id')
      }else{
        console.log('No images found for that product!')
      }
    })
  }

  render(){
    return (
      <div>
        <div className={Style.header}>
          <h1>forGetsy</h1>
          <h3>Search Bar</h3>
        </div>
        <div className={Style.carousel}>
          <Scroller 
            url={this.state.url_570xNs[this.state.index]}
            scrollLeft={this.scrollLeft}
            scrollRight={this.scrollRight}
          />
          <ImageBar urls={this.state.url_75x75s}/>
        </div>
      </div>
    )
  }
}

export default App;