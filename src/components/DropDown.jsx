import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const SortDropdown = ({ initialValue = null, onSelect }) => {
  const options = [
    { text: 'Без сортировки', value: null },
    { text: 'A-Z', value: 'asc' },
    { text: 'Z-A', value: 'desc' },
  ];
  return (
    <DropdownButton onSelect={(smth) => onSelect(smth)} title='Сортировать' id='bg-nested-dropdown'>
      {options.map(({ text, value }) => (
        <Dropdown.Item
          eventKey={value}
          key={value}
          active={initialValue === value}
        >
          {text}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

SortDropdown.propTypes = {
  initialValue: PropTypes.oneOfType([
    PropTypes.arrayOf([null]),
    PropTypes.string,
  ]),
  onSelect: PropTypes.func.isRequired,
};

export default SortDropdown;
