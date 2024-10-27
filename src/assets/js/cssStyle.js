const cssStyle =
	'.blog {\n' +
	'\twidth: 100% !important;\n' +
	'\tmax-width: 750px !important;\n' +
	'\tpadding-left: -20px !important;\n' +
	'\tpadding-bottom: 20px !important;\n' +
	'\tmargin: auto !important;\n' +
	"\tfont-family: Arial, 'PingFang TC', '微軟正黑體' !important;\n" +
	'\tdisplay: flex !important;\n' +
	'\tflex-direction: column !important;\n' +
	'\tcolor: #333333 !important;\n' +
	"\tfont-feature-settings: 'liga' 0 !important;\n" +
	'}\n' +
	'\n' +
	'.blog h1,\n' +
	'.blog h2,\n' +
	'.blog h3,\n' +
	'.blog h4,\n' +
	'.blog h5,\n' +
	'.blog h6,\n' +
	'.blog p {\n' +
	'\tmargin-top: 0 !important;\n' +
	'\tmargin-bottom: 0 !important;\n' +
	'}\n' +
	'\n' +
	'.blog h1 {\n' +
	'\tfont-family: Arial !important;\n' +
	'\tfont-size: 30px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'\tletter-spacing: 2px !important;\n' +
	'\tfont-weight: 700 !important;\n' +
	'}\n' +
	'\n' +
	'.blog h2 {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 18px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'}\n' +
	'\n' +
	'.blog h3 {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 16px !important;\n' +
	'\tline-height: 1.8 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'\tfont-weight: 400 !important;\n' +
	'}\n' +
	'\n' +
	'.blog h4 {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 14px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'}\n' +
	'\n' +
	'.blog h5 {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 12px !important;\n' +
	'\tline-height: 2.5 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'}\n' +
	'\n' +
	'.blog h6 {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 15px !important;\n' +
	'\tline-height: 1.8 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'}\n' +
	'\n' +
	'.blog p {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 13px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'}\n' +
	'\n' +
	'.blog ol,\n' +
	'.blog ul {\n' +
	'\tmargin-left: 2rem !important; /* ml-8 */\n' +
	'\tlist-style-position: outside !important; /* list-outside */\n' +
	'\tmargin-top: 0.5rem !important; /* !mt-2 */\n' +
	'}\n' +
	'\n' +
	'.blog ol li,\n' +
	'.blog ul li {\n' +
	'\tmargin-top: 0.5rem !important; /* mt-2 */\n' +
	'}\n' +
	'\n' +
	'.blog ol li:first-child,\n' +
	'.blog ul li:first-child {\n' +
	'\tmargin-top: 0 !important; /* first:mt-0 */\n' +
	'}\n' +
	'\n' +
	'.blog ol {\n' +
	'\tlist-style-type: decimal !important; /* list-decimal */\n' +
	'}\n' +
	'\n' +
	'.blog ul {\n' +
	'\tlist-style-type: disc !important; /* list-disc */\n' +
	'}\n' +
	'\n' +
	'.blog blockquote {\n' +
	'\tfont-style: italic !important;\n' +
	'\tborder-left: 4px solid #d1d5db !important; /* border-gray-300 */\n' +
	'\tpadding: 0.5rem 1rem !important; /* p-4 py-2 */\n' +
	'\tmargin-left: 1.5rem !important; /* ml-6 */\n' +
	'\tmargin-top: 1.5rem !important; /* !mt-6 */\n' +
	'\tmargin-bottom: 0.5rem !important; /* !mb-2 */\n' +
	'}\n' +
	'\n' +
	'.blog a {\n' +
	'\tcolor: #1e40af !important; /* text-blue-800 */\n' +
	'\tcursor: pointer !important;\n' +
	'\ttext-decoration: none !important;\n' +
	'}\n' +
	'\n' +
	'.blog a:hover {\n' +
	'\ttext-decoration: underline !important;\n' +
	'}\n' +
	'\n' +
	'.blog hr {\n' +
	'\tborder-color: #9ca3af !important; /* border-gray-400 */\n' +
	'}\n' +
	'\n' +
	'.blog table {\n' +
	'\tborder: 1px solid #000000 !important;\n' +
	'\tborder-collapse: collapse !important;\n' +
	'\tmargin: 0 !important;\n' +
	'\toverflow: hidden !important;\n' +
	'\ttable-layout: fixed !important;\n' +
	'\twidth: 100% !important;\n' +
	'}\n' +
	'\n' +
	'.blog table th,\n' +
	'.blog table td {\n' +
	'\ttext-align: left !important;\n' +
	'\tborder: 1px solid black !important;\n' +
	'\tpadding: 2px 0.5rem !important;\n' +
	'\tposition: relative !important;\n' +
	'\tbox-sizing: border-box !important;\n' +
	'\tmin-width: 1em !important;\n' +
	'\tvertical-align: center !important;\n' +
	'}\n' +
	'\n' +
	'.blog table th {\n' +
	'\ttext-align: left !important;\n' +
	'}\n' +
	'\n' +
	'.blog table p {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 13px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'}\n' +
	'\n' +
	'.blog table th:first-child p {\n' +
	"\tfont-family: 'Arial Black' !important;\n" +
	'}\n' +
	'\n' +
	'.blog figure {\n' +
	'\talign-items: flex-start !important;\n' +
	'\tborder-radius: 0.5rem !important;\n' +
	'\tdisplay: flex !important;\n' +
	'\tflex-direction: column !important;\n' +
	'\tposition: relative !important;\n' +
	'\twidth: 100% !important;\n' +
	'\tmax-width: 100% !important;\n' +
	'}\n' +
	'\n' +
	'.blog figure img {\n' +
	'\twidth: 100% !important;\n' +
	'}\n' +
	'\n' +
	'.blog figure figcaption {\n' +
	'\tposition: absolute !important;\n' +
	'\tbottom: 16px !important;\n' +
	'\tleft: 16px !important;\n' +
	'\tfont-size: 14px !important;\n' +
	'\tcolor: #9f9f9f !important;\n' +
	"\tfont-family: 'Arial' !important;\n" +
	'\tline-height: 19px !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'}\n' +
	'\n' +
	'.blog .tableWrapper {\n' +
	'\toverflow: auto !important;\n' +
	'\twidth: calc(100% - 40px) !important;\n' +
	'}\n' +
	'\n' +
	'.blog .image-link-button {\n' +
	'\tdisplay: block !important;\n' +
	'\twidth: 100px !important;\n' +
	'\ttransition: 0.2s ease !important;\n' +
	'\tmargin-top: 8px !important;\n' +
	'}\n' +
	'\n' +
	'.blog .image-link-button:hover {\n' +
	'\topacity: 0.8 !important;\n' +
	'}\n' +
	'\n' +
	'.blog .image-link-button img {\n' +
	'\twidth: 100% !important;\n' +
	'}\n' +
	'\n' +
	'.remarkBlog {\n' +
	'\tcolor: #333333 !important;\n' +
	'}\n' +
	'\n' +
	'.remarkBlog h5 {\n' +
	"\tfont-family: 'PingFang TC' !important;\n" +
	'\tfont-size: 12px !important;\n' +
	'\tline-height: 2.5 !important;\n' +
	'\tletter-spacing: 0.5px !important;\n' +
	'\tfont-weight: 500 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog {\n' +
	'\tpadding: 0 20px 0 -20px !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog h1 {\n' +
	'\tfont-size: 20px !important;\n' +
	'\tline-height: 1 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog h2 {\n' +
	'\tfont-size: 12px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog h3 {\n' +
	'\tfont-size: 12px !important;\n' +
	'\tline-height: 1.8 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog h4 {\n' +
	'\tfont-size: 10px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog h5 {\n' +
	'\tfont-size: 9px !important;\n' +
	'\tline-height: 2.5 !important;\n' +
	'\tletter-spacing: 1px !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog h6 {\n' +
	'\tfont-size: 12px !important;\n' +
	'\tline-height: 1.8 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog p {\n' +
	'\tfont-size: 11px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog table p {\n' +
	'\tfont-size: 12px !important;\n' +
	'\tline-height: 1.5 !important;\n' +
	'}\n' +
	'\n' +
	'.w767 .blog figure figcaption {\n' +
	'\tfont-size: 10px !important;\n' +
	'}\n' +
	'\n' +
	'@media only screen and (max-width: 767px) {\n' +
	'\t.blog {\n' +
	'\t\tpadding: 0 20px 0 -20px !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog h1 {\n' +
	'\t\tfont-size: 20px !important;\n' +
	'\t\tline-height: 1 !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog h2 {\n' +
	'\t\tfont-size: 12px !important;\n' +
	'\t\tline-height: 1.5 !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog h3 {\n' +
	'\t\tfont-size: 12px !important;\n' +
	'\t\tline-height: 1.8 !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog h4 {\n' +
	'\t\tfont-size: 10px !important;\n' +
	'\t\tline-height: 1.5 !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog h5 {\n' +
	'\t\tfont-size: 9px !important;\n' +
	'\t\tline-height: 2.5 !important;\n' +
	'\t\tletter-spacing: 1px !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog h6 {\n' +
	'\t\tfont-size: 12px !important;\n' +
	'\t\tline-height: 1.8 !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog p {\n' +
	'\t\tfont-size: 11px !important;\n' +
	'\t\tline-height: 1.5 !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog table p {\n' +
	'\t\tfont-size: 12px !important;\n' +
	'\t\tline-height: 1.5 !important;\n' +
	'\t}\n' +
	'\n' +
	'\t.blog figure figcaption {\n' +
	'\t\tfont-size: 10px !important;\n' +
	'\t}\n' +
	'}\n';

export {cssStyle};
