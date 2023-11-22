<template>
    <nav>
        <div class="menu-item"><a href="#/home">Начало</a></div>
        <div class="menu-item"><a href="#/todo">Планировщик</a></div>
        <div class="menu-item"><a href="#/about">О нас</a></div>
    </nav>
</template>

<script>
export default {
    name:'navbar'
}

</script>

<style>
nav {
    display: flex;
    align-items:center;
    justify-content: center;
}

nav .menu-item {
    color: black;
    padding: 5px 30px;
    font-size: 20px;
    font-family: Verdana;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
    background-color: rgb(209, 160, 255);
    border-bottom-color: #FF5858;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;

}
</style>