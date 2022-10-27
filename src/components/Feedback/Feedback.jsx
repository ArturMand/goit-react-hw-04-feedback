import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notifitaction/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prev => ({ [option]: prev[option] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.good + this.state.neutral + this.state.bad)) *
    100;

  render() {
    const { good, neutral, bad } = this.state;
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {isNaN(countPositiveFeedbackPercentage()) ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
