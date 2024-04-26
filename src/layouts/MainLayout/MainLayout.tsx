import { Button } from "antd";
import styles from "./mainLayout.module.scss";
const MainLayout = () => {
    return (
        <div className={styles.background}>
            <div>
                <p className={styles.title}>Header</p>
                <p className={styles.title}>AsyncRaceGameTitle</p>
                <div className={styles.buttons}>
                    <Button className={styles.button} type="primary">
                        <p>Garage</p>
                    </Button>
                    <Button className={styles.button} type="primary">
                        <p>Winners</p>
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default MainLayout;
