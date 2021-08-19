import { PostsActions } from '../actions/PostsActions';

export class PostsReducer {
    static InitialState = {
        postsData: null,
        loading: false,
        error: null
    }

    static Reducer(state = PostsReducer.InitialState, action) {
        switch (action.type) {
            case PostsActions.GET_POSTS_LOADING:
                return {...state, loading: true, postsData: state.postsData, error: null}
            case PostsActions.GET_POSTS_SUCCESS:
                return {...state, loading: false, postsData: action.payload.data, error: null}
            case PostsActions.GET_POSTS_ERROR:
                return {...state, loading: false, postsData: state.postsData, error: action.payload.message}
        
            default:
                return {...state};
        }
    }
};
