import fetcher from "./fetcher";

const api = {
    async loginUser(userData){
        try{
            const data = await fetcher.post(`/login`, userData);
            // console.log(data);
        }  catch (error) {
            console.log(error);
        }
    }


};

export default api;