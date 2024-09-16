import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ArticlesProvider } from './context/ArticlesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ArticlesProvider>
		<App />
	</ArticlesProvider>
);
