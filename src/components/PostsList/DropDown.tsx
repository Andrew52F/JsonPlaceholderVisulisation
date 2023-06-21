import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { SortDropdownProps } from '../../types/features';

const SortDropdown: React.FC<SortDropdownProps> = ({ initialValue = null, onSelect }) => {
  const options = [
    { text: 'Без сортировки', value: null },
    { text: 'A-Z', value: 'asc' },
    { text: 'Z-A', value: 'desc' },
  ];
  return (
    <DropdownButton onSelect={(smth) => smth && onSelect(smth)} title='Сортировать' id='bg-nested-dropdown'>
      {options.map(({ text, value }) => (
        <Dropdown.Item
          eventKey={value?.toString()}
          key={value}
          active={initialValue === value}
        >
          {text}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SortDropdown;
