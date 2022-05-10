import styles from "../styles/InfoList.module.css";
import Image from "next/image";

export default function InfoList() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <p className={styles.title}>Как это работает?</p>
        <div className={styles.list}>
          <div className={styles.listComponent}>
            <p className={styles.componentTitle}>&#62; Легко</p>
            <p className={styles.componentDescription}>
              делаем всё в обход университетской бюрократии
            </p>
          </div>
          <hr className={styles.new} />
          <div className={styles.listComponent}>
            <p className={styles.componentTitle}>&#62; Гибко</p>
            <p className={styles.componentDescription}>
              нет ничего “утвержденного”, подстраиваемся под конкретные нужды и
              потребности менти
            </p>
          </div>
          <hr className={styles.new} />
          <div className={styles.listComponent}>
            <p className={styles.componentTitle}>&#62; Душевно</p>
            <p className={styles.componentDescription}>
              качественные ментор-менти отношения в неформальном стиле
            </p>
          </div>
          <hr className={styles.new} />
          <div className={styles.listComponent}>
            <p className={styles.componentTitle}>&#62; Преемственно</p>
            <p className={styles.componentDescription}>
              знания и опыт передаются от старшекурсников и выпускников к
              младшекурсникам
            </p>
          </div>
          <hr className={styles.new} />
          <div className={styles.listComponent}>
            <p className={styles.componentTitle}>&#62; Понятно</p>
            <p className={styles.componentDescription}>
              это не еще одни курсы по очередному языку программирования, или
              малопонятные гостевые лекции и воркшопы, это дельные,
              индивидуальные советы и компасное направление, которое внесёт
              ясность в то, что, как и зачем нужно делать
            </p>
          </div>
          <hr className={styles.new} />
        </div>

        <button className={styles.actionButton}>ПОГНАЛИ!</button>
      </div>
    </div>
  );
}
