import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { PostsActions } from '../../actions/PostsActions';
import Post from './Post';

const PostsList = (props) => {
    const { getPosts, postsData, loading } = props;
    const limit = 10;
    const [start, setStart] = useState(0);
    const [dataLength, setDataLength] = useState(0);

    const getPostsData = () => {
        getPosts({url: `/posts?_start=${start}&_limit=${limit}`, data: postsData});
    }
    
    useEffect(() => {
        if (dataLength !== (postsData && postsData.length)) {
            postsData && setDataLength(postsData.length);
            getPostsData();
        }
    }, [start, dataLength]);

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !== 
            document.documentElement.offsetHeight
        ) return;

        setStart(start + 10);
    }

    useEffect(() => {
        if (dataLength !== (postsData && postsData.length)) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <div style={{minHeight: '1000px'}}>
            <h1 className="postsHeader">Posts</h1>
            <Post 
                posts={postsData}
            />
            {loading && <h1>Loading...</h1>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        postsData: state.posts.postsData,
        loading: state.posts.loading,
        error: state.posts.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (inputData) => {
            const postsActionData = PostsActions.Create(
                PostsActions.GET_POSTS,
                {
                    inputData
                }
            );
            dispatch(postsActionData);
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PostsList);

export { PostsList };