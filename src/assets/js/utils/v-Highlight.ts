import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

export const useHighlightDirective = () => {
	return {
		mounted(el) {
			const blocks = el.querySelectorAll('pre code');
			blocks.forEach((block) => {
				hljs.highlightElement(block);
			});
		},
		updated(el) {
			const blocks = el.querySelectorAll('pre code');
			blocks.forEach((block) => {
				hljs.highlightElement(block);
			});
		},
	};
};