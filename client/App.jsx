import React from 'React';
import axios from 'axios';
import Style from './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      test: 'Not Hello World',
      url_75x75s: [],
      url_170x135s: [],
      url_570xNs: [],
      url_fullxfull: [],
      index: 0,
    }
  }

  getImageUrls(){
    axios.get('http://localhost:3003/urls', {
      params: {
        productId: 72951314
      }
    })
    .then((urls) => {

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
      this.setState({
        url_75x75s: seventyFives,
        url_170x135s: oneSeventies,
        url_570xN: fiveSeventies,
        url_fullxfull: fulls,
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

  cycleImage(){
    this.setState({
      index: (this.state.index === this.state.url_fullxfull.length - 1) ? 0 : this.state.index + 1,
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
          <img className={Style.image} src={this.state.url_75x75s[this.state.index]}/>
        </div>
          <button onClick={this.getImageUrls.bind(this)}>Get Urls</button>
          <button onClick={this.cycleImage.bind(this)}>Cycle through</button>
      </div>
    )
  }
}

export default App;