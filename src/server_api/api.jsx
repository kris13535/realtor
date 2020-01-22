import fetcher from "./fetcher";

const api = {
    async loginUser(userData){
        try{
            const data = await fetcher.post(`/login`, userData);
            // console.log(data);
        }  catch (error) {
            console.log(error);
        }
    },

    async SignupUser(userData){
        try{
            const data = await fetcher.post(`/signup`, userData);
            // console.log(data);
        }  catch (error) {
            console.log(error);
        }
    },

    async getCitiesName(){
        try{
            const data = await fetcher.get(`/cities`);
            return data;
            // console.log(data);
        }  catch (error) {
            console.log(error);
        }
    },

    async AddNewApartment(newApartmentData){
        console.log(newApartmentData);
        try{
            const data = await fetcher.post(`/apartments/addApartment`, newApartmentData);
            // console.log(data);
        }  catch (error) {
            console.log(error);
        }
    }

};

export default api;