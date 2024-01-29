import styles from "./Header.module.scss";
import { lato } from "@/app/ui/fonts";
import { Logo } from "@/app/ui/logo";
import { Navigation } from "../Navigation";
import { Link } from "../Link";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.section}>
                <Link href="/">
                    <div className={styles.left_section} >
                        <Logo width={50} height={50} />
                        <h3 className={`${styles.title} ${lato.className} antialiased`}>
                            СЕРВИС
                        </h3>
                    </div>
                </Link>
                <Navigation />
                <div>
                    <p className={styles.phone_number}>+375 (29) 266-47-23</p>
                </div>
            </div>
        </header>
    );
};
