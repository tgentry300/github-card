import React, { Component } from 'react';
import './App.css';



class App extends Component {
  state = {
    user: {},
    active: false
  }

  

     showProfileOnButtonClick = async () => {
     const userData = []
     await fetch('https://api.github.com/users/tgentry300')
     .then(async res => await res.json())
     .then(data => {
        userData.push(data)
    })
    this.setState({active: !this.state.active, user: userData})
      console.log(this.state.user[0])
  }

  
  render() {
    const currentUser = this.state.user[0]
    return (
      <div className="ui container">
        
        <button className = "ui blue button" onClick={this.showProfileOnButtonClick}>Click Here to Reveal my Github Profile</button>
        {this.state.active && 
        <div className = "ui card">
          <div className = "image">
            <img src={currentUser.avatar_url} alt="User"/>
          </div>
        
          <div className = "content">
            <a className = "header">{currentUser.name}</a>
            <div className = "description">
            {currentUser.bio}
            </div>
            <a href={currentUser.html_url}>Go to my Github Profile</a>

            {/* <img src={currentUser.avatar_url}/>
            <h2>{currentUser.name}</h2>
            <p>{currentUser.bio}</p>
            <p><a href={String(currentUser.url)}>Go to Github</a></p> */}
          </div>
        </div>}
      </div>
    );
  }
}

export default App;
