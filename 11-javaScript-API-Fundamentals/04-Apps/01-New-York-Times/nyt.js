// location of api
const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// allows you to access api
const key = "3nlTmOk7zJTvFpuchdmPseo1X3jzQ3Ik";
// sets url as a variable
let url;

//search form
// sets variables
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date")
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//results navigation
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

//results section
const section = document.querySelector("section");

// makes next and pervious page visable
nav.style.display = "none";

let pageNumber = 0;
console.log("PageNumber:", pageNumber);
let displayNav = false;

// tells the code to run a function when we do a specific action
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

// creates a function and add the event we set up
function fetchResults(e) {
    // keeps the page from defaulting, stops it from refreshing the page
    e.preventDefault();
    // adds to the base url and stores it in url
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
    console.log("URL:", url);

    // lets us search withouth having date
    if(startDate.value !== ""){
        console.log(startDate.value)
        // adds the start date to the url
        url += "&begin_date=" + startDate.value;
    };

    if(endDate.value !== ""){
        // adds the end date to the url
        url += "end_date=" + endDate.value;
    };
    // when we "submit" it goes out and asks for the url
    fetch(url)
        // if request granted, it will run the function and return with json results
        .then(function(result){
            return result.json();
        })
        // this will display the json results
        .then(function(json){
            // calls or invokes the displayResults(json) function
            displayResults(json);
        });
}

function displayResults(json){
    // removes appendChid elements we had previously created with our search and adds the new ones searched for
    while (section.firstChild){ // while there is a first child in section...
        section.removeChild(section.firstChild); //removed a child element until there is nothing
    }
    console.log("DisplayResults", json);
    console.log(json.response.docs);
    let articles = json.response.docs;

    if(articles.length === 10){
        nav.style.display = "block"; //shows the nav display if 10 items are in the array
    } //else if(articles.length < 10) {
    //     nextBtn.style.display = "none";
    // }
    else {
        nav.style.display = "none"; //hides the nav display if less than 10 items are in the array
    }

    console.log(articles);

    // shows no results if there are none
    if(articles.length === 0) {
        console.log("no results");
    } else {
        //Display the data
        for(let i = 0; i < articles.length; i++){
            console.log(i);

            // sets up variables
            let article = document.createElement("article");
            let heading = document.createElement("h2");
            let link = document.createElement("a");
            let img = document.createElement("img");
            let para = document.createElement("p");
            let clearfix = document.createElement("div");

            let current = articles[i];
            console.log("Current:", current);
            
            // adds a href with the url to the current article in the iteration to the element
            link.href = current.web_url;
            // adds text content from the headline and main section of the current article in the iteration to the element
            link.textContent = current.headline.main;

            // adds the word Keywords: to the text content of the para variable(element targeted)
            para.textContent = "Keywords: ";

            // the for loop is adding the keywords into a span element and adding the span to the p element(para)
            for(let j = 0; j < current.keywords.length; j++){
                let span = document.createElement("span");
                span.textContent += current.keywords[j].value + " ";
                para.appendChild(span);
            }

            // adds the src and alt image with their value to the img element
            if(current.multimedia.length > 0){
                img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            // creates a class attribute to clrearfix and makes the value clearfix
            clearfix.setAttribute("class", "clearfix");

            // adds a child element to specified element
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

// calls back the functions so we can go to the next  page
function nextPage(e){
    console.log("Next button clicked");
    pageNumber++;
    fetchResults(e);
    console.log("Page Number:", pageNumber);
}

// calls back the functions so we can go to the previous page
function previousPage(e){
    console.log("Next button clicked");
    if(pageNumber > 0){ // if the page number is 0 does not let us to go the previous page
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}