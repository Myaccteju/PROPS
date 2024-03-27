import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const { prop1, prop2 } = this.props.data;

    return (
      <div>
        <p>Prop 1: {prop1}</p>
        <p>Prop 2: {prop2}</p>
      </div>
    );
  }
}

export default ChildComponent;
