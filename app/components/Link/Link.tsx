import LinkNext from "next/link";
import styles from "./Link.module.scss";

type LinkProps = {
    href: string;
    children: React.ReactNode;
};

export const Link = ({ href, children }: LinkProps) => {
    return (
        <LinkNext href={href} className={styles.link}>
            {children}
        </LinkNext>
    );
};
