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
		var newsTemplate = data.map(
			function(item, index) {
				return(
					<div key={index}>
						<p className="news__author">{item.author}:</p>
						<p className="news__text">{item.text}</p>
					</div>
				)
			}
		);
		return (
			<div className="news">
			{newsTemplate}
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
