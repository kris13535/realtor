import fetcher from "./fetcher";

const api = {

    async getLastFourApartments(){
        try{
            const data = await fetcher.get(`/apartments/fourLastApartmentsBydate`);
            return data
        }  catch (error) {
            console.log(error);
        }
    },

    async getfilteredApartments(filtered){
        try{
            const data = await fetcher.get(`/apartments?${filtered}`);
            return data
        }  catch (error) {
            console.log(error);
        }
    },

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

    async getCitiesListByCountry(country){
        try{
            const data = await fetcher.get(`/cities/ByCountry/${country}`);
            return data.data;
            // console.log(data);
        }catch (error) {
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