"use strict";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getUserAndPosts = async () => {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userResponse.json();
    await delay(1000);
    console.log("user", user);
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${user.id}`);
    const posts = await postResponse.json();
    await delay(1000);
    console.log("post", posts);
    await delay(1000);
    console.log(`${user.name} has ${posts.length}`);
};
getUserAndPosts();
