import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon,  } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

function handleToggleTheme(event: React.MouseEvent) {
    event.preventDefault();
    setTheme(prevTheme => {
        const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
        return nextTheme;
    })
}

useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}, [theme]);

    return <div className={styles.menu}>
        <a className={styles.menuLink} href="" aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="" aria-label='Ver histórico' title='Ver histórico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="" aria-label='Configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="" aria-label='Alterar tema' title='Alterar tema' onClick={handleToggleTheme}>
            {nextThemeIcon[theme]}
        </a>
    </div>;
}
    