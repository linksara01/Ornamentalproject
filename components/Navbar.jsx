import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div class={styles.container}>
      <div class={styles.item}>
        <div class={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>Order Now</div>
        <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div class={styles.item}>
        <ul className={styles.list}>
            <li className={styles.listItem}>หน้าแรก</li>
            <li className={styles.listItem}>เลือกซื้อปลา</li>
            <li className={styles.listItem}>Menu</li>
            <Image src="/img/fish.png" alt="" width="100px" height="69px" />
            <li className={styles.listItem}>ขายคืน</li>
            <li className={styles.listItem}>การจัดส่ง</li>
            <li className={styles.listItem}>ช่องทางติดต่อ</li>
        </ul>
        </div> 
      <div class={styles.item}>
          <div class={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div class={styles.counter}>2</div>

            </div> 
      </div>
    </div>
  );
};

export default Navbar;
