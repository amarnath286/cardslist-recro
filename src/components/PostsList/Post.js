import React from "react";

const Post = ({ posts, getPostDetails }) => {
    return (
        <div>
            {posts ? posts.length ? posts.map((post, index) => (
                <div className="list" key={index} onClick={getPostDetails && getPostDetails(post)}>{post.title}</div>      
            )): (<h1>No Results Found</h1>) : null}
        </div>
    )
}

export default Post;