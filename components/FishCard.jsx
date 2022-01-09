import styles from "../styles/FishCard.module.css";
import Image from "next/image";

const FishCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/ปลา1.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>ปลา 1</h1>
      <span className={styles.price}>500 บาท</span>
      <p className={styles.desc}>ปลาพันธ์ดี ขายตามท้องตลาด</p>
    </div>
  );
};

export default FishCard;
