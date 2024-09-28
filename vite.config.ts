import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: '',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
	},
	plugins: [
		vue(),
		viteStaticCopy({
			targets: [
				{
					src: './static/*',
					dest: './web/static',
				},
			],
		}),
	],
	server: {
		host: '0.0.0.0',
		port: 7777,
	},
	publicDir: 'static',
	build: {
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				// 輸出目錄
				dir: 'web',
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith('.css')) {
						//  CSS 文件放入 'css' 文件夾
						return 'static/css/1.4.137.[name].[hash][extname]';
					} else {
						//其他資源文件（如 JS）放入 'assets' 文件夾
						return 'assets/1.4.137.[name].[hash][extname]';
					}
				},
				entryFileNames: 'static/js/1.4.137.[name].[hash].js',
				chunkFileNames: 'static/js/1.4.137.[name].[hash].js',
			},
		},
	},
});
