import RootService from "../../../Services/rootService";
const { getReq, deleteReq, postReq, ENDPOINTS } = RootService;

export const fetchDataServices = async (params) => {
    try {
        return await getReq( ENDPOINTS.user_list, params );
    } 
    catch (e) { console.log(e) }
}