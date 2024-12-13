const searchTermElem = document.querySelector("#searchTerm");
const searchResultElem = document.querySelector("#searchResult");
searchTermElem.focus();
searchTermElem.addEventListener("input", function (event) {
    search(event.target.value);
});
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};
const search = debounce(async (searchTerm) => {
    if (!searchTerm) {
        // reset the search result
        searchResultElem.innerHTML = "";
        return;
    }
    try {
        // make an API request
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=jso
n&origin=*&srlimit=10&srsearch=${searchTerm}`;
        const response = await fetch(url);
        const searchResults = await response.json();
        const searchResultHtml = generateSearchResultHTML(
            searchResults.query.search,
            searchTerm
        );
        searchResultElem.innerHTML = searchResultHtml;
    } catch (error) {
        console.log(error);
    }
});
const stripHtml = (html) => {
    let div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent;
};
const highlight = (str, keyword, className = "highlight") => {
    const hl = `<span class="${className}">${keyword}</span>`;
    return str.replace(new RegExp(keyword, "gi"), hl);
};
const generateSearchResultHTML = (results, searchTerm) => {
    return results
        .map((result) => {
            const title = highlight(stripHtml(result.title), searchTerm);
            const snippet = highlight(stripHtml(result.snippet), searchTerm);
            return `<article>
 <a href="https://en.wikipedia.org/?curid=${result.pageid}">
 <h2>${title}</h2>
 </a>
 <div class="summary">${snippet}...</div>
 </article>`;
        })
        .join("");
};

// Step 1: GET request to fetch tags
const contentPageElement = document.querySelector(".contentPage");
async function getTags() {
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        format: "json",
        list: "tags",
        tgprop: "displayname|description|hitcount|defined|source|active",
        tglimit: "30",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
        url += "&" + key + "=" + params[key];
    });

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            var tags = response.query.tags;
            tags.forEach(function (tag) {
                // Create a div element for each tag
                var tagElement = document.createElement("div");
                tagElement.className = "tag";

                // Assign the tag details to the div element
                tagElement.innerHTML = `
                    <h3>Tag name: ${tag.displayname}</h3>
                    ${tag.description ? `<p>${tag.description}</p>` : ""}
                    ${tag.hitcount ? `<p>Hitcount: ${tag.hitcount}</p>` : ""}
                    ${
                        tag.source.length > 0
                            ? `<p>Source: ${tag.source.join(", ")}</p>`
                            : ""
                    }
                `;

                // Append the tag element to the content page element
                contentPageElement.appendChild(tagElement);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

// getTags();

// Step 1: GET request to fetch tags
async function getUserContribs() {
    /*
        get_usercontribs.js

        MediaWiki API Demos
        Demo of `Usercontribs` module: List user contributions.

        MIT License
    */

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        format: "json",
        list: "usercontribs",
        ucuser: "Jimbo Wales",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
        url += "&" + key + "=" + params[key];
    });

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            var usercontrib = response.query.usercontribs;

            usercontrib.forEach(function (uc) {
                // Create a div element for each user contribution
                var contribElement = document.createElement("div");
                contribElement.className = "user-contrib";

                // Convert timestamp to YYYY:MM:DD hh:mm:ss format
                var date = new Date(uc.timestamp);
                var formattedTimestamp = `${date.getFullYear()}:${String(
                    date.getMonth() + 1
                ).padStart(2, "0")}:${String(date.getDate()).padStart(
                    2,
                    "0"
                )} ${String(date.getHours()).padStart(2, "0")}:${String(
                    date.getMinutes()
                ).padStart(2, "0")}:${String(date.getSeconds()).padStart(
                    2,
                    "0"
                )}`;

                // Assign the user contribution details to the div element
                contribElement.innerHTML = `
                    <h3>Title: ${uc.title}</h3>
                    <p>User: ${uc.user}</p>
                    <p>Comment: ${uc.comment}</p>
                    <p>Timestamp: ${formattedTimestamp}</p>
                    <p>Size: ${uc.size}</p>
                `;

                // Append the contribution element to the container
                contentPageElement.appendChild(contribElement);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

getUserContribs();
