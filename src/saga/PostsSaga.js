import { put, call } from 'redux-saga/effects';
import { PostsActions } from '../actions/PostsActions';
import { PostsService } from '../service/Posts';
import { Action } from '../core/Actions';

export class PostsSaga {
    static *GetPosts (postBody) {
        const inputData = postBody.payload.inputData;
        const loadingAction = Action.Create(
            PostsActions.GET_POSTS_LOADING
        );
        yield put(loadingAction);
        try {
            const res = yield call(PostsService.GetPostsData, {
                url: inputData.url
            });
            const postsData = inputData.data && inputData.data.length ? inputData.data : [];
            const data = [...postsData, ...res.data];
            if (res.status >= 200 && res.status < 300) {
                yield put(
                    Action.Create(
                        PostsActions.GET_POSTS_SUCCESS,
                        {
                            data
                        }
                    )
                );
            } else {
                throw res.error;
            }
        } catch(error) {
            yield put(
                Action.Create(PostsActions.GET_POSTS_ERROR, {
                    message: error
                })
            )
        }
        
    }
}