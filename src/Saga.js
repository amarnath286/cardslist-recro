import { takeLatest } from 'redux-saga/effects';
import { PostsActions } from '../src/actions/PostsActions';
import { PostsSaga } from '../src/saga/PostsSaga';

class Saga {
    static *GetWatcher() {
        yield takeLatest(
            PostsActions.GET_POSTS,
            PostsSaga.GetPosts
        )
    }
}

export { Saga };