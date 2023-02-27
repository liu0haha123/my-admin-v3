<template>
    <t-header class="header">
        <div class="collapse-button">展开按钮</div>
        <div class="operation-area"></div>
        <t-button variant="text">
            <template #icon>
                <icon name="user"></icon>
            </template>
            用户名
        </t-button>
    </t-header>
</template>

<script lang="ts" setup>
import {Icon} from "tdesign-vue-next"
</script>

<style scoped lang="less">
.header{
    display: flex;
    padding: 0 16px;
    justify-content: space-between;
    align-items: center;
}
</style>