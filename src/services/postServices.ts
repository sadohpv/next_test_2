import axios from "~/utility/Axios/NestjsAPI";

function handleCreatePost(createPostDto: any) {
    return axios.post(`/post`, createPostDto);
}
function getAllPost(id: any) {
    return axios.get<any, any>(`/post/${id}`);
}

function handleToggleLikePost(likePostDto: any) {
    return axios.post(`/like-post`, likePostDto);
}
function handleGetGuestPost(slug: string, id: number) {
    return axios.get<any, any>(`/post/guest/${slug}/${id}`);
}

function handleGetListLikePost(id: number, idUser: number) {
    return axios.get<any, any>(`/post/listLike/${id}/${idUser}`);
}
export default {
    handleCreatePost,
    getAllPost,
    handleToggleLikePost,
    handleGetGuestPost,
    handleGetListLikePost,
};
