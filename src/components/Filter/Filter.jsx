import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </Label>
  );
};
