// ## **Part One: Solidify Terminology**

// In your own terms, define the following terms:

// - What is HTTP? --> Hyper Text Transfer Protocol is a protocol that defines how messages are formatted and transmitted over the web
// - What is a URL? --> Uniform Resource Locator is a web address that specifies it's loction on the internet
// - What is DNS? --> Domain Name System is a system that translates domain names
// - What is a query string? --> a query string is a part of a URL that contains data to be passed to the web server as key value pairs
// - What are two HTTP verbs and how are they different? --> Get and Post - Get requests data from a server and Post submits data to be processed
// - What is an HTTP request? --> a message sent by a client to a server
// - What is an HTTP response? -->  a message sent by a server to the client in response to a request 
// - What is an HTTP header? Give a couple examples of request and response headers you have seen. an HTTP header is a component of both requests and 
//   responses that provides additional information about the message being sent. examples include Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
//   Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control
// - What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
//   1. the browser checks the DNS for the sites corresponding IP address, 2. the browser sends an HTTP request to the server, 
//   3. the server receives the request, processes it and prepares an HTTP response, 4. the server sends the reponse which includes
//   a status code, headers and the HTML content, 5. the browser receives the HTTP response, interprets the content and displays the web page

// ## **Part Two: Practice Tools**

// 1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
//    curl -H "Accept: application/json" https://icanhazdadjoke.com/search?term=pirate
//    {"current_page":1,"limit":20,"next_page":1,"previous_page":1,"results":[{"id":"2gii3LeN7Ed","joke":"Why couldn't the kid see the pirate movie? Because it was rated arrr!"},
//    {"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!"},{"id":"QuscibaMClb","joke":"What does a pirate pay for his corn? A buccaneer!"},
//    {"id":"exXSCtkOKe","joke":"Why do pirates not know the alphabet? They always get stuck at \"C\"."},{"id":"SnOf2gqjiqc","joke":"Why are pirates called pirates? Because they arrr!"}],
//    "search_term":"pirate","status":200,"total_jokes":5,"total_pages":1}

// 2. Use dig to find what the IP address is for icanhazdadjoke.com
//    The IP addresses are 104.21.66.15 and 172.67.198.173

// 3. Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.

// ## **Part Three: Explore Dev Tools**

// Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

// Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

// Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in 
// Chrome how you can view the request and response headers, as well as the form data. --> received Error code: 501 Message: Unsupported methodv('POST')


// ## **Part Four: Explore the URL API**

// At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

// [Read about the URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)

// Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.

// Get parts of the URL
const url = new URL('https://example.com/path?query=example');

console.log(url.href);        // https://example.com/path?query=example
console.log(url.origin);      // https://example.com
console.log(url.pathname);    // /path
console.log(url.search);      // ?query=example
console.log(url.searchParams.get('query'));  // example

// Modify parts of the URL
url.searchParams.set('newParam', 'value');  // Add a new query parameter
console.log(url.href);  // https://example.com/path?query=example&newParam=value

