function getData() {
    let query = document.getElementById("input").value;
    let client_id = "IQpWz2ru4ZxfLL-_MN80-THvSmep-r11NPdJFvj7hw8";
    let url = `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${query}&per_page=90`;

    // fetch is asynchronous and will run in background without halting statements outside the function
    fetch(url).then((response) => {

        console.log("before fetch");
        return response.json();

    }).then((data) => {
        // console.log(data);
        
        let output = "";
        data.results.forEach(item => {
            output += `<img src="${item.urls.regular}" id='img'>`;
        });

        let divElement = document.getElementById('container');
        divElement.innerHTML = `${output}`;
    });

}

