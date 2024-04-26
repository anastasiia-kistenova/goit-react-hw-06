import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <div className={css.infoContainer}>
        <p className={css.name}>{contact.name}</p>
        <span className={css.icon}>👤</span>
        </div>
      <div className={css.infoContainer}>
        <p className={css.number}>{contact.number}</p>
        <span className={css.icon}>📞</span>
      </div>
      <button className={css.delete} onClick={onDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contacts;