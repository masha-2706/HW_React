/*5. Делаем компонент `Advantages`. Он будет отрисовывать преимущества работы с нами. 
Это будет список наших "скиллов". Он содержит 3 скилла: Ответственность, Качество, Оперативность. 
Каждый скилл рисуем как div, в котором есть заголовок h6 с названием скилла, и параграф с кратким 
описанием (например, "Отвечаю за каждую строчку кода, клянусь честное слово!"). И стилизуем список. 
Делаем так, чтобы наши элементы списка размещались бы в одну строку.
*/

import styles from './Advantages.module.css'

function Advantages() {
    return (
        <div className={styles.personalInformation}>
            <div className={styles.responsibility}>
                <h6>Ответственность</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo.</p>
            </div>

            <div className={styles.quality}>
                <h6>Качество</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className={styles.efficiency}>
                <h6>Оперативность</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta vel consectetur harum facere esse?</p>
            </div>

        </div>
    )
}

export default Advantages
