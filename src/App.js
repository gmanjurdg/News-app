import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=022c9208b666476f8c2ab81c1a2d8919')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          articles: myJson.articles
        });
      });
  }
  render() {
    return (
      <div className="App" style={{ background: "black", color:"white", padding:"20px", border:"10px solid white", borderRadius: "20px 20px " }}>
        <h1>Latest News</h1>
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <h2 style={{ textAlign: "left" }}>{item.title}</h2><br />
              <b><p>Author: {item.author}</p></b>
              <img src={item.urlToImage} style={{ width: "40vw", imageOrientation: "center" }} alt="" /><br />
              <a href={item.url}>Read More</a>
              <p>{item.content}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;