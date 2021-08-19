import { MainService } from "../MainService";

export class PostsService {
    static GetPostsData(paramLink) {
        const url = paramLink.url;
        
        return MainService.uniqueApiMethod(url, 'GET');
    }
}

