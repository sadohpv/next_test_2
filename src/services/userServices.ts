import axios from "~/utility/Axios/NestjsAPI";

function getSuggestedFriend(id: number) {
    return axios.get<any, any>(`/users/suggested/${id}`);
}

function getDataForUserPage(slug: string, id: number) {
    return axios.get<any, any>(`/users/userPage/${slug}/${id}`);
}

export default {
    getSuggestedFriend,
    getDataForUserPage,
};
