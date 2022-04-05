//loading自定义指定
import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';


//辅助函数，拿到loading的img元素
function getLoadingImg(el) {
    return el.querySelector('img[data-role=loading');
}

//辅助函数，创建loading的img元素
function createLoadingImg() {
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}


/**
 * 配置对象
 * @param {*} el        指令绑定的DOM元素 
 * @param {*} binding   包含所需值的对象
 */
export default function (el, binding) {
    //@根据binding.value的值决定是创建、还是删除img元素
    //1.拿到img的DOM元素
    const currentImg = getLoadingImg(el);
    //2.判断binding.value是否有值
    if (binding.value) {
        //有值
        if (!currentImg) {
            //创建img元素
            const img = createLoadingImg();
            el.appendChild(img);
        }
    } else {
        //无值
        if (currentImg) {
            //移除img元素
            currentImg.remove();
        }
    }
}