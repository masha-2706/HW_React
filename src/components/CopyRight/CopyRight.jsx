
/*1. Пристрелочная задача. Делаем компонент, который будет отображать "копирайт" 
нашего проекта. Это должен быть параграф, с текстом "Учебный проект. Все права 
защищены. 2024". Для символа копирайта используем `&#169;`.
*/
import styles from './CopyRight.module.css'

function CopyRight() {
    const currentYear = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      <p>Учебный проект. Все права защищены &#169;{currentYear}</p>
    </div>
  )
}

export default CopyRight;
