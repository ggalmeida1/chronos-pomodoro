import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.Heading}>{children}</h1>;
}
    