import React, { useCallback, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { debounce } from 'lodash';
import { SearchInputParams } from '../../types/features';

const SearchInput: React.FC<SearchInputParams> = ({ onSubmit, initialValue = '' }) => {
  const [inputValue, setInputValue] = useState(initialValue || '');
  const debouncedSubmit = useCallback(debounce((value: string) => onSubmit(value), 2000), []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <Button variant='outline-secondary' onClick={clearInput} id='clear-button'>
        &times;
      </Button>

    </InputGroup>
  );
};

export default SearchInput;
