import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>หมายเลขการสั่งซื้อ</th>
              <th>ชื่อลูกค้า</th>
              <th>ที่อยู่</th>
              <th>รวม</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>15421312</span>
              </td>
              <td>
                <span className={styles.name}>จอน สมิธ</span>
              </td>
              <td>
                <span className={styles.address}>
                  50 ถ.บางประกง ต.ศรีใหญ่ อ.เมือง จ.ศรีราชา 90114
                </span>
              </td>
              <td>
                <span className={styles.total}>1000 บาท</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image className={styles.checkIcon} src="/img/paid.png" width={30} height={30} alt="" />
            <span>จ่ายเงินแล้ว</span>
            <div className={styles.checkIcon}>
              <Image className={styles.checkIcon} src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>กำลังจัดส่ง</span>
            <div className={styles.checkIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>จัดส่งเรียบร้อยแล้ว</span>
            <div className={styles.checkIcon}>
              <Image src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
        </div>
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
          <button disable className={styles.button}>
            จ่ายเงิน
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
