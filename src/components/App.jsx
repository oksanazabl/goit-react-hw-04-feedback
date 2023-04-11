import { Component } from 'react';
import Section from './Section';
import Counter from './Counter';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (event) => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };
  

  render() {
    return (
    <div>
      <Section title="Please leave feedback">
      <Counter onFeedback={this.addFeedback}/>
    </Section>
     <Section title="Statistics">
     
     </Section>
    </div>

    )

    
    
 
  }
}

export default App;
