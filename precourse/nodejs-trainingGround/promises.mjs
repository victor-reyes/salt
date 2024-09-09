import fetch from "node-fetch";

fetch("https://weirdUrl.weirdUrl")
  .then(response => response.json())
  .then(data => data.results)
  .then(results => console.log(`We got ${results.length} rows`))
  .catch(err => console.log("Something went wrong", { err }));
