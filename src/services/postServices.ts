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
export default {
    handleCreatePost,
    getAllPost,
    handleToggleLikePost,
};
