const getDataFromServer = (type, handleSuccess) => {
    fetch(`https://storage.googleapis.com/realtour/${type}`, {
            method: 'GET',
        }
    ).then(response => response.json()
    ).then(success => handleSuccess(success)
    ).catch(error => console.log(error));
};

const postDataOnServer = (type, data, handleSuccess) => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
    ).then(response => response.json()
    ).then(success => handleSuccess(success)
    ).catch(error => console.log(error));
};

const editDataFromServer = (type, data, handleSuccess) => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
    ).then(response => response.json()
    ).then(success => handleSuccess(success)
    ).catch(error => console.log(error));
};

export {getDataFromServer, postDataOnServer, editDataFromServer};