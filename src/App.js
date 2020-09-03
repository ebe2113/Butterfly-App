
import React, {Component} from 'react';
import Quote from './components/quote';
import './App.css';
import image01 from './Butterflies/Butterfly1.jpg';
import image02 from './Butterflies/ Butterfly2.jpg';
import image03 from './Butterflies/Butterfly3.jpg';


class App extends Component {
  state = {
        quote: []
  }
  componentDidMount() {
        fetch('https://quotes.rest/qod?language=en')
        .then(res => res.json())
        .then((data) => {
          this.setState({ quote: data.contents.quotes })
        })
        .catch(console.log)
      }

  render(){
    return (
      <div className="container">
        <h1>Butterflies</h1>
        <Quote quote={this.state.quote} />
        <h3>Danaus Plexippus </h3>
        <h4> Morpho Pelides </h4>
        <h5> Delias Eucharia </h5>

      <div className="butterfly-images">
        <div className="butterfly-image1">
          <img src={image01} alt="image01" />
        </div>
        <div className="butterfly-image2">
          <img src={image02} alt="image02" />
        </div>
        <div className="butterfly-image3">
          <img src={image03} alt="image03" />
        </div>
       </div>
      </div>

    );
  }
}

export default App;
                                                                                                                                                                
