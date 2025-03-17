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

// Fetch and display files when the page loads
fetchS3BucketContents();