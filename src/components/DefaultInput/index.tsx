import styles from './styles.module.css'

type DefaultInputProps = {
    id: string;
    labelText: string;
    placeholder?: string;
} & React.ComponentProps<'input'>

export function DefaultInput({id, labelText, placeholder }: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} className={styles.input} placeholder={placeholder} />
        </>
    )
}