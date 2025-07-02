<template>
    <div class="card my-card">
        <div class="card-body">
            <!-- 头像部分 -->
            <div class="avatar-container">
                <img src="../assets/Away.jpg" 
                     alt="avatar"
                     class="hover-glow img-fluid">
            </div>
            
            <!-- 个人信息 -->
            <h2 class="cyber-text mb-3">AWAY</h2>
            <p class="bio-text">永远坚持热爱</p>
            <p class="bio-text">The future belongs to those who believe in the beauty of their dreams.</p>

            <!-- 社交链接 -->
            <div class="social-links mt-4">
                <a href="#" class="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="github-icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                    <span>
                        AwayC
                    </span>
                </a>
                <a href="#" class="social-link ml-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="bilibili-icon" data-v-41458b80=""><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 
                                    2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 
                                    10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 
                                    15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 
                                    14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 
                                    7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 
                                    11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor" data-v-41458b80=""></path></svg>
                    Away真的逊了
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-card {
    background: #2d2d2d;
    border-radius: 15px;
    border: 1px solid rgba(32, 201, 151, 0.1);
    width: 300px;
    position: fixed;
    left: 30px;
    top: 100px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.avatar-container {
    width: 120px;
    height: 120px;
    margin: -60px auto 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #20c997;
    box-shadow: 0 0 20px rgba(32, 201, 151, 0.3);
}

.hover-glow {
    object-fit: cover;

    transition: transform 0.4s, filter 0.4s;
}

.my-card:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 10px 30px rgba(32, 201, 151, 0.2);
    
    .hover-glow {
        transform: scale(1.05);
        filter: brightness(1.1);
    }
}

.cyber-text {
    font-family: 'Orbitron', sans-serif;
    color: #20c997;
    text-shadow: 0 0 10px rgba(32, 201, 151, 0.4);
}

.bio-text {
    color: #8a8a8a;
    font-size: 0.9rem;
}

.social-link {
    color: #6c757d;
    transition: all 0.3s ease;
    margin-right: 10px;
    text-decoration: none;

    &:hover {
        color: #20c997;
        transform: translateY(-3px);
    }
}

.social-link svg { 
    margin-right: 2px; 
}

.bilibili-icon {
    transform: translateY(-2px); 
}

.github-icon { 
    transform: translateY(-2px); 
}
</style>