import EventBus from '@/utils/EventBus.js';
import lazyDefault from '@/assets/lazy-default.gif';
import { debounceFn } from '@/utils/tools.js';


//存储需要处理的图片
let imgs = [];

function setImage(img) {
	//图片暂时设为默认图片
	img.dom.src = lazyDefault;
	const clientHeight = document.documentElement.clientHeight;
	const rect = img.dom.getBoundingClientRect();
	const height = rect.height || 150;
	//判断图片是否在视口范围内
	if (rect.top >= -height && rect.top <= clientHeight) {
		img.dom.src = img.src;
		//从数组中删除掉已经处理过的图片
		imgs = imgs.filter((i) => i !== img);
	}
}

function setImages() {
	for (const img of imgs) {
		setImage(img);
	}
}

function handleScroll() {
	setImages();
}

//监听滚动条事件
EventBus.$on('mainScroll', debounceFn(handleScroll, 50));

export default {
  inserted(el, bindings) {
		const img = {
			dom: el,									//需要处理图片的DOM
			src: bindings.value,			//图片最终的真实地址
		};
		imgs.push(img);							//添加到数组中等待处理
		setImage(img);
	},
	unbind(el) {
		imgs = imgs.filter((img) => img.dom !== el);
	}
};