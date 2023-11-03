# Assignment 2

## Project Structure

This project contains an Express application that utilizes Handlebars for templating. The main structure includes the following folders and files:

- Asn2-yash/
	- node_modules/
	- public/
		- images/
		- stylesheets/
			- style.css
	- views/
		- layouts/
			- main.hbs
		- partials/
			- header.hbs
			- footer.hbs
		- allData_with_class.hbs
		- allData.hbs
		- cv.hbs
		- error.hbs
		- index.hbs
		- invoice.hbs
		- search_invoice_result.hbs
		- search_invoice.hbs
		- search_manufacturer_result.hbs
		- search_manufacturer.hbs
	- app.js
	- CarSales.json
	- package.json
	- package-lock.json

## Instructions

### Step 2:

Utilize the code snippets provided in the attached `codenippet.txt` file to fill in the contents of the files, including `style.css`, `main.hbs`, `index.hbs`, `error.hbs`, and `app.js`.

### Step 3:

After setting up the application, run the application and test it using the following routes:

- http://localhost:3000/
- http://localhost:3000/users
- http://localhost:3000/notExist

### Step 4:

Answer the following questions based on your observations:

a) The role of `main.hbs` and how it is used/called in the application.

b) The role of `index.hbs` and `error.hbs` and how they are used/called in the application.

c) The role of the specific line in `app.js` and what happens if it is commented out.

d) Add proper comments to each line/block in `app.js`.

### Step 5:

Modify the layout of the page by adding a header, content, and footer. Customize the `main.hbs` and `style.css` files to achieve this layout.

### Step 6:

Integrate the code from Assignment 1 into the template. Create specific pages in the `views` folder for each route in Assignment 1. Use `res.render` to render the appropriate page for each route.

### Step 7:

Create a new route `/allData` to display all Sales information in an HTML table using Handlebars helpers and expressions.

### Step 8:

Modify the route from Step 7 by removing records where the `class` attribute is blank.

### Step 9:

Design a custom helper to change "blank" to "unknown" for records where the `class` is blank. Apply this to the routes from Step 7 and Step 8 and highlight the rows where the `class` is blank.

### Step 10:

Discuss and implement any ideas for changing table row colors and utilizing Partial Templates in the application.

### Step 11:

Deploy the application to Cyclic and create a README file based on this assignment.

## Author

[Yash Patel]
