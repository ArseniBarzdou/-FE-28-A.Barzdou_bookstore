import { create } from 'apisauce';
import { 
  ActivationParams,
  AuthUserPayload,
  UserActionPayload 
} from "../../../src/Utils/globalTypes"
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

    const getPostsCount = () => {
      return API.get("search/game");
    };

    const getPost = (isbn13: string) => {
    return API.get(`/books/${isbn13}`);
    };

    const getSearchedPosts = (search: string, offset: number) => {
        return API.get("/search/{query}", { search, limit: 10, offset });
    };
    
    const createNewUser = (userData: UserActionPayload) => {
      return API.post("/auth/users/", userData);
    };

    const activateNewUser = (params: ActivationParams) => {
      return API.post("/auth/users/activation/", params);
    };

    const authUser = (params: AuthUserPayload) => {
      return API.post("/auth/jwt/create/", params);
    };
    
    const getCurrentUser = (token: string) => {
      return API.get(
        "/auth/users/me/",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    };

    const verifyToken = (token: string) => {
      return API.post("/auth/jwt/verify/", { token });
    };

    const refreshToken = (refresh: string) => {
      return API.post("/auth/jwt/refresh/", { refresh });
    };

export default { 
  getPostsList, 
  getPost, 
  getSearchedPosts,
  createNewUser,
  getPostsCount,
  activateNewUser,
  authUser,
  getCurrentUser,
  verifyToken,
  refreshToken,
};
