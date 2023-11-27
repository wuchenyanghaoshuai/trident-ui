<template>
  
      <a-layout-sider collapsible breakpoint="xl">
        <div class="logo" />
        <a-menu
          :default-open-keys="['1']"
          :default-selected-keys="['0_3']"
          :style="{ width: '100%' }"
          @menu-item-click="onClickMenuItem"
        >
  
          <a-menu-item key="0_1" >
            <IconHome></IconHome>
            首页
          </a-menu-item>
  
  
          <a-menu-item key="0_2">
            <icon-dashboard />
           
            Dashboard
          </a-menu-item>
  
  
          <a-menu-item key="0_3">
            <icon-desktop />
            主机管理
          </a-menu-item>
  
    
          <a-sub-menu key="1">
            <template #title>
              <IconCalendar></IconCalendar> 批量执行
            </template>
            <a-menu-item key="1_1">执行任务</a-menu-item>
          </a-sub-menu>
  
          <a-sub-menu key="2">
            <template #title>
              <icon-video-camera />
               监控管理
            </template>
            <a-menu-item key="2_1">Mysql</a-menu-item>
            <a-menu-item key="2_2">Redis</a-menu-item>
            <a-menu-item key="2_3">主机</a-menu-item>
              <a-sub-menu key="3" title="Kubernetes">
                <a-menu-item key="3_1">Node</a-menu-item>
                <a-menu-item key="3_2">Contailer</a-menu-item>
                <a-menu-item key="3_2">Ingress</a-menu-item>
              </a-sub-menu>
          </a-sub-menu>
  
          <a-sub-menu key="4">
            <template #title>
              <icon-tool />系统设置
            </template>
            <a-menu-item key="4_1">登录日志</a-menu-item>
            <a-menu-item key="4_2">账户管理</a-menu-item>
            <a-menu-item key="4_3">角色管理</a-menu-item>
            <a-menu-item key="4_4">系统设置</a-menu-item>
          </a-sub-menu>
        
        </a-menu>
  
        <!-- trigger -->
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

  </template>
  <script>
  import { defineComponent } from 'vue';
  import { Message} from '@arco-design/web-vue';
  import {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
  } from '@arco-design/web-vue/es/icon';
  
  export default defineComponent({
    components: {
      IconCaretRight,
      IconCaretLeft,
      IconHome,
      IconCalendar,
    },
    methods: {
      onClickMenuItem(key) {
        Message.info({ content: `You select ${key}`, showIcon: true });
      }
    }
  });
  </script>
  <style scoped>

  </style>
  