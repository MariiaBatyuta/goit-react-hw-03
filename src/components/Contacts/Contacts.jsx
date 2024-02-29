import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import DeleteButton from "../DeleteButton/DeleteButton";
import css from "./Contacts.module.css"

export default function Contacts({ data: { id, name, number}, onDelete }) {
    return (
        <div className={css.contactCard}>
            <div className={css.contactInfo}>
                <div>
                    <FaUser /><p>{name}</p>
                </div>
                <div>
                    <FaPhone /><p>{number}</p>
                </div>
            </div>
            <div className={css.buttonContainer}>
                <DeleteButton onDelete={onDelete} id={id} />
            </div>
        </div>
    );
}