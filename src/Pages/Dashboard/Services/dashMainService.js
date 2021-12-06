export const fetchDataServices = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        return await response.json();
    } 
    catch (e) { console.log(e) }

}