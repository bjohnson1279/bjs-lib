let allFiles = []; // Store all file names here after fetching them

function fetchS3BucketContents() {
    const bucketUrl = "https://<bucket-name>.s3.amazonaws.com/?list-type=2"; // Replace with your bucket's URL

    fetch(bucketUrl)
        .then(response => response.text())
        .then(data => {
            // Parse the XML response
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            // Extract file names
            allFiles = Array.from(xmlDoc.getElementsByTagName("Key")).map(keyNode => keyNode.textContent);

            displayFiles(allFiles); // Initially display all files
        })
        .catch(error => console.error("Error fetching bucket contents:", error));
}

function displayFiles(files) {
    const fileList = document.getElementById("file-list");
    fileList.innerHTML = "";

    files.forEach(file => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `https://<bucket-name>.s3.amazonaws.com/${file}`; // Replace with your bucket's base URL
        link.textContent = file;
        link.target = "_blank";

        listItem.appendChild(link);
        fileList.appendChild(listItem);
    });
}

function searchFiles() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();

    // Filter files that include the search term
    const filteredFiles = allFiles.filter(file => file.toLowerCase().includes(searchInput));
    displayFiles(filteredFiles);
}

// Add event listener to the search button
document.getElementById("search-button").addEventListener("click", searchFiles);

// Fetch and display files when the page loads
fetchS3BucketContents();