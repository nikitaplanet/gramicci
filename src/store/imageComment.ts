
import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';

export const useDataStore = defineStore('imageComment', {
	state: () => ({
		imageComment: useStorage('imageCommentStore', ['好喔','什麼']),
	}),
	getters: {
		getImageComment: (state) => state.imageComment
	},
	actions: {
		addImageComment(data:string) {
			console.log("???",data);
			
			if(this.imageComment.some((item)=>item === data)) return
			this.imageComment.unshift(data);
		},
		deleteTemplate(delIndex) {
			this.imageComment = this.imageComment.filter((item,index) => {
				return delIndex !== index;
			});
		},
	
	},
});
