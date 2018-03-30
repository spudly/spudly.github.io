// @flow
import React from 'react';
import format from 'date-fns/format';

type Props = {
  format: string,
};

type State = {
  date: Date,
};

class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.setState({date: new Date()}), 100);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return <span>{format(this.state.date, this.props.format)}</span>;
  }
}

export default Clock;
