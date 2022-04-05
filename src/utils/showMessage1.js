import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon';
import styles from './showMessage.module.less';

/**
 * 
 * @param {*} option 
 */
export default function(option = {}) {
    const content = option.content || '';
    const type = option.type || 'info';
    const duration = option.duration || 2000;
    const container = option.container || document.body;
    //创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, { type });
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    //设置样式
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;
    //判断容器中的position是否改动过
    if (option.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }
    //将元素加入容器中
    container.appendChild(div);
    //浏览器强行渲染
    div.clientHeight;
    //回到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;
    //延迟消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener(
            "transitionend",
            function() {
                div.remove();
                options.callback && options.callback();
            },
            { once: true }
        )
    }, duration);
}