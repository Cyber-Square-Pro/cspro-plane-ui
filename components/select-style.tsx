import { StylesConfig } from 'react-select';

export const customSelectStyle: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '35px', 
    height: '35px',
    fontSize: '13px',
    borderRadius: '6px',
  }),
  menu: (provided, state) => ({
    ...provided,
    maxHeight: '200px',
    minWidth: '270px'
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '200px', 
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '5px 20px', 
    fontSize: '13px'
  }),
};
