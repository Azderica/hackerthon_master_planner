<!-- Vue 템플릿(HTML) -->
<template>
    <div class="container">
        <div class="container_left"> 
            <div class="calender"></div>
            <div class="container_space"></div>
            <div class="toDolist"></div>
            <div class="container_space"></div>
            <div class="memo"></div>
        </div>
        <div class="container_right"> 
            <div class="search_setting">
                <div class="search_space"></div>
                <select class="search_select" name="brouser">
                    <option value="google">Google</option>
                    <option value="naver">Naver</option>
                    <option value="daum">Daum</option>
                </select>
            </div>

            <div class="search_page"></div>
        </div>
    </div>
</template>

<!-- Vue 인스턴스(JS) -->
<script>
export default {
    
    data() {
        return{

        }
    },
    methods:{

    },
}
</script>

<!-- CSS -->
<style lang = "scss">
body{
    margin:0;
}

.container{
    height: 800px;
    display: flex;
}

.container_left{
    width: 300px;
    height: 100%;
    border: 1px solid white;
    background: #FFEEE4;
    display: inline-block;
}
.calender{}
.container_space{}
.toDolist{}
.container_space{}
.memo{}

.container_right{
    flex: 1;
    height: 100%;
    background: white;
    display: inline-block;
} 

.search_setting{

}

.search_space{

}

.search_select{

}

.search_page{

}

</style>

