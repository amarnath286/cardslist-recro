import { combineReducers } from "redux";
import { PostsReducer } from '../src/reducers/PostsReducer';

class State {
    static Reducer() {
        return combineReducers({
            posts: PostsReducer.Reducer
        });
    }
}

export { State };