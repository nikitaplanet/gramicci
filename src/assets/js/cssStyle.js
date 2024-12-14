const cssStyle = '.blog {\n' +
	'\t width: 100%;\n' +
	'\t max-width: 700px;\n' +
	'\t padding-left: -20px;\n' +
	'\t padding-bottom: 20px;\n' +
	'\t margin: auto;\n' +
	'\t font-family: Arial, \'PingFang TC\', \'微軟正黑體\';\n' +
	'\t display: flex;\n' +
	'\t flex-direction: column;\n' +
	'\t color: #333;\n' +
	'\t font-feature-settings: \'liga\' 0;\n' +
	'}\n' +
	' .blog h1, .blog h2, .blog h3, .blog h4, .blog h5, .blog h6, .blog p {\n' +
	'\t margin-top: 0 !important;\n' +
	'\t margin-bottom: 0 !important;\n' +
	'}\n' +
	' .blog h1 {\n' +
	'\t font-family: Arial !important;\n' +
	'\t font-size: 30px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'\t letter-spacing: 1px !important;\n' +
	'\t font-weight: 700 !important;\n' +
	'\t padding: 0 !important;\n' +
	'\t margin: 0 !important;\n' +
	'}\n' +
	' .blog h2 {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 18px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'\t padding: 0 !important;\n' +
	'\t margin: 0 !important;\n' +
	'}\n' +
	' .blog h3 {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 16px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'\t font-weight: 400 !important;\n' +
	'\t padding: 0 !important;\n' +
	'\t margin: 0 !important;\n' +
	'}\n' +
	' .blog h4 {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 16px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'\t padding: 0 !important;\n' +
	'\t margin: 0 !important;\n' +
	'}\n' +
	' .blog h5 {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 2.5 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'\t padding: 0 !important;\n' +
	'\t margin: 0 !important;\n' +
	'}\n' +
	' .blog h6 {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 20px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'\t padding: 0 !important;\n' +
	'\t margin: 0 !important;\n' +
	'}\n' +
	' .blog p {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'\t min-height: 20px !important;\n' +
	'\t padding: 0 !important;\n' +
	'\t margin: 0 !important;\n' +
	'}\n' +
	' .blog ol, .blog ul {\n' +
	'\t margin-left: 2rem !important;\n' +
	'\t list-style-position: outside !important;\n' +
	'\t margin-top: 0.5rem !important;\n' +
	'}\n' +
	' .blog ol li, .blog ul li {\n' +
	'\t margin-top: 0 !important;\n' +
	'\t list-style-position: outside !important;\n' +
	'\t font-size: 16px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'}\n' +
	' .blog ol li:first-child, .blog ul li:first-child {\n' +
	'\t margin-top: 0 !important;\n' +
	'}\n' +
	' .blog ol li p, .blog ul li p {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 16px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'\t font-weight: 400 !important;\n' +
	'}\n' +
	' .blog ol {\n' +
	'\t margin: 0 !important;\n' +
	'\t list-style-type: decimal !important;\n' +
	'\t padding: 0 0 0 24px !important;\n' +
	'}\n' +
	' .blog ul {\n' +
	'\t margin: 0 !important;\n' +
	'\t list-style-type: none !important;\n' +
	'\t padding: 0 0 0 17.5px !important;\n' +
	'}\n' +
	' .blog ul li {\n' +
	'\t position: relative !important;\n' +
	'}\n' +
	' .blog ul li::before {\n' +
	'\t content: "" !important;\n' +
	'\t position: absolute !important;\n' +
	'\t left: -10px !important;\n' +
	'\t top: 15.5px !important;\n' +
	'\t transform: translateY(-50%) !important;\n' +
	'\t width: 4px !important;\n' +
	'\t height: 4px !important;\n' +
	'\t background-color: black !important;\n' +
	'\t border-radius: 50% !important;\n' +
	'}\n' +
	' .blog blockquote {\n' +
	'\t font-style: italic !important;\n' +
	'\t border-left: 4px solid #d1d5db !important;\n' +
	'\t padding: 0.5rem 1rem !important;\n' +
	'\t margin-left: 1.5rem !important;\n' +
	'\t margin-top: 1.5rem !important;\n' +
	'\t margin-bottom: 0.5rem !important;\n' +
	'}\n' +
	' .blog a {\n' +
	'\t color: #1e40af !important;\n' +
	'\t cursor: pointer !important;\n' +
	'\t text-decoration: none !important;\n' +
	'}\n' +
	' .blog a:hover {\n' +
	'\t text-decoration: underline !important;\n' +
	'}\n' +
	' .blog hr {\n' +
	'\t border-color: #9ca3af !important;\n' +
	'}\n' +
	' .blog table {\n' +
	'\t border: 1px solid #000 !important;\n' +
	'\t border-collapse: collapse !important;\n' +
	'\t margin: 0 !important;\n' +
	'\t overflow: hidden !important;\n' +
	'\t table-layout: fixed !important;\n' +
	'\t min-width: 100% !important;\n' +
	'\t width: 100% !important;\n' +
	'}\n' +
	' .blog table th, .blog table td {\n' +
	'\t text-align: left !important;\n' +
	'\t border: 1px solid black !important;\n' +
	'\t padding: 2px 0.5rem !important;\n' +
	'\t position: relative !important;\n' +
	'\t box-sizing: border-box !important;\n' +
	'\t min-width: 1em !important;\n' +
	'\t vertical-align: center !important;\n' +
	'}\n' +
	' .blog table p {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 18px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'}\n' +
	' .blog table th:first-child p, .blog table tr:first-child td:first-child p {\n' +
	'\t font-family: \'Arial Black\' !important;\n' +
	'}\n' +
	' .blog table th:first-child, .blog table td:first-child {\n' +
	'\t width: 290px !important;\n' +
	'}\n' +
	' .blog figure {\n' +
	'\t align-items: flex-start !important;\n' +
	'\t border-radius: 0.5rem !important;\n' +
	'\t display: flex !important;\n' +
	'\t flex-direction: column !important;\n' +
	'\t position: relative !important;\n' +
	'\t width: 100% !important;\n' +
	'\t max-width: 100% !important;\n' +
	'}\n' +
	' .blog figure img {\n' +
	'\t width: 100% !important;\n' +
	'}\n' +
	' .blog figure figcaption {\n' +
	'\t position: absolute !important;\n' +
	'\t bottom: 15px !important;\n' +
	'\t left: 15px !important;\n' +
	'\t font-size: 18px !important;\n' +
	'\t color: #9f9f9f !important;\n' +
	'\t font-family: \'Arial\' !important;\n' +
	'\t line-height: 19px !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'}\n' +
	' .blog .tableWrapper {\n' +
	'\t overflow: auto !important;\n' +
	'\t width: calc(100% - 40px) !important;\n' +
	'}\n' +
	' .blog .image-link-button {\n' +
	'\t display: block !important;\n' +
	'\t width: 153px !important;\n' +
	'\t transition: 0.2s ease !important;\n' +
	'\t margin-top: 8px !important;\n' +
	'}\n' +
	' .blog .image-link-button:hover {\n' +
	'\t opacity: 0.8 !important;\n' +
	'}\n' +
	' .blog .image-link-button img {\n' +
	'\t width: 100% !important;\n' +
	'}\n' +
	' .remarkBlog {\n' +
	'\t color: #333 !important;\n' +
	'\t margin-top: 20px !important;\n' +
	'}\n' +
	' .remarkBlog h5 {\n' +
	'\t font-family: \'PingFang TC\' !important;\n' +
	'\t font-size: 13px !important;\n' +
	'\t line-height: 2.5 !important;\n' +
	'\t letter-spacing: 0.5px !important;\n' +
	'\t font-weight: 500 !important;\n' +
	'}\n' +
	' .w767 .blog {\n' +
	'\t padding: 0 20px 0 -20px !important;\n' +
	'}\n' +
	' .w767 .blog h1 {\n' +
	'\t font-size: 20px !important;\n' +
	'\t line-height: 1 !important;\n' +
	'}\n' +
	' .w767 .blog h2 {\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'}\n' +
	' .w767 .blog h3 {\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'}\n' +
	' .w767 .blog h4 {\n' +
	'\t font-size: 10px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'}\n' +
	' .w767 .blog h5 {\n' +
	'\t font-size: 9px !important;\n' +
	'\t line-height: 2.5 !important;\n' +
	'\t letter-spacing: 1px !important;\n' +
	'}\n' +
	' .w767 .blog h6 {\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'}\n' +
	' .w767 .blog p {\n' +
	'\t font-size: 11px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'}\n' +
	' .w767 .blog ul li, .w767 .blog ol li {\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'}\n' +
	' .w767 .blog ul li p, .w767 .blog ol li p {\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 1.8 !important;\n' +
	'}\n' +
	' .w767 .blog ol {\n' +
	'\t padding: 0 0 0 19.5px !important;\n' +
	'}\n' +
	' .w767 .blog ul li::before {\n' +
	'\t top: 11.5px !important;\n' +
	'}\n' +
	' .w767 .blog table p {\n' +
	'\t font-size: 12px !important;\n' +
	'\t line-height: 1.5 !important;\n' +
	'\t letter-spacing: 0 !important;\n' +
	'}\n' +
	' .w767 .blog table th, .w767 .blog table td {\n' +
	'\t padding: 2px 0.25rem !important;\n' +
	'}\n' +
	' .w767 .blog table th:first-child, .w767 .blog table td:first-child {\n' +
	'\t width: 171px !important;\n' +
	'}\n' +
	' .w767 .blog figure figcaption {\n' +
	'\t font-size: 10px !important;\n' +
	'}\n' +
	' .w767 .remarkBlog h5 {\n' +
	'\t font-size: 12px !important;\n' +
	'}\n' +
	' .w767 .image-link-button {\n' +
	'\t width: 108px !important;\n' +
	'}\n' +
	' @media only screen and (max-width: 767px) {\n' +
	'\t .blog {\n' +
	'\t\t padding: 0 20px 0 -20px !important;\n' +
	'\t}\n' +
	'\t .blog h1 {\n' +
	'\t\t font-size: 20px !important;\n' +
	'\t\t line-height: 1 !important;\n' +
	'\t}\n' +
	'\t .blog h2 {\n' +
	'\t\t font-size: 12px !important;\n' +
	'\t\t line-height: 1.5 !important;\n' +
	'\t}\n' +
	'\t .blog h3 {\n' +
	'\t\t font-size: 12px !important;\n' +
	'\t\t line-height: 1.8 !important;\n' +
	'\t}\n' +
	'\t .blog h4 {\n' +
	'\t\t font-size: 10px !important;\n' +
	'\t\t line-height: 1.5 !important;\n' +
	'\t}\n' +
	'\t .blog h5 {\n' +
	'\t\t font-size: 9px !important;\n' +
	'\t\t line-height: 2.5 !important;\n' +
	'\t\t letter-spacing: 1px !important;\n' +
	'\t}\n' +
	'\t .blog h6 {\n' +
	'\t\t font-size: 12px !important;\n' +
	'\t\t line-height: 1.8 !important;\n' +
	'\t}\n' +
	'\t .blog p {\n' +
	'\t\t font-size: 11px !important;\n' +
	'\t\t line-height: 1.5 !important;\n' +
	'\t}\n' +
	'\t .blog ul li, .blog ol li {\n' +
	'\t\t font-size: 12px !important;\n' +
	'\t\t line-height: 1.8 !important;\n' +
	'\t}\n' +
	'\t .blog ul li p, .blog ol li p {\n' +
	'\t\t font-size: 12px !important;\n' +
	'\t\t line-height: 1.8 !important;\n' +
	'\t}\n' +
	'\t .blog ol {\n' +
	'\t\t padding: 0 0 0 19.5px !important;\n' +
	'\t}\n' +
	'\t .blog ul li::before {\n' +
	'\t\t top: 11.5px !important;\n' +
	'\t}\n' +
	'\t .blog table p {\n' +
	'\t\t font-size: 12px !important;\n' +
	'\t\t line-height: 1.5 !important;\n' +
	'\t\t letter-spacing: 0 !important;\n' +
	'\t}\n' +
	'\t .blog table th, .blog table td {\n' +
	'\t\t padding: 2px 0.25rem !important;\n' +
	'\t}\n' +
	'\t .blog table th:first-child, .blog table td:first-child {\n' +
	'\t\t width: 171px !important;\n' +
	'\t}\n' +
	'\t .blog figure figcaption {\n' +
	'\t\t font-size: 10px !important;\n' +
	'\t}\n' +
	'\t .remarkBlog h5 {\n' +
	'\t\t font-size: 12px !important;\n' +
	'\t}\n' +
	'\t .image-link-button {\n' +
	'\t\t width: 108px !important;\n' +
	'\t}\n' +
	'}\n' +
	' ';
export {cssStyle};
