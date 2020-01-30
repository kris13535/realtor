import fetcher from "./fetcher";

const api = {

    async getPropertyTypeData(){
        try{
            const data = await fetcher.get(`/apartments/property/Type/Data`);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },

    async getLengthApartmentsArray(){
        try{
            const data = await fetcher.get(`/apartments/length`);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },

    async getLastFourApartments(){
        try{
            const data = await fetcher.get(`/apartments/fourLastApartmentsBydate`);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },

    async getLastFourSydneyApartments(){
        try{
            const data = await fetcher.get(`/apartments/getLastFourSydneyApartments`);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },

    async getfilteredApartments(filtered){
        try{
            const data = await fetcher.get(`/apartments?${filtered}`);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },

    async getMyApartments(){
        try{
            const data = await fetcher.get(`/apartments/my/apartments`);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },

    async getSingleApartment(apartmentId){
        try{
            const data = await fetcher.get(`/apartments/${apartmentId}`);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },


    async deleteApartment(apartmentId){
        try{
            const data = await fetcher.post(`/apartments/deleteApartment`, apartmentId);
            return data.data
        }  catch (error) {
            console.log(error);
        }
    },

    async loginUser(userData){
        try{
            const data = await fetcher.post(`/login`, userData);
            return data
        }  catch (error) {
            console.log(error);
        }
    },

    async SignupUser(userData){
        try{
            const data = await fetcher.post(`/signup`, userData);
            return data
        }  catch (error) {
            console.log(error);
        }
    },

    async getCitiesListByCountry(country){
        try{
            const data = await fetcher.get(`/cities/ByCountry/${country}`);
            return data.data;
        }catch (error) {
            console.log(error);
        }
    },

    async getCitiesName(){
        try{
            const data = await fetcher.get(`/cities`);
            return data;
        }  catch (error) {
            console.log(error);
        }
    },

    async AddNewApartment(newApartmentData){
        try{
            const data = await fetcher.post(`/apartments/addApartment`, newApartmentData);
            return data
        }  catch (error) {
            console.log(error);
        }
    }

};

export default api;