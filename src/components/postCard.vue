<template>
    <div class="card mb-3 my-card" >
        
        <slot v-if="$slots.has_img" name="has_img"></slot>
        
        <div class="card-body">
            <div class="tags">
                <slot v-if="$slots.tags" name="tags"></slot>
            </div>
            <h2 class="card-title">
                <slot name="header"></slot>
            </h2>

            <p class="card-text" style="color:#cacaca;">
                <slot></slot>
            </p>

            <div class="card-text"><small class="text-body-secondary">
                <span class="calender">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
                    <circle cx="18" cy="18" r="4"></circle>
                    <path d="M15 3v4"></path>
                    <path d="M7 3v4"></path>
                    <path d="M3 11h16"></path>
                    <path d="M18 16.496v1.504l1 1"></path>
                    </svg>
                </span>
                <span class="time">
                    <slot name="time"></slot>
                </span>
            </small></div>
        </div>
    </div>


</template>

<script>
export default { 
    name: "postCard", 
    components: {
    }
}

</script>

<style scoped>

.my-card { 
    width: 80%; 
    margin: 0 auto;
    border-radius: 20px;
    background-color: #2d2d2d;
    color: #e0e0e0; 
    box-shadow: 4px 4px 20px rgb(12, 12, 12); 
    overflow: hidden; 
    transition: 0.5s; 
}


.my-card:hover {
    transform: translateY(-3px);
    box-shadow: 4px 4px 20px rgb(5, 73, 70); 
}

.card-body { 
    padding: 20px 30px; 
}

svg { 
    color: #716f6f; 
}

.calender { 
    margin-right: 5px; 
}

.time { 
    color: #717171;
}

.tags { 
    margin-bottom: 10px; 
}

</style>