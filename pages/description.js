import styles from "../styles/Description.module.css";
import Image from "next/image";

export default function Description() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <p className={styles.title}>
          HELLO,<i>TURING!</i>
        </p>
        <p className={`${styles.description} ${styles.firstDescription}`}>
          Менторская программа “H>T!” была начата в 2018 году с желанием помочь
          студентам найти свой путь <i className={styles.italic}>джедая</i>
        </p>
        <div className={styles.descriptionWithImage}>
          <p className={styles.description}>
            в обширном мире Software Engineering посредством непрерывного
            менторства и в{" "}
            <i className={styles.italic}>обход университетской бюрократии</i>
          </p>
          <Image
            src={"/turing.png"}
            width={400}
            className={styles.image}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
}
