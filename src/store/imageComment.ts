
import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';

export const useImageCommentStore = defineStore('imageComment', {
	state: () => ({
		imageComment: useStorage('imageCommentStore', []),
	}),
	getters: {
		getImageComment: (state) => state.imageComment
	},
	actions: {
		addImageComment(data:string) {
			if(this.imageComment.some((item)=>item === data)) return
			this.imageComment.unshift(data);
		},
		deleteImageComment(delIndex) {
			this.imageComment = this.imageComment.filter((item,index) => {
				return delIndex !== index;
			});
		},
	
	},
});
