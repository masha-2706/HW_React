// 1.  Создайте компонент `SimpleHeading`, который будет возвращать нам заголовок 
// с текстом `Hello, conditional rendering!`. В компоненте, нужно создать переменную, 
// в которую запишете случайное значение. Если значение меньше 0.5 - рендерим заголовок h3 
// с указанным текстом, иначе рендерим заголовок h2.
// 2. В компоненте `RandomText`, нужно после параграфа который там есть, 
//рендерить еще один параграф с текстом `Small value`. Рендерить его нужно только 
//в том случае, если значение переменной `rand` < 0.5.



export default SimpleHeading;

function SimpleHeading() {
    const random = Math.random();
    const text = 'Hello, conditional rendering!';
  return (
    <div>
        {random < 0.5 ? <h3>{text}</h3> : <h2>{text}</h2>}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore!</p>
        {random < 0.5 && <p>Small value</p> }
    </div>

  )
}


