import { Action } from '../core/Actions';

export class PostsActions extends Action {
    static ADD_POST = "ADD_POST";
    static GET_POSTS = "GET_POSTS";
    static GET_POSTS_LOADING = "GET_POSTS_LOADING";
    static GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
    static GET_POSTS_ERROR = "GET_POSTS_ERROR";
}
