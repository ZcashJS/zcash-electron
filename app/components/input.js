// @flow

import React from 'react';
import cx from 'classnames';
import omit from 'lodash';
import Dropdown from './dropdown';

type Props = {
  textArea: string,
  dropdown: any,
  label: string,
  onChange: Function,
  largeInput: any,
}

const getClasses = (props: Props) => cx(
  'input-wrapper',
  { 'input-wrapper--large-input': props.largeInput },
);

export default (props: Props) => {
  if (props.textArea) {
    return (
      <div className={getClasses(props)}>
        <div className='input-wrapper__label'>
          {props.label}
        </div>
        <textarea
          type='text'
          className='input-wrapper__textarea'
          rows={6}
          onChange={props.onChange}
          {...omit(props, 'largeInput', 'textArea', 'dropdown')}
        />
      </div>
    );
  }

  if (props.dropdown) {
    return (
      <div className={getClasses(props)}>
        <div className='input-wrapper__label'>
          {props.label}
        </div>
        <Dropdown
          {...omit(props, 'largeInput', 'textArea', 'dropdown')}
        />
      </div>
    );
  }

  return (
    <div className={getClasses(props)}>
      <div className='input-wrapper__label'>
        {props.label}
      </div>
      <input
        type='text'
        className='input-wrapper__input'
        onChange={props.onChange}
        {...omit(props, 'largeInput', 'textArea', 'dropdown')}
      />
    </div>
  );
};
