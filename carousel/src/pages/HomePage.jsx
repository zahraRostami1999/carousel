import Carousel from '../components/carousel'
import styles from "./HomeStyles.module.css";

const HomePage = () => {
    return (
        <>
            <div className="w-full h-screen bg-neutral-800">
                <div className="w-full h-1/3">
                    <div className={styles.carousel}>
                        <Carousel />
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;