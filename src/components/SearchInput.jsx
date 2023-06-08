import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { debounce } from 'lodash';

const SearchInput = ({ onSubmit, initialValue = '' }) => {
  const [inputValue, setInputValue] = useState(initialValue || '');
  const debouncedSubmit = useCallback(debounce((value) => onSubmit(value), 2000), []);
  const handleInputChange = (e) => {
    const searchString = e.target.value;
    setInputValue(searchString);
    if (searchString !== initialValue) {
      debouncedSubmit(searchString);
    }
  };

  const clearInput = () => {
    setInputValue('');
    onSubmit('');
  };
  return (
    <InputGroup>
      <FormControl
        className='border border-secondary'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Поиск по заголовку'
        aria-label='Input'
        aria-describedby='clear-button'
      />
      <Button as={InputGroup.Text} variant='outline-secondary' onClick={clearInput} id='clear-button'>
        &times;
      </Button>

    </InputGroup>
  );
};
SearchInput.propTypes = {
  initialValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
