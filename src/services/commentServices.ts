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

function deleteComment(id: any) {
    return axios.delete(`/comment/${id}`);
}
function editComment(editCommentDto: any) {
    return axios.patch(`/comment/edit`, editCommentDto);
}
export default {
    getAllComment,
    createComment,
    toggleLikeComment,
    deleteComment,
    editComment
};
