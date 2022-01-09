import styles from "../styles/FishList.module.css";
import FishCard from "./FishCard";

const FishList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ยินดีต้อนรับสู่ร้านค้าปลาสวยงาม</h1>
      <p className={styles.desc}>
        1. ปลากระเบน 2. ปลากัด 3. ปลาทอง 4. ปลาหางนกยูง 5. ปลาคาร์ฟ 6. ปลาเทวดา
        7. ปลานีออน 8. ปลามังกร 9. ปลาสอดหางดาบ 10. ปลาหมอสี
      </p>
      <div className={styles.wrapper}>
        <FishCard />
        <FishCard />
        <FishCard />
        <FishCard />
        <FishCard />
        <FishCard />
        <FishCard />
        <FishCard />
      </div>
    </div>
  );
};

export default FishList;
