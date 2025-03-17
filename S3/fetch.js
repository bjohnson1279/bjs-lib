function fetchS3BucketContents() {
    const bucketUrl = "https://<bucket-name>.s3.amazonaws.com/?list-type=2"; // Replace with your bucket's URL

    fetch(bucketUrl)
        .then(response => response.text())
        .then(data => {
            // Parse the XML response
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            // Extract file names
            const items = Array.from(xmlDoc.getElementsByTagName("Key")).map(keyNode => keyNode.textContent);
            
            displayFiles(items);
        })
        .catch(error => console.error("Error fetching bucket contents:", error));
}