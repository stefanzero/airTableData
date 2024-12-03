# Project air-table-data

## Airtable overview

Airtable is a cloud-based database and project management tool that allows users to create custom tables, forms, and views to organize and manage data. It is often described as a hybrid of a spreadsheet and a database, as it combines the flexibility of a spreadsheet with the power of a database.

Airtable allows users to create tables with custom fields, including text, numbers, dates, and more. Users can also create forms to collect data from others, and views to display and analyze the data in different ways.

## Advantages using the Airtable API instead of the Airtable web site

Using the Airtable API instead of the website has several advantages:

1. Automation: With the API, you can automate tasks and workflows by integrating Airtable with other tools and services.
2. Customization: The API allows you to customize the way you interact with Airtable, creating custom interfaces and experiences tailored to your specific needs.
3. Scalability: The API can handle large volumes of data and requests, making it ideal for applications that require high scalability.
4. Integration: The API enables seamless integration with other tools and services, such as web applications, mobile apps, and IoT devices.
5. Programmatic control: The API provides programmatic control over Airtable, allowing you to create, read, update, and delete records, as well as manage tables, views, and fields.
6. Data analysis: The API enables you to analyze and manipulate data in Airtable, creating custom reports, dashboards, and visualizations.
7. Security: The API provides a secure way to access and manage Airtable data, with features like authentication, authorization, and encryption.
8. Flexibility: The API allows you to use Airtable with a wide range of programming languages and frameworks, including JavaScript, Python, Ruby, and more.
9. Cost-effective: Using the API can be more cost-effective than using the website, especially for large-scale applications or integrations.
10. Faster development: The API enables faster development and prototyping, as you can quickly create and test custom integrations and applications.

### HTTP APIs

With an HTTP API, you can:

- Create: Send data to the API to create new resources (e.g. create a new user account)
- Read: Retrieve data from the API to access existing resources (e.g. retrieve a user's profile information)
- Update: Send data to the API to modify existing resources (e.g. update a user's profile information)
- Delete: Send a request to the API to delete existing resources (e.g. delete a user account)

You can also use HTTP APIs to:

- Authenticate: Verify the identity of a user or system and obtain an access token
- Authorize: Check if a user or system has permission to access a particular resource
- Search: Retrieve a list of resources that match specific criteria
- Filter: Retrieve a list of resources that match specific conditions
- Sort: Retrieve a list of resources in a specific order
- Paginate: Retrieve a list of resources in batches

HTTP APIs typically use standard HTTP methods, such as:

- GET: Retrieve data
- POST: Create new data
- PUT: Update existing data
- DELETE: Delete data
- PATCH: Partially update existing data

HTTP APIs also use HTTP status codes to indicate the result of a request, such as:

- 200 OK: Request was successful
- 404 Not Found: Resource was not found
- 401 Unauthorized: Authentication failed
- 403 Forbidden: Authorization failed

Overall, HTTP APIs provide a standardized way for systems to communicate with each other and exchange data.

### How to send an HTTP fetch request

The fetch method is a modern JavaScript function that allows you to make HTTP requests to a server and retrieve data. It is a promise-based API that provides a simple and intuitive way to interact with web servers.

Here is a brief overview of the fetch method:

#### Syntax

```javascript
fetch(url, options);
```

#### Parameters

- url: The URL of the server to make the request to
- options: An object that specifies the request method, headers, body, and other options
- Return Value: A promise that resolves to a Response object, which contains the server's response to the request

#### Common Use Cases

- Making GET requests to retrieve data from a server
- Making POST requests to send data to a server and create a new resource
- Making PUT requests to update an existing resource on a server
- Making DELETE requests to delete a resource from a server

Example

```javascript
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

This example makes a GET request to the specified URL and retrieves the response data as JSON.

### The parts of the fetch "options" object

#### Method

The method of a fetch request specifies the HTTP method to use when sending the request to the server. The most common methods are:

- GET: Retrieve data from the server
- POST: Send data to the server to create a new resource
- PUT: Send data to the server to update an existing resource
- DELETE: Delete a resource from the server
- PATCH: Send data to the server to partially update an existing resource
  Example:

```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
});
```

#### Headers

The headers of a fetch request specify additional information about the request, such as the content type, authentication tokens, and caching instructions. Common headers include:

- Content-Type: Specifies the format of the request body (e.g. application/json, multipart/form-data)
- Authorization: Specifies authentication tokens or credentials (e.g. Bearer YOUR_TOKEN)
- Accept: Specifies the expected response format (e.g. application/json, text/plain)
- Cache-Control: Specifies caching instructions (e.g. max-age=3600, no-cache)

Example:

```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_TOKEN',
  },
});
```

#### Body

The body of a fetch request specifies the data to be sent to the server. The format of the body depends on the Content-Type header. Common body formats include:

- JSON: A lightweight data interchange format (e.g. { name: 'John Doe', email: 'johndoe@example.com' })
- FormData: A format used to send form data to the server (e.g. new FormData() with appended fields)
- Text: A plain text format (e.g. 'Hello, World!')
- Blob: A format used to send binary data (e.g. new Blob([data], { type: 'image/jpeg' }))

Example:

```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'johndoe@example.com',
  }),
});
```

By combining these three components, you can create a fetch request that sends data to a server and retrieves a response.

### The Response object

The fetch method returns a promise that resolves to a Response object. The Response object represents the server's response to the request.

Here is a brief overview of the Response object:

#### Properties

- ok: A boolean indicating whether the response was successful (status code in the range 200-299)
- status: The HTTP status code of the response
- statusText: The status message associated with the response
- headers: The response headers
- body: The response body

#### Methods

- json(): Returns a promise that resolves to the response data parsed as JSON
- text(): Returns a promise that resolves to the response data as plain text
- blob(): Returns a promise that resolves to the response data as a Blob object
- arrayBuffer(): Returns a promise that resolves to the response data as an ArrayBuffer object

Example

```javascript
fetch('https://api.example.com/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

In this example, the fetch method is used to make a GET request to the specified URL. The response is checked to ensure it was successful (status code in the range 200-299). If the response is successful, the json() method is called to parse the response data as JSON. The parsed data is then logged to the console.

Note that the fetch method returns a promise, which means that you can use the then() method to handle the response data and the catch() method to handle any errors that occur during the request.

### What is a Javascript Promise?

A JavaScript promise is a result object that is used to handle asynchronous operations. It represents a value that may not be available yet, but will be resolved at some point in the future.

A Promise can be created by calling the constructor function **Promise** with the **new** keyword. This constructor has one parameter which is a callback function. This callback function has 2 parameters, both of which are callback functions.

#### The Promise Callback Functions

- Resolve callback function: A function that is executed when a promise is resolved. It is called with the value that the promise was resolved with.
- Reject callback function: A function that is executed when a promise is rejected. It is called with the error that caused the promise to be rejected.

Example

```javascript
const promise = new Promise((resolve, reject) => {
  /*
  setTimeout is a built-in asynchronous function
  which takes 2 parameters: 
    a function to be executed and 
    a delay in milliseconds
  */
  setTimeout(() => {
    resolve('Hello, World!');
  }, 2000);
});

promise.then(
  (value) => {
    console.log(value); // Output: Hello, World!
  },
  (error) => {
    console.error(error);
  }
);
```

In this example, the then() method is used to specify two callback functions:

The first callback function is the resolve callback function. It is executed when the promise is resolved and is called with the value 'Hello, World!'.

The second callback function is the reject callback function. It is executed when the promise is rejected and is called with the error that caused the promise to be rejected.

#### Key Characteristics of a Promise

- Asynchronous: Promises are used to handle asynchronous operations, such as network requests or database queries.
- Result object: A promise is a result object that represents a value that may not be available yet.
- Resolved or rejected: A promise can be either resolved (successful) or rejected (failed).
- Thenable: Promises have a then() method that allows you to specify a callback function to be executed when the promise is resolved.
- Catchable: Promises have a catch() method that allows you to specify a callback function to be executed when the promise is rejected.

#### Promise States

- Pending: The promise is waiting for the asynchronous operation to complete.
- Resolved: The promise has been successfully resolved and the value is available.
- Rejected: The promise has been rejected and an error has occurred.
  Example

```javascript
const promise = new Promise((resolve, reject) => {
  const delayMs = 2000;
  setTimeout(() => {
    resolve('Hello, World!');
  }, delayMs);
});

promise
  .then((value) => {
    console.log(value); // Output: Hello, World!
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, a promise is created that represents an asynchronous operation that takes 2 seconds to complete. When the operation is complete, the promise is resolved and the value is available. The then() method is used to specify a callback function to be executed when the promise is resolved, and the catch() method is used to specify a callback function to be executed when the promise is rejected.

### Airtable Schema API

The Airtable API allows you to define a database schema by creating tables, fields, and relationships between them. Here are the steps to define a database schema using the Airtable API:

- Create a table: Use the **POST /v0/{baseId}/tables** endpoint to create a new table. You can specify the table name, description, and fields in the request body.
- Create fields: Use the **POST /v0/{baseId}/tables/{tableId}/fields** endpoint to create new fields in a table. You can specify the field name, type, and other properties in the request body.
- Define field types: Airtable supports various field types, such as text, number, date, and checkbox. You can specify the field type when creating a field.
- Create relationships: Use the **POST /v0/{baseId}/tables/{tableId}/fields/{fieldId}/relationships** endpoint to create relationships between tables. You can specify the related table and field in the request body.
- Define schema properties: You can define additional schema properties, such as validation rules, default values, and formatting options, using the **PATCH /v0/{baseId}/tables/{tableId}/fields/{fieldId}** endpoint.

Here's an example of how to define a simple database schema using the Airtable API:

#### Create a table

```json
POST /v0/{baseId}/tables

body: {
  "name": "Customers",
  "description": "Customer information"
}
```

#### Create fields

Text field example

```json
POST /v0/{baseId}/tables/{tableId}/fields

body: {
  "name": "Name",
  "type": "text"
}
```

Email field example

```json
POST /v0/{baseId}/tables/{tableId}/fields

body: {
  "name": "Email",
  "type": "email"
}
```

#### Create relationships

```json
POST /v0/{baseId}/tables/{tableId}/fields/{fieldId}/relationships
body: {
  "relatedTable": "Orders",
  "relatedField": "Customer"
}
```

#### Define schema properties

```json
PATCH /v0/{baseId}/tables/{tableId}/fields/{fieldId}

body: {
  "validation": {
    "required": true
  }
}
```

By using the Airtable API, you can define a database schema that meets your specific needs and requirements.

### Airtable Data API

The Airtable API allows you to insert, update, and retrieve data in Airtable using standard HTTP methods. Here are the steps to use the Airtable API to insert, update, retrieve, and delete data:

#### Insert data

To insert data into Airtable, use the **POST /v0/{baseId}/tables/{tableId}/** rows endpoint. You can specify the table ID and the data to insert in the request body.

Here's an example of how to insert a new record into a table using the Airtable API:

```json
POST /v0/{baseId}/tables/{tableId}/rows
body: {
  "fields": {
    "Name": "John Doe",
    "Email": "johndoe@example.com"
  }
}
```

#### Update data

To update data in Airtable, use the **PATCH /v0/{baseId}/tables/{tableId}/rows/{rowId}** endpoint. You can specify the table ID, row ID, and the updated data in the request body.

Here's an example of how to update an existing record in a table using the Airtable API:

```json
PATCH /v0/{baseId}/tables/{tableId}/rows/{rowId}
body: {
  "fields": {
    "Email": "newemail@example.com"
  }
}
```

#### Retrieve data

To retrieve data from Airtable, use the **GET /v0/{baseId}/tables/{tableId}/rows** endpoint. You can specify the table ID and any additional parameters, such as filtering or sorting, in the request URL.

Here's an example of how to retrieve all records from a table using the Airtable API:

```json
GET /v0/{baseId}/tables/{tableId}/rows
```

#### Delete data

To delete data from Airtable, use the DELETE /v0/{baseId}/tables/{tableId}/rows/{rowId} endpoint. You can specify the table ID and row ID in the request URL.

Here's an example of how to delete a record from a table using the Airtable API:

```json
DELETE /v0/{baseId}/tables/{tableId}/rows/{rowId}
```

Note that deleting a record will permanently remove it from the table, so use this endpoint with caution.

By using the Airtable API, you can insert, update, retrieve, and delete data in Airtable programmatically.

### Personal Access tokens

Airtable Personal Access Tokens are a way to authenticate and authorize API requests to Airtable without sharing your account password. Here's how they work:

#### What is a Personal Access Token?

A Personal Access Token is a unique string of characters that is generated by Airtable and associated with your account. It's used to authenticate API requests and grant access to your Airtable data.

#### How to generate a Personal Access Token

To generate a Personal Access Token, follow these steps:

- Log in to your Airtable account.
- Click on your profile picture or initials in the top right corner of the screen.
- Click on "Account" from the dropdown menu.
- Scroll down to the "Personal Access Tokens" section.
- Click on the "Generate token" button.
- Choose a name for your token (e.g. "My API Token").
- Click on the "Generate token" button again.

#### How to use a Personal Access Token

To use a Personal Access Token, you'll need to include it in the Authorization header of your API requests. The format is:

Replace YOUR_PERSONAL_ACCESS_TOKEN with the actual token string.

```json
headers: {
  "Authorization": "Bearer YOUR_PERSONAL_ACCESS_TOKEN"
}
```

#### Token permissions

When you generate a Personal Access Token, you can choose which permissions to grant to the token. The available permissions are:

- Read-only: Allows the token to read data from your Airtable base, but not modify it.
- Read-write: Allows the token to read and modify data in your Airtable base.
- Create: Allows the token to create new records in your Airtable base.

#### Token expiration

Personal Access Tokens expire after a certain period of time (usually 1 year). You can regenerate a new token at any time, and the old token will be invalidated.

#### Security best practices

To keep your Personal Access Token secure:

- Never share your token with anyone.
- Store your token securely, such as in an environment variable or a secure storage service.
- Use a token with the minimum required permissions for your API requests.
- Regenerate a new token if you suspect it has been compromised.

By using Personal Access Tokens, you can securely authenticate and authorize API requests to Airtable without sharing your account password.

## Airtable API code for ClassDirectory project

This project contains a node program `uploadToAirtable.js`, that uses the Airtable API to create the Students table and insert data into it.

Prerequisites: node version >= 18 (which has the "fetch" function built-in)

### Usage

```bash
node uploadToAirtable.js
```

### Main functions

- createStudentsTable
- getTableMetadata
- getStudentTableId
- insertStudent
- fetchTable
- run (which calls all the other functions)

### How to create your own Personal Access Token

To create your own tables, you will need to create your own Personal Access Token.

#### Open Airtable home page in browser

[Airtable](https://airtable.com/)

#### Create a new workspace and database

In left sidebar, click + next to All Workspaces and create new workspace

Click the **Create** button below "This workspace is empty"

The input text field is initially called "Workspace"
change to "ClassDirectoryWorkspace".

Choose "Start from scratch"

A new base called "Untitled Base" will open

Click "Untitled Base" and rename it "ClassDirectory"

Copy the URL and paste into the node program.
https://airtable.com/app1iHuo66LG7u6ph/tblvv6DdLRlTdPSRa/viwyrS9HpkpEq5tFI?blocks=hide

#### Create a Personal Access Token

Browse to create a new token
[Create token](https://airtable.com/create/tokens/new)

Name token: ClassDirectoryReadWrite

Under Scopes:

1. Click add scope:
   data.records:read
2. Click add scope:
   data.records:write
3. Click add scope again:
   schema.bases:read
4. Click add scope again:
   schema.bases:write

Click add a base:
ClassDirectory

Click Create, copy and paste the token into the node program.
