export const tagColorMap = {
    '标签1': '#b8daff',
    '标签2': '#ffd8b5',
    '标签3': '#c3e6cb',
    '标签4': '#e0e0e0', 
    'default': '#e0e0e0'
}

export const getTagColor = (tag) => { 
    return tagColorMap[tag.name] || tagColorMap['default']; 
}

const posts = [
    {
        id: 1,
        name: "Hello World",
        has_img: true, 
        img: "https://demo.stack.jimmycai.com/p/hello-world/cover_hu3425483315149503896.jpg",
        tags: [{name: "标签1"}, {name: "标签2"}],
        header: "hello world",
        summary: "hello world", 
        pagePath: "hello-world/content",
        time: "Mar 06, 2022"
    }, 
    {
        id: 2,
        name: "hello world",
        has_img: false, 
        img: "https://demo.stack.jimmycai.com/p/hello-world/cover_hu3425483315149503896.jpg",
        tags: [{name: "标签1"}, {name: "标签2"}],
        header: "hello world",
        summary: "hello world", 
        pagePath: "hello world",
        time: "Mar 06, 2022"
    },
    {
        id: 3,
        name: "hello world",
        has_img: true, 
        img: "https://demo.stack.jimmycai.com/p/hello-world/cover_hu3425483315149503896.jpg",
        tags: [{name: "标签1"}, {name: "标签2"}],
        header: "hello world",
        summary: "hello world", 
        pagePath: "hello world",
        time: "Mar 06, 2022"
    }, 
    {
        id: 4,
        name: "hello world",
        has_img: true, 
        img: "https://demo.stack.jimmycai.com/p/hello-world/cover_hu3425483315149503896.jpg",
        tags: [{name: "标签1"}, {name: "标签2"}],
        header: "hello world",
        summary: "hello world", 
        pagePath: "hello world",
        time: "Mar 06, 2022"
    }, 

]

export {posts}; 