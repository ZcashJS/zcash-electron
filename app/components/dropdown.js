import React, { Component } from 'react';
import Select from 'react-select';
import '../styles/vendor/react-select.scss';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected || '',
      options: props.options || [],
    };
  }

  _handleChange = (selected) => this.setState({ selected });

  render() {
    const { selected } = this.state;

    return (
      <div className='dropdown'>
        <Select
          name='dropdown__select'
          value={selected.value}
          onChange={this._handleChange}
          options={options}
        />
      </div>
    );
  }
}