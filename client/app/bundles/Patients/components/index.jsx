import PropTypes from 'prop-types';
import React from 'react';

export default class Index extends React.Component {
  static propTypes = {
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { };
  }

  render() {
    console.log(this.props);
    return <div>
      <h1>
        You should see you patients here!
      </h1>
    </div>
  }
}
