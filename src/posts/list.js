export const tagColorMap = {
    '前端': '#b8daff',
    'C/C++': '#ffd8b5',
    '嵌入式': '#c3e6cb',
    '心得': '#f5e6cc', 
    'Linux': '#e0e0e0', 
    'default': '#e0e0e0', 
}

export const getTagColor = (tag) => { 
    return tagColorMap[tag.name] || tagColorMap['default']; 
}

const posts = [
    {
        id: 2,
        name: "About Me and This Website",
        has_img: true, 
        img: require("@/posts/About-me/cover.png"),
        tags: [{name: "前端"}, {name: "心得"}],
        summary: "讲讲我与这个博客", 
        pagePath: "About-me/content",
        time: "July 03, 2025"
    }, 
    {
        id: 1,
        name: "Hello World",
        has_img: true, 
        img: "https://demo.stack.jimmycai.com/p/hello-world/cover_hu3425483315149503896.jpg",
        tags: [{name: "心得"}],
        summary: "经过几天的努力，网站的基本搭建终于完成，以此作为我发布第一篇文章的开篇。", 
        pagePath: "hello-world/content",
        time: "July 2, 2025"
    }, 

]

export {posts}; 