import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.list}>
    <label className={css.label}>Find contacts by name</label>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export default Filter;
