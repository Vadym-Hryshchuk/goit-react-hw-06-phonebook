import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { removeContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <p>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(removeContact(id));
          toast.success(`The contact has been deleted`);
        }}
      >
        Remove
      </button>
    </p>
  );
};
