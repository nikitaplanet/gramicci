const cssStyle = '// 模板樣式\n' +
	'.blog {\n' +
	'\twidth: 100%;\n' +
	'\tmax-width: 750px;\n' +
	'\tpadding-left: -20px;\n' +
	'\tpadding-bottom: 20px;\n' +
	'\tmargin: auto;\n' +
	'\tfont-family: Arial, \'PingFang TC\', \'微軟正黑體\';\n' +
	'\tdisplay: flex;\n' +
	'\tflex-direction: column;\n' +
	'\tcolor: #333333;\n' +
	'\tfont-feature-settings: \'liga\' 0;\n' +
	'\n' +
	'\t> * {\n' +
	'\t\t// drag drop front content\n' +
	'\t\tmargin-left: 20px;\n' +
	'\t}\n' +
	'\n' +
	'\th1, h2, h3, h4, h5, h6, p {\n' +
	'\t\tmargin-top: 0;\n' +
	'\t\tmargin-bottom: 0;\n' +
	'\t}\n' +
	'\n' +
	'\th1 {\n' +
	'\t\tfont-family: Arial;\n' +
	'\t\tfont-size: 30px;\n' +
	'\t\tline-height: 1.5;\n' +
	'\t\tletter-spacing: 2px;\n' +
	'\t\tfont-weight: 700;\n' +
	'\t}\n' +
	'\n' +
	'\th2 {\n' +
	'\t\tfont-family: \'PingFang TC\';\n' +
	'\t\tfont-size: 18px;\n' +
	'\t\tline-height: 1.5;\n' +
	'\t\tletter-spacing: 0.5px;\n' +
	'\t\tfont-weight: 500;\n' +
	'\t}\n' +
	'\n' +
	'\th3 {\n' +
	'\t\tfont-family: \'PingFang TC\';\n' +
	'\t\tfont-size: 16px;\n' +
	'\t\tline-height: 1.8;\n' +
	'\t\tletter-spacing: 0.5px;\n' +
	'\t\tfont-weight: 400;\n' +
	'\t}\n' +
	'\n' +
	'\th4 {\n' +
	'\t\tfont-family: \'PingFang TC\';\n' +
	'\t\tfont-size: 14px;\n' +
	'\t\tline-height: 1.5;\n' +
	'\t\tletter-spacing: 0.5px;\n' +
	'\t\tfont-weight: 500;\n' +
	'\t}\n' +
	'\n' +
	'\th5 {\n' +
	'\t\tfont-family: \'PingFang TC\';\n' +
	'\t\tfont-size: 12px;\n' +
	'\t\tline-height: 2.5;\n' +
	'\t\tletter-spacing: 0.5px;\n' +
	'\t\tfont-weight: 500;\n' +
	'\t}\n' +
	'\n' +
	'\th6 {\n' +
	'\t\tfont-family: \'PingFang TC\';\n' +
	'\t\tfont-size: 15px;\n' +
	'\t\tline-height: 1.8;\n' +
	'\t\tletter-spacing: 0.5px;\n' +
	'\t\tfont-weight: 500;\n' +
	'\t}\n' +
	'\n' +
	'\tp {\n' +
	'\t\tfont-family: \'PingFang TC\';\n' +
	'\t\tfont-size: 13px;\n' +
	'\t\tline-height: 1.5;\n' +
	'\t\tletter-spacing: 0.5px;\n' +
	'\t\tfont-weight: 500;\n' +
	'\t}\n' +
	'\n' +
	'\tol,\n' +
	'\tul {\n' +
	'\t\tmargin-left: 2rem; /* ml-8 */\n' +
	'\t\tlist-style-position: outside; /* list-outside */\n' +
	'\t\tmargin-top: 0.5rem !important; /* !mt-2 */\n' +
	'\n' +
	'\t\tli {\n' +
	'\t\t\tmargin-top: 0.5rem; /* mt-2 */\n' +
	'\n' +
	'\t\t\t&:first-child {\n' +
	'\t\t\t\tmargin-top: 0; /* first:mt-0 */\n' +
	'\t\t\t}\n' +
	'\t\t}\n' +
	'\t}\n' +
	'\n' +
	'\tol {\n' +
	'\t\tlist-style-type: decimal; /* list-decimal */\n' +
	'\t}\n' +
	'\n' +
	'\tul {\n' +
	'\t\tlist-style-type: disc; /* list-disc */\n' +
	'\t}\n' +
	'\n' +
	'\tblockquote {\n' +
	'\t\tfont-style: italic;\n' +
	'\t\tborder-left: 4px solid #d1d5db; /* border-gray-300 */\n' +
	'\t\tpadding: 0.5rem 1rem; /* p-4 py-2 */\n' +
	'\t\tmargin-left: 1.5rem; /* ml-6 */\n' +
	'\t\tmargin-top: 1.5rem !important; /* !mt-6 */\n' +
	'\t\tmargin-bottom: 0.5rem !important; /* !mb-2 */\n' +
	'\t}\n' +
	'\n' +
	'\ta {\n' +
	'\t\tcolor: #1e40af; /* text-blue-800 */\n' +
	'\t\tcursor: pointer;\n' +
	'\t\ttext-decoration: none;\n' +
	'\n' +
	'\t\t&:hover {\n' +
	'\t\t\ttext-decoration: underline;\n' +
	'\t\t}\n' +
	'\t}\n' +
	'\n' +
	'\thr {\n' +
	'\t\tborder-color: #9ca3af; /* border-gray-400 */\n' +
	'\t}\n' +
	'\n' +
	'\ttable {\n' +
	'\t\tborder: 1px solid #000000;\n' +
	'\t\tborder-collapse: collapse;\n' +
	'\t\tmargin: 0;\n' +
	'\t\toverflow: hidden;\n' +
	'\t\ttable-layout: fixed;\n' +
	'\t\twidth: 100%;\n' +
	'\n' +
	'\t\tth,\n' +
	'\t\ttd {\n' +
	'\t\t\ttext-align: left;\n' +
	'\t\t\tborder: 1px solid black;\n' +
	'\t\t\tpadding: 2px 0.5rem;\n' +
	'\t\t\tposition: relative;\n' +
	'\t\t\tbox-sizing: border-box;\n' +
	'\t\t\tmin-width: 1em;\n' +
	'\t\t\tvertical-align: center;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\tth {\n' +
	'\t\t\ttext-align: left;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\tp {\n' +
	'\t\t\tfont-family: \'PingFang TC\';\n' +
	'\t\t\tfont-size: 13px;\n' +
	'\t\t\tline-height: 1.5;\n' +
	'\t\t\tletter-spacing: 0.5px;\n' +
	'\t\t\tfont-weight: 500;\n' +
	'\t\t}\n' +
	'\t}\n' +
	'\n' +
	'\tfigure {\n' +
	'\t\talign-items: flex-start;\n' +
	'\t\tborder-radius: 0.5rem;\n' +
	'\t\tdisplay: flex;\n' +
	'\t\tflex-direction: column;\n' +
	'\t\tposition: relative;\n' +
	'\t\twidth: calc(100% - 40px);\n' +
	'\t\tmax-width: 100%;\n' +
	'\n' +
	'\t\timg {\n' +
	'\t\t\twidth: 100%;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\tfigcaption {\n' +
	'\t\t\tposition: absolute;\n' +
	'\t\t\tbottom: 10px;\n' +
	'\t\t\tleft: 20px;\n' +
	'\t\t\tfont-size: 18px;\n' +
	'\t\t\tcolor: #9f9f9f;\n' +
	'\t\t\tfont-family: \'Arial\';\n' +
	'\t\t\tline-height: 1;\n' +
	'\t\t\tfont-weight: 500;\n' +
	'\t\t\tletter-spacing: 1px;\n' +
	'\t\t}\n' +
	'\t}\n' +
	'\n' +
	'\t.tableWrapper {\n' +
	'\t\toverflow: auto;\n' +
	'\t\twidth: calc(100% - 40px);\n' +
	'\t}\n' +
	'\n' +
	'\t.image-link-button {\n' +
	'\t\tdisplay: block;\n' +
	'\t\twidth: 100px;\n' +
	'\t\ttransition: 0.2s ease;\n' +
	'\t\tmargin-top: 8px;\n' +
	'\n' +
	'\t\t&:hover {\n' +
	'\t\t\topacity: 0.8;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\timg {\n' +
	'\t\t\twidth: 100%;\n' +
	'\t\t}\n' +
	'\t}\n' +
	'}\n' +
	'\n' +
	'.remarkBlog {\n' +
	'\tcolor: #333333;\n' +
	'\n' +
	'\th5 {\n' +
	'\t\tfont-family: \'PingFang TC\';\n' +
	'\t\tfont-size: 12px;\n' +
	'\t\tline-height: 2.5;\n' +
	'\t\tletter-spacing: 0.5px;\n' +
	'\t\tfont-weight: 500;\n' +
	'\t}\n' +
	'}\n' +
	'\n' +
	'.w767 {\n' +
	'\t.blog {\n' +
	'\t\tpadding: 0 20px 0 -20px;\n' +
	'\n' +
	'\t\th1 {\n' +
	'\t\t\tfont-size: 20px;\n' +
	'\t\t\tline-height: 1;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th2 {\n' +
	'\t\t\tfont-size: 12px;\n' +
	'\t\t\tline-height: 1.5;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th3 {\n' +
	'\t\t\tfont-size: 12px;\n' +
	'\t\t\tline-height: 1.8;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th4 {\n' +
	'\t\t\tfont-size: 10.5px;\n' +
	'\t\t\tline-height: 1.5;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th5 {\n' +
	'\t\t\tfont-size: 9px;\n' +
	'\t\t\tline-height: 2.5;\n' +
	'\t\t\tletter-spacing: 1px;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th6 {\n' +
	'\t\t\tfont-size: 12px;\n' +
	'\t\t\tline-height: 1.8;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\tp {\n' +
	'\t\t\tfont-size: 11px;\n' +
	'\t\t\tline-height: 1.5;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\ttable {\n' +
	'\t\t\tp {\n' +
	'\t\t\t\tfont-size: 12px;\n' +
	'\t\t\t\tline-height: 1.5;\n' +
	'\t\t\t}\n' +
	'\t\t}\n' +
	'\t}\n' +
	'}\n' +
	'\n' +
	'@media only screen and (max-width: 767px) {\n' +
	'\t.blog {\n' +
	'\t\tpadding: 0 20px 0 -20px;\n' +
	'\n' +
	'\t\th1 {\n' +
	'\t\t\tfont-size: 20px;\n' +
	'\t\t\tline-height: 1;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th2 {\n' +
	'\t\t\tfont-size: 12px;\n' +
	'\t\t\tline-height: 1.5;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th3 {\n' +
	'\t\t\tfont-size: 12px;\n' +
	'\t\t\tline-height: 1.8;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th4 {\n' +
	'\t\t\tfont-size: 10.5px;\n' +
	'\t\t\tline-height: 1.5;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th5 {\n' +
	'\t\t\tfont-size: 9px;\n' +
	'\t\t\tline-height: 2.5;\n' +
	'\t\t\tletter-spacing: 1px;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\th6 {\n' +
	'\t\t\tfont-size: 12px;\n' +
	'\t\t\tline-height: 1.8;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\tp {\n' +
	'\t\t\tfont-size: 11px;\n' +
	'\t\t\tline-height: 1.5;\n' +
	'\t\t}\n' +
	'\n' +
	'\t\ttable {\n' +
	'\t\t\tp {\n' +
	'\t\t\t\tfont-size: 12px;\n' +
	'\t\t\t\tline-height: 1.5;\n' +
	'\t\t\t}\n' +
	'\t\t}\n' +
	'\t}\n' +
	'}\n';
export {cssStyle};
