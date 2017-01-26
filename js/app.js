var my_news = [
	{
		author: 'Вася Печкин',
		text: 'В четверг, четвертого числа'
	},
	{
		author: 'Иван Козлов',
		text: 'Один мой друг, художник и поэт...'
	},
	{
		author: 'Гость',
		text: 'Жил-был у бабушки серенький козлик'
	}
];

//my_news = [];

var Comments = React.createClass({
	render: function() {
		return (
			<div className="comment">
			Нет новостей -- комментировать нечего.
			</div>
		);
	}
});

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsTemplate = data.length > 0 ? data.map(
			function(item, index) {
				return(
					<div key={index}>
						<p className="news__author">{item.author}:</p>
						<p className="news__text">{item.text}</p>
					</div>
				)
			}
		) : <p> К сожалению, новостей нет </p>;

		var allNews = (data.length > 0) ?
					<strong>Всего новостей: {data.length}</strong> :
					"";
		return (
			<div className="news">
			{newsTemplate}
			{allNews}
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
			Всем привет, я компонент App! Теперь я умею отображать новости.
			<News data={my_news} />
			<Comments />
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
