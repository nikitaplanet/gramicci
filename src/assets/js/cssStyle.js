const cssStyle =
	'' +
	'.blog {\n' +
	"\t font-family: Arial, 'PingFang TC', '微軟正黑體';\n" +
	'\t display: flex;\n' +
	'\t flex-direction: column;\n' +
	'\t gap: 5px;\n' +
	'\t color: #333;\n' +
	"\t font-feature-settings: 'liga' 0;\n" +
	'}\n' +
	' .blog h1 {\n' +
	'\t font-family: Arial;\n' +
	'\t font-size: 30px;\n' +
	'\t line-height: 1;\n' +
	'\t letter-spacing: 2px;\n' +
	'\t font-weight: 500;\n' +
	'}\n' +
	' .blog h2 {\n' +
	"\t font-family: 'PingFang TC';\n" +
	'\t font-size: 18px;\n' +
	'\t line-height: 1.5;\n' +
	'\t letter-spacing: 1px;\n' +
	'\t font-weight: 500;\n' +
	'}\n' +
	' .blog h3 {\n' +
	"\t font-family: 'PingFang TC';\n" +
	'\t font-size: 16px;\n' +
	'\t line-height: 1.8;\n' +
	'\t letter-spacing: 0.5px;\n' +
	'\t font-weight: 400;\n' +
	'}\n' +
	' .blog h4 {\n' +
	"\t font-family: 'PingFang TC';\n" +
	'\t font-size: 14px;\n' +
	'\t line-height: 1.5;\n' +
	'\t letter-spacing: 0.5px;\n' +
	'\t font-weight: 500;\n' +
	'}\n' +
	' .blog h5 {\n' +
	"\t font-family: 'PingFang TC';\n" +
	'\t font-size: 12px;\n' +
	'\t line-height: 2.5;\n' +
	'\t letter-spacing: 0.5px;\n' +
	'\t font-weight: 500;\n' +
	'}\n' +
	' .blog h6 {\n' +
	"\t font-family: 'PingFang TC';\n" +
	'\t font-size: 15px;\n' +
	'\t line-height: 1.8;\n' +
	'\t letter-spacing: 0.5px;\n' +
	'\t font-weight: 500;\n' +
	'}\n' +
	' .blog p {\n' +
	"\t font-family: 'PingFang TC';\n" +
	'\t font-size: 13px;\n' +
	'\t line-height: 1.5;\n' +
	'\t letter-spacing: 0.5px;\n' +
	'\t font-weight: 500;\n' +
	'}\n' +
	' .blog ol, .blog ul {\n' +
	'\t margin-left: 2rem;\n' +
	'\t/* ml-8 */\n' +
	'\t list-style-position: outside;\n' +
	'\t/* list-outside */\n' +
	'\t margin-top: 0.5rem !important;\n' +
	'\t/* !mt-2 */\n' +
	'}\n' +
	' .blog ol li, .blog ul li {\n' +
	'\t margin-top: 0.5rem;\n' +
	'\t/* mt-2 */\n' +
	'}\n' +
	' .blog ol li:first-child, .blog ul li:first-child {\n' +
	'\t margin-top: 0;\n' +
	'\t/* first:mt-0 */\n' +
	'}\n' +
	' .blog ol {\n' +
	'\t list-style-type: decimal;\n' +
	'\t/* list-decimal */\n' +
	'}\n' +
	' .blog ul {\n' +
	'\t list-style-type: disc;\n' +
	'\t/* list-disc */\n' +
	'}\n' +
	' .blog blockquote {\n' +
	'\t font-style: italic;\n' +
	'\t border-left: 4px solid #d1d5db;\n' +
	'\t/* border-gray-300 */\n' +
	'\t padding: 0.5rem 1rem;\n' +
	'\t/* p-4 py-2 */\n' +
	'\t margin-left: 1.5rem;\n' +
	'\t/* ml-6 */\n' +
	'\t margin-top: 1.5rem !important;\n' +
	'\t/* !mt-6 */\n' +
	'\t margin-bottom: 0.5rem !important;\n' +
	'\t/* !mb-2 */\n' +
	'}\n' +
	' .blog a {\n' +
	'\t color: #1e40af;\n' +
	'\t/* text-blue-800 */\n' +
	'\t cursor: pointer;\n' +
	'\t text-decoration: none;\n' +
	'}\n' +
	' .blog a:hover {\n' +
	'\t text-decoration: underline;\n' +
	'}\n' +
	' .blog hr {\n' +
	'\t border-color: #9ca3af;\n' +
	'\t/* border-gray-400 */\n' +
	'}\n' +
	' .blog table {\n' +
	'\t border: 1px solid #9ca3af;\n' +
	'\t/* border-gray-400 */\n' +
	'\t table-layout: fixed;\n' +
	'\t border-collapse: collapse;\n' +
	'\t width: 100%;\n' +
	'}\n' +
	' .blog table th, .blog table td {\n' +
	'\t text-align: left;\n' +
	'\t border: 1px solid #9ca3af;\n' +
	'\t/* border-gray-400 */\n' +
	'\t padding: 0.25rem 0.5rem;\n' +
	'\t/* py-1 px-2 */\n' +
	'\t position: relative;\n' +
	'}\n' +
	' .blog table th {\n' +
	'\t text-align: left;\n' +
	'}\n' +
	' .blog figure {\n' +
	'\t align-items: flex-start;\n' +
	'\t border-radius: 0.5rem;\n' +
	'\t display: flex;\n' +
	'\t flex-direction: column;\n' +
	'\t width: fit-content;\n' +
	'\t position: relative;\n' +
	'\t margin: 0;\n' +
	'\t max-width: 100%;\n' +
	'}\n' +
	' .blog figure figcaption {\n' +
	'\t position: absolute;\n' +
	'\t bottom: 10px;\n' +
	'\t left: 20px;\n' +
	'\t font-size: 18px;\n' +
	'\t color: #9f9f9f;\n' +
	"\t font-family: 'Arial';\n" +
	'\t line-height: 1;\n' +
	'\t font-weight: 700;\n' +
	'\t letter-spacing: 1px;\n' +
	'}\n' +
	' .blog .tableWrapper {\n' +
	'\t overflow: auto;\n' +
	'}\n' +
	' .remarkBlog {\n' +
	'\t color: #333;\n' +
	'}\n' +
	' .remarkBlog h5 {\n' +
	"\t font-family: 'PingFang TC';\n" +
	'\t font-size: 12px;\n' +
	'\t line-height: 2.5;\n' +
	'\t letter-spacing: 0.5px;\n' +
	'\t font-weight: 500;\n' +
	'}\n' +
	' .w767 .blog h1 {\n' +
	'\t font-size: 20px;\n' +
	'\t line-height: 1;\n' +
	'}\n' +
	' .w767 .blog h2 {\n' +
	'\t font-size: 12px;\n' +
	'\t line-height: 1.5;\n' +
	'}\n' +
	' .w767 .blog h3 {\n' +
	'\t font-size: 12px;\n' +
	'\t line-height: 1.8;\n' +
	'}\n' +
	' .w767 .blog h4 {\n' +
	'\t font-size: 10.5px;\n' +
	'\t line-height: 1.5;\n' +
	'}\n' +
	' .w767 .blog h5 {\n' +
	'\t font-size: 9px;\n' +
	'\t line-height: 2.5;\n' +
	'\t letter-spacing: 1px;\n' +
	'}\n' +
	' .w767 .blog h6 {\n' +
	'\t font-size: 12px;\n' +
	'\t line-height: 1.8;\n' +
	'}\n' +
	' .w767 .blog p {\n' +
	'\t font-size: 11px;\n' +
	'\t line-height: 1.5;\n' +
	'}\n' +
	' @media only screen and (max-width: 767px) {\n' +
	'\t .blog h1 {\n' +
	'\t\t font-size: 20px;\n' +
	'\t\t line-height: 1;\n' +
	'\t}\n' +
	'\t .blog h2 {\n' +
	'\t\t font-size: 12px;\n' +
	'\t\t line-height: 1.5;\n' +
	'\t}\n' +
	'\t .blog h3 {\n' +
	'\t\t font-size: 12px;\n' +
	'\t\t line-height: 1.8;\n' +
	'\t}\n' +
	'\t .blog h4 {\n' +
	'\t\t font-size: 10.5px;\n' +
	'\t\t line-height: 1.5;\n' +
	'\t}\n' +
	'\t .blog h5 {\n' +
	'\t\t font-size: 9px;\n' +
	'\t\t line-height: 2.5;\n' +
	'\t\t letter-spacing: 1px;\n' +
	'\t}\n' +
	'\t .blog h6 {\n' +
	'\t\t font-size: 12px;\n' +
	'\t\t line-height: 1.8;\n' +
	'\t}\n' +
	'\t .blog p {\n' +
	'\t\t font-size: 11px;\n' +
	'\t\t line-height: 1.5;\n' +
	'\t}\n' +
	'}\n' +
	'';
export {cssStyle};
