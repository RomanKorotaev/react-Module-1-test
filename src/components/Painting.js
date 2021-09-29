import defaultImage from './default.jpg'

//  Это пример react-компонента. По факту это функция, котрая возвращает нам разметку (родительский тег)
//  Не забівать везде закрівать теги (даже одинарные). Имена  react-компонентов ОБЯЗАТЕЛЬНО писать с БОЛЬШОЙ буквы. 
//  Иначеjsx  не воспримеет её как переменную, а решит что это просто строка с тегом. Ничего не будет рендерится.
function Painting(props) {
    const {  imageUrl = defaultImage, //так прописывается путь к дефолтной картинке
        title,
        authorUrl,
        authorName = 'не известно',
        price } = props;
    return (<div>
        <img src={ imageUrl} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
            Автор: <a href={authorUrl}>{authorName}</a>
        </p>
        <p>Цена: {price}  кредитов</p>
        <p>Доступность:  заканчивается или есть в наличии </p>
        <button type="button">Добавить в корзину</button>
    </div >
    );
}

export default Painting