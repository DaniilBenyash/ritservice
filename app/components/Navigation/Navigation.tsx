import styles from "./Navigation.module.scss";
import { Link } from "@/app/components/Link";

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <Link href="/catalog">Каталог</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/our-projects">Наши работы</Link>
            <Link href="/contacts">Контакты</Link>
        </div>
    );
};
