import Contacts from "../Contacts/Contacts";
import css from "./ContactList.module.css"

export default function ContactList({contactsList, onDelete}) {
    return (
        <div>
            <ul className={css.contactsContainer}>
                {contactsList.map((contact) => (
                    <li key={contact.id} className={css.contactsList}>
                        <Contacts data={contact} onDelete={() => onDelete(contact.id)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
