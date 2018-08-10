import React, { Component } from 'react';

class ShowHideTech extends Component {
  constructor(){
    super()

    this.state ={
      textButton: '+ Show Tech',
      className: 'techlist techlist--hidden',
      counter: 0
    }
  }

  changeValues = () => {
    this.setState({
      counter: this.state.counter += 1
    })

    if(this.state.counter === 1){
      this.setState({
        textButton: '- Show Tech',
        className: 'techlist'
      })
    }

    if(this.state.counter === 2){
      this.setState({
        textButton: '+ Show Tech',
        className: 'techlist techlist--hidden',
        counter: 0
      })
    }
  }

  render() {
    return (
      <section>
        <h4>Technologies</h4>
        <button onClick = {this.changeValues}  className="toggle-techlist">{this.state.textButton}</button>

        <div className = {this.state.className}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech;