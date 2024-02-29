import css from "./DeleteButton.module.css"

export default function DeleteButton({onDelete}) {
    return (
        <button type="button" className={css.button} onClick={onDelete}>Delete</button>
    )
}