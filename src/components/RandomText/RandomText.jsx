/* 2. Вынести в отдельный модуль (RandomText.jsx) соответствующий компонент из
 нашего `index.js`. Экспорт сделать именованный. Импортировать в `index.js` с 
 использованием псевдонима `SimpleRandom`. */


import React from 'react'

function RandomText() {
  return (
    <div>
      hallo SimpleRandom
    </div>
  )
}

export default RandomText;
