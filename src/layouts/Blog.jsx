import { useContext, useEffect, useState } from 'react';
import BlogItem from '../components/BlogItem';
import { ArticlesContext } from '../context/ArticlesContext';

const Blog = () => {
	const articles = useContext(ArticlesContext);
	const [visibleArticles, setVisibleArticles] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [articlesPerPage, setArticlesPerPage] = useState(9);



	useEffect(() => {
		const filterArticles = () => {
			const now = new Date();
			const filtered = articles.filter(article => article.publishDate <= now);
			setVisibleArticles(filtered);
		};

		filterArticles(); // Фильтрация при монтировании компонента

		// Устанавливаем таймер для обновления каждый день
		const intervalId = setInterval(filterArticles, 24 * 60 * 60 * 1000);

		return () => clearInterval(intervalId); // Очистка таймера при размонтировании
	}, [articles]);

	useEffect(() => {
		// Устанавливаем количество статей на странице в зависимости от ширины экрана
		const updateArticlesPerPage = () => {
			if (window.innerWidth >= 1280) {
				setArticlesPerPage(9);
			} else if (window.innerWidth >= 768) {
				setArticlesPerPage(8);
			} else {
				setArticlesPerPage(6);
			}
		};

		updateArticlesPerPage();
		window.addEventListener('resize', updateArticlesPerPage);

		return () => {
			window.removeEventListener('resize', updateArticlesPerPage);
		};
	}, []);

	// Определяем индекс первой и последней статьи на текущей странице
	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	const currentArticles = visibleArticles.slice(
		indexOfFirstArticle,
		indexOfLastArticle
	);

	const totalPages = Math.ceil(visibleArticles.length / articlesPerPage);

	// Функции для переключения страниц
	const handleNextPage = () => {
		setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : 1));
		window.scrollTo(0, 0);
	};

	const handlePrevPage = () => {
		setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : totalPages));
		window.scrollTo(0, 0);
	};


	return (
		<section className='flex-1 py-[50px] pb-[100px]'>
			<div className='content'>
				<h2 className='section_title text-center mb-10' data-aos='fade-down'>
					Блог про вивчення англійської мови
				</h2>
				<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
					{currentArticles.map(a => (
						<BlogItem
							key={a.id}
							id={a.id}
							text={a.text}
							category={a.category}
							title={a.title}
							img={a.img}
							date={a.date}
						/>
					))}
				</div>
				<div className='flex justify-center mt-10'>
					<button
						onClick={handlePrevPage}
						className='px-4 py-2 mx-2 bg-[#6890E4] text-white rounded'
					>
						Попередня
					</button>
					<button
						onClick={handleNextPage}
						className='px-4 py-2 mx-2 bg-[#6890E4] text-white rounded'
					>
						Наступна
					</button>
				</div>
			</div>
		</section>
	);
};

export default Blog;
