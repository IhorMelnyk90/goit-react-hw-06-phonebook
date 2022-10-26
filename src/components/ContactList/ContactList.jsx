// import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';
import * as actions from '../redux/actions';
import {ListLi, ListBtnDelete} from './ContactForm.styled'


const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const removeContact = id => dispatch(actions.deleteContact(id));

  const elements = contacts.map(({ name, number, id }) => {
    return (
      <ListLi key={id}>
        {name} {number}
        <ListBtnDelete onClick={() => removeContact(id)}>
          Delete
        </ListBtnDelete>
      </ListLi>
    );
  });
  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default ContactList;

// export default function ContactList({ items, removeContact }) {

//   const elements = items.map(({ name, number, id }) => {
//     return (
//       <ListLi key={id}>
//         {name} {number}
//         <ListBtnDelete onClick={() => removeContact(id)}>
//           Delete
//         </ListBtnDelete>
//       </ListLi>
//     );
//   });
//   return (
//     <>
//       <ul>{elements}</ul>
//     </>
//   );
// }

// ContactList.defaultProps = {
//   items: [],
// };

// ContactList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired
//     })
//   ),
//   removeContact: PropTypes.func.isRequired,
// };
