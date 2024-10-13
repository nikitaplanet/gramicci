const cssStyle =
	'.blog {\n' +
	'  width: 100%;\n' +
	'  max-width: 750px;\n' +
	'  padding: 0 0 0 -20px;\n' +
	'  margin: auto;\n' +
	"  font-family: Arial, 'PingFang TC', '微軟正黑體';\n" +
	'  display: flex;\n' +
	'  flex-direction: column;\n' +
	'  color: #333333;\n' +
	"  font-feature-settings: 'liga' 0;\n" +
	'}\n' +
	'.blog > * {\n' +
	'  margin-left: 20px;\n' +
	'}\n' +
	'.blog h1 {\n' +
	'  font-family: Arial;\n' +
	'  font-size: 30px;\n' +
	'  line-height: 1.5;\n' +
	'  letter-spacing: 2px;\n' +
	'  font-weight: 700;\n' +
	'}\n' +
	'.blog h2 {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 18px;\n' +
	'  line-height: 1.5;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 500;\n' +
	'}\n' +
	'.blog h3 {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 16px;\n' +
	'  line-height: 1.8;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 400;\n' +
	'}\n' +
	'.blog h4 {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 14px;\n' +
	'  line-height: 1.5;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 500;\n' +
	'}\n' +
	'.blog h5 {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 12px;\n' +
	'  line-height: 2.5;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 500;\n' +
	'}\n' +
	'.blog h6 {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 15px;\n' +
	'  line-height: 1.8;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 500;\n' +
	'}\n' +
	'.blog p {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 13px;\n' +
	'  line-height: 1.5;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 500;\n' +
	'}\n' +
	'.blog ol, .blog ul {\n' +
	'  margin-left: 2rem;\n' +
	'  /* ml-8 */\n' +
	'  list-style-position: outside;\n' +
	'  /* list-outside */\n' +
	'  margin-top: 0.5rem !important;\n' +
	'  /* !mt-2 */\n' +
	'}\n' +
	'.blog ol li, .blog ul li {\n' +
	'  margin-top: 0.5rem;\n' +
	'  /* mt-2 */\n' +
	'}\n' +
	'.blog ol li:first-child, .blog ul li:first-child {\n' +
	'  margin-top: 0;\n' +
	'  /* first:mt-0 */\n' +
	'}\n' +
	'.blog ol {\n' +
	'  list-style-type: decimal;\n' +
	'  /* list-decimal */\n' +
	'}\n' +
	'.blog ul {\n' +
	'  list-style-type: disc;\n' +
	'  /* list-disc */\n' +
	'}\n' +
	'.blog blockquote {\n' +
	'  font-style: italic;\n' +
	'  border-left: 4px solid #d1d5db;\n' +
	'  /* border-gray-300 */\n' +
	'  padding: 0.5rem 1rem;\n' +
	'  /* p-4 py-2 */\n' +
	'  margin-left: 1.5rem;\n' +
	'  /* ml-6 */\n' +
	'  margin-top: 1.5rem !important;\n' +
	'  /* !mt-6 */\n' +
	'  margin-bottom: 0.5rem !important;\n' +
	'  /* !mb-2 */\n' +
	'}\n' +
	'.blog a {\n' +
	'  color: #1e40af;\n' +
	'  /* text-blue-800 */\n' +
	'  cursor: pointer;\n' +
	'  text-decoration: none;\n' +
	'}\n' +
	'.blog a:hover {\n' +
	'  text-decoration: underline;\n' +
	'}\n' +
	'.blog hr {\n' +
	'  border-color: #9ca3af;\n' +
	'  /* border-gray-400 */\n' +
	'}\n' +
	'.blog table {\n' +
	'  border: 1px solid #000000;\n' +
	'  border-collapse: collapse;\n' +
	'  margin: 0;\n' +
	'  overflow: hidden;\n' +
	'  table-layout: fixed;\n' +
	'  width: 100%;\n' +
	'}\n' +
	'.blog table th, .blog table td {\n' +
	'  text-align: left;\n' +
	'  border: 1px solid black;\n' +
	'  padding: 2px 0.5rem;\n' +
	'  position: relative;\n' +
	'  box-sizing: border-box;\n' +
	'  min-width: 1em;\n' +
	'  vertical-align: center;\n' +
	'}\n' +
	'.blog table th {\n' +
	'  text-align: left;\n' +
	'}\n' +
	'.blog table p {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 13px;\n' +
	'  line-height: 1.5;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 500;\n' +
	'}\n' +
	'.blog figure {\n' +
	'  align-items: flex-start;\n' +
	'  border-radius: 0.5rem;\n' +
	'  display: flex;\n' +
	'  flex-direction: column;\n' +
	'  width: fit-content;\n' +
	'  position: relative;\n' +
	'  margin: 0;\n' +
	'  max-width: 100%;\n' +
	'}\n' +
	'.blog figure figcaption {\n' +
	'  position: absolute;\n' +
	'  bottom: 10px;\n' +
	'  left: 20px;\n' +
	'  font-size: 18px;\n' +
	'  color: #9f9f9f;\n' +
	"  font-family: 'Arial';\n" +
	'  line-height: 1;\n' +
	'  font-weight: 700;\n' +
	'  letter-spacing: 1px;\n' +
	'}\n' +
	'.blog .tableWrapper {\n' +
	'  overflow: auto;\n' +
	'  width: calc(100% - 40px);\n' +
	'}\n' +
	'.blog .image-link-button {\n' +
	'  display: block;\n' +
	'  width: 100px;\n' +
	'  transition: 0.2s ease;\n' +
	'  margin-top: 8px;\n' +
	'}\n' +
	'.blog .image-link-button:hover {\n' +
	'  opacity: 0.8;\n' +
	'}\n' +
	'.blog .image-link-button img {\n' +
	'  width: 100%;\n' +
	'}\n' +
	'.remarkBlog {\n' +
	'  color: #333333;\n' +
	'}\n' +
	'.remarkBlog h5 {\n' +
	"  font-family: 'PingFang TC';\n" +
	'  font-size: 12px;\n' +
	'  line-height: 2.5;\n' +
	'  letter-spacing: 0.5px;\n' +
	'  font-weight: 500;\n' +
	'}\n' +
	'.w767 .blog {\n' +
	'  padding: 0 20px 0 -20px;\n' +
	'}\n' +
	'.w767 .blog h1 {\n' +
	'  font-size: 20px;\n' +
	'  line-height: 1;\n' +
	'}\n' +
	'.w767 .blog h2 {\n' +
	'  font-size: 12px;\n' +
	'  line-height: 1.5;\n' +
	'}\n' +
	'.w767 .blog h3 {\n' +
	'  font-size: 12px;\n' +
	'  line-height: 1.8;\n' +
	'}\n' +
	'.w767 .blog h4 {\n' +
	'  font-size: 10.5px;\n' +
	'  line-height: 1.5;\n' +
	'}\n' +
	'.w767 .blog h5 {\n' +
	'  font-size: 9px;\n' +
	'  line-height: 2.5;\n' +
	'  letter-spacing: 1px;\n' +
	'}\n' +
	'.w767 .blog h6 {\n' +
	'  font-size: 12px;\n' +
	'  line-height: 1.8;\n' +
	'}\n' +
	'.w767 .blog p {\n' +
	'  font-size: 11px;\n' +
	'  line-height: 1.5;\n' +
	'}\n' +
	'.w767 .blog table p {\n' +
	'  font-size: 12px;\n' +
	'  line-height: 1.5;\n' +
	'}\n' +
	'@media only screen and (max-width: 767px) {\n' +
	'  .blog {\n' +
	'    padding: 0 20px;\n' +
	'  }\n' +
	'  .blog h1 {\n' +
	'    font-size: 20px;\n' +
	'    line-height: 1;\n' +
	'  }\n' +
	'  .blog h2 {\n' +
	'    font-size: 12px;\n' +
	'    line-height: 1.5;\n' +
	'  }\n' +
	'  .blog h3 {\n' +
	'    font-size: 12px;\n' +
	'    line-height: 1.8;\n' +
	'  }\n' +
	'  .blog h4 {\n' +
	'    font-size: 10.5px;\n' +
	'    line-height: 1.5;\n' +
	'  }\n' +
	'  .blog h5 {\n' +
	'    font-size: 9px;\n' +
	'    line-height: 2.5;\n' +
	'    letter-spacing: 1px;\n' +
	'  }\n' +
	'  .blog h6 {\n' +
	'    font-size: 12px;\n' +
	'    line-height: 1.8;\n' +
	'  }\n' +
	'  .blog p {\n' +
	'    font-size: 11px;\n' +
	'    line-height: 1.5;\n' +
	'  }\n' +
	'  .blog table p {\n' +
	'    font-size: 12px;\n' +
	'    line-height: 1.5;\n' +
	'  }\n' +
	'}\n';
export {cssStyle};
