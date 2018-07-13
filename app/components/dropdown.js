// @flow

import React, { PureComponent } from 'react';
// import Select from 'react-select';
// $FlowFixMe
import '../assets/styles/vendor/react-select.scss';

// const options = [
//   { value: 'one', label: 'One' },
//   { value: 'two', label: 'Two' },
// ];

export default class Dropdown extends PureComponent<{}> {
  // state = {
  //   selected: {},
  // };
  componentDidMount() {
    console.log('mounts'); // eslint-disable-line
  }

  // handleChange = (selected: Object) => this.setState({ selected });

  render() {
    // const { selected } = this.state;

    return (
      <div className='dropdown'>
        {/* <Select
          name='dropdown__select'
          value={selected.value}
          onChange={this.handleChange}
          options={options}
        /> */}
        dropdown
      </div>
    );
  }
}
