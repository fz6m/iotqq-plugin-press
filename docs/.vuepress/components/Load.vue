<template>
    <div id='opqqq-plugin-toast'></div>
</template>

<script>
export default {
    mounted() {
        window._opq_toastTitle = '新 PYTHON SDK 框架已升级！'
        window._opq_toastContent = '🌈 查看升级方法'
        // 这个地方好像有 bug 😅
        window._opq_link = '/opqqq-plugin-press/guide/guide.html#%E4%BB%8E%E6%97%A7%E7%89%88-sdk-%E5%8D%87%E7%BA%A7'
        import('./opqqq-plugin-toast.min.js')
    }
}
</script>