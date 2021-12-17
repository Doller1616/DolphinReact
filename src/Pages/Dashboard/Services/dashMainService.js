import RootService from "../../../Services/rootService";
const { _getO, _deleteO, _postO, ENDPOINTS } = RootService;

export const fetchDataServices = async (params) => {
    try {
        return await _getO( ENDPOINTS.user_list, params );
    } 
    catch (e) { console.log(e) }
}