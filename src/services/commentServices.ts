import axios from "~/utility/Axios/NestjsAPI";

function getAllComment(id: any, idUser: any) {
    return axios.get<any, any>(`/comment/${id}/${idUser}`);
}
function createComment(createCommentDto: any) {
    return axios.post<any, any>(`/comment`, createCommentDto);
}
function toggleLikeComment(createLikeCommentDto: any) {
    return axios.post<any, any>(`/like-comment`, createLikeCommentDto);
}
export default {
    getAllComment,
    createComment,
    toggleLikeComment,
};
