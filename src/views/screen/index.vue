<template>
  <div class="container">
    <!-- 数据大屏展示内容区域 -->
    <div class="screen" ref="screen">
      <!-- 数据大屏顶部 -->
      <div class="top">
        <Top />
      </div>
      <div class="devices" v-for="device in devices" :key="device.deviceID">
        <Device :name="device.deviceName" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from "vue";
// 引入顶部的子组件
import Top from "./components/top/index.vue";
import Device from "./components/device/index.vue";
import { reqGetSmartLightList } from "@/api/smartlight/index";
import { GetSmartLightListResponse, SmartLightInfo } from "@/api/smartlight/type";

// 创建响应式数据用于存储设备列表
const devices = ref<SmartLightInfo[]>([]);

// 获取设备列表的方法
const GetSmartList = async () => {
  try {
    const result: GetSmartLightListResponse = await reqGetSmartLightList();
    devices.value = result.result;
    console.log(devices.value[1])
  } catch (error) {
    console.error("获取设备列表失败：", error);
  }
};

// 获取数据大屏展示内容盒子的DOM元素
let screen = ref(null);

onMounted(() => {
  // 页面加载时获取设备列表
  GetSmartList();

  // 初始化屏幕样式
  updateScreenStyle();

  // 监听窗口大小变化
  window.addEventListener("resize", updateScreenStyle);
});

// 更新屏幕样式
const updateScreenStyle = () => {
  const scale = getScale();
  if (screen.value) {
    (screen.value as HTMLElement).style.transform = `scale(${scale}) translate(-50%, -50%)`;
  }
};


// 定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w;
  const wh = window.innerHeight / h;
  return ww < wh ? ww : wh;
}
</script>
  
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/back.png) no-repeat;
  background-size: cover;

  .devices-container {
    display: flex;
    /* 使用 Flexbox 布局 */
    flex-wrap: wrap;
    /* 自动换行 */
    gap: 10px;
    /* 项目之间的间隔 */
  }

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
    }

    .devices {
      display: flex;
      width: 180px;
      height: 200px;
      border-radius: 10%;
      margin-top: 30px;
      border: 2px solid blue;
    }
  }
}</style>
  