import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const fish = {
    id: 1,
    img: "/img/ปลา1.jpg",
    name: "ปลา1",
    price: [500, 700, 1000],
    desc: "ปลาสายพันธ์ดีสีสวยงาม",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={fish.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{fish.name}</h1>
        <span className={styles.price}>{fish.price[size]} บาท </span>
        <p className={styles.desc}>{fish.desc}</p>
        <h3 className={styles.choose}>เลือกขนาดที่ต้องการ</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/fish.png" layout="fill" alt="" />
            <span className={styles.number}>เล็ก</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/fish.png" layout="fill" alt="" />
            <span className={styles.number}>กลาง</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/fish.png" layout="fill" alt="" />
            <span className={styles.number}>ใหญ่ </span>
          </div>
        </div>
        <h3 className={styles.choose}>เลือกเพิ่มเติม</h3>
        <div className={styles.moreOption}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="male"
              name="male"
              className={styles.checkbox}
            />
            <label htmlFor="double">ปลาตัวผู้</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="female"
              name="female"
              className={styles.checkbox}
            />
            <label htmlFor="double">ปลาตัวเมีย</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}> Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
