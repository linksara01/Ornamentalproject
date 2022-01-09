import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
        <tr className={styles.trTitle}>
            <th>สินค้า</th>
            <th>ชื่อ</th>
            <th>เพิ่มเติม</th>
            <th>ราคา</th>
            <th>จำนวน</th>
            <th>รวม</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/ปลา1.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
                <span className={styles.name}>ปลา1</span>
            </td>
            <td>
                <span className={styles.extras}>ปลาตัวผู้</span>
            </td>
            <td>
                <span className={styles.price}>500 บาท</span>
            </td>
            <td>
                <span className={styles.quality}>2</span>
            </td>
            <td>
                <span className={styles.total}>1000 บาท</span>
            </td>
          </tr>          
          <tr className={styles.trTitle}>
            <th>สินค้า</th>
            <th>ชื่อ</th>
            <th>เพิ่มเติม</th>
            <th>ราคา</th>
            <th>จำนวน</th>
            <th>รวม</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/ปลา1.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
                <span className={styles.name}>ปลา1</span>
            </td>
            <td>
                <span className={styles.extras}>ปลาตัวผู้</span>
            </td>
            <td>
                <span className={styles.price}>500 บาท</span>
            </td>
            <td>
                <span className={styles.quality}>2</span>
            </td>
            <td>
                <span className={styles.total}>1000 บาท</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
          <div className={styles.wrapper}>
              <h2 className={styles.title}>ราคาในตะกร้า</h2>
              <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>ราคาซื้อ</b> 2000 บาท
          </div>
          <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>ส่วนลด</b> 0 บาท
          </div>
          <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>รวมทั้งหมด</b> 2000 บาท
          </div>
          <button className={styles.button}>จ่ายเงิน</button>
          </div>
      </div>
    </div>
  );
};

export default Cart;
