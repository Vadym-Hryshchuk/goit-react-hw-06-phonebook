import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterStore = useSelector(state => state.filter);

  return (
    <div>
      <Label>
        Finds contacts by name
        <input
          type="text"
          value={filterStore}
          onChange={evt => dispatch(setFilter(evt.target.value))}
        />
      </Label>
    </div>
  );
};
