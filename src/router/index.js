import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';
import { titleController } from '@/utils';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // redirect: '/home',
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog'),
    meta: {
      title: "文章",
    },
  },
  // 博客分类
  {
    path: '/blog/cate/:categoryId',
    name: 'BlogCategory',
    component: () => import('@/views/Blog'),
    meta: {
      title: "文章分类",
    },
  },
  // 博客详情
  {
    path: '/blog/:blogId',
    name: 'Detail',
    component: () => import('@/views/Blog/Detail.vue'),
    meta: {
      title: "文章详情",
    },
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/Project'),
    meta: {
      title: "项目",
    },
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/Message'),
    meta: {
      title: "留言板",
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});


router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

export default router;
