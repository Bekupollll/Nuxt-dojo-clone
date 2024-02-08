<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam quasi tempora reprehenderit animi! Laboriosam temporibus quia explicabo! Quam, enim!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam quasi tempora reprehenderit animi! Laboriosam temporibus quia explicabo! Quam, enim!</p>
        <div>{{ data }}</div>
    </div>
</template>


<script setup>
    const {data} = await useFetch('/api/ninja')
</script>
<style scoped>
h2{
    margin-right: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>