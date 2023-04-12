import { Component } from 'react';
import Section from './Section';
import Counter from './Counter';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
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
          <Counter onFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          />
        </Section>
      </div>
    );
  }
}

export default App;
