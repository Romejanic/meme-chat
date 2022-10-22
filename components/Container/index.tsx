import { PropsWithChildren } from "react";
import styles from "./index.module.css";

const Container: React.FC<PropsWithChildren> = (props) => {
    return <main className={styles.container}>
        {props.children}
    </main>;
};

export default Container;