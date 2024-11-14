
/*3. Теперь попробуем создать компонент `PersonalCard`, который будет отвечать за отрисовку карточки
 с данными о разработчике. Карточка содержит:
 - заголовок h3 с ФИО
 - параграф с названием вашей квалификации (не скромничаем, но и не теряем связь с реальностью)
 - параграф "О себе" - здесь напишем пару слов о том, какие мы классные.
 - аватар (картинка - в идеале, с фото). Хорошо будет, чтобы картинка была круглая
*/


import styles from './PersonalCard.module.css'


function PersonalCard() {
  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.personalDescription}>
        <h3>John</h3>
        <p>FrontEnd Entwickler</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tempora sequi, nisi fuga expedita magni reiciendis nemo optio omnis amet.</p>
      </div>
      <div className={styles.personalImage}>
        <img src="https://masterpiecer-images.s3.yandex.net/a05ee5b355a211eeb08cca697c28bd51:upscaled" alt="#" />
      </div>

    </div>
  )
}

export default PersonalCard;
