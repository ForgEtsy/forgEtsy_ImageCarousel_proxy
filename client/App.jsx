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
    }
  }

  getImageUrls(){
    axios.get('http://localhost:3003/urls', {
      params: {
        productId: 729513146
      }
    })
    .then((urls) => {
      console.log(urls);
      const seventyFives = [];
      const oneSeventies = [];
      const fiveSeventies = [];
      const fulls = [];
      let images = urls.data[0].Images
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
      console.log(err);
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.test}</h1>
        <img src={this.state.url_170x135s[0]}/>
        <h3 className={Style.test}>One more</h3>
        <button onClick={this.getImageUrls.bind(this)}>Get Urls</button>
      </div>
    )
  }
}

export default App;