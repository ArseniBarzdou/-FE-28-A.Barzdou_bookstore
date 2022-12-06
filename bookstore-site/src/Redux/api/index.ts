import { create } from 'apisauce';
// import { ActivationParams, UserActionPayload } from "../../../src/Utils/globalTypes"
import { PER_PAGE } from "../../Utils";

const API = create({
    baseURL: 'https://api.itbook.store/1.0',
    // baseURL: 'https://studapi.teachmeskills.by',
    });

    // const createNewUser = (userData: UserActionPayload) => {
    // return API.post('/auth/users/', userData);
    // };

    const getPostsList = () => {
    return API.get('/new');
    };

    // const activateNewUser = (params: ActivationParams) => {
    // return API.post('/auth/users/activation/', params);
    // };

    const getPost = (isbn13: string) => {
    return API.get(`/books/${isbn13}`);
    };

    const getSearchedPosts = (title_contains: string, _start: number) => {
        return API.get("/search/{query}", { title_contains, _limit: PER_PAGE, _start });
      };

export default { getPostsList, getPost, getSearchedPosts };
