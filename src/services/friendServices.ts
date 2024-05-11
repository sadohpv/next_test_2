import axios from "~/utility/Axios/NestjsAPI";

function handleCallApiFriend(friendData: any) {
    return axios.post<any, any>(`/friend`, friendData);
}
function handleAcceptFriend(friendData: any) {
    return axios.post<any, any>(`/friend/accept`, friendData);
}
function handleGetFriendForMention(id: any) {
    return axios.get<any, any>(`/friend/mention/${id}`);
}
export default {
    handleCallApiFriend,
    handleAcceptFriend,
    handleGetFriendForMention,
};
