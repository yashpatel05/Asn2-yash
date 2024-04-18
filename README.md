# Assignment 2

## Introduction

Assignment 2 involved creating an Express application named "Asn2-yash" with Handlebars templating for dynamic content rendering. Key tasks included establishing project structure, testing routes, modifying layouts, designing new routes, implementing data filtering, and deploying the application. Detailed steps and screenshots can be found in the accompanying Word file in the GitHub repository.

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

## Steps Taken

### Step 1: Project Setup

1. Created a new folder named "Asn2-yash."
2. Initialized npm inside the folder using `npm init`.
3. Installed Express and Express Handlebars via npm.
4. Ensured the project structure adheres to the provided outline.

### Step 3: Application Testing

After setting up the application, run the application and test it using the following routes:

- http://localhost:3000/
- http://localhost:3000/users
- http://localhost:3000/notExist

### Step 4: Observations and Answers

a) **Role of `main.hbs`:**  
   `main.hbs` serves as the main template for the HTML structure, providing a layout shared across multiple views.

b) **Role of `index.hbs` and `error.hbs`:**  
   `index.hbs` renders content for the '/' route, while `error.hbs` displays an error message for non-existent routes.

c) **Role of `app.js` line:**  
   `app.use(express.static(path.join(__dirname, 'public')));` serves static files. Commenting it out would prevent static file serving.

### Step 5: Layout Modification

Modify the layout of the page by adding a header, content, and footer. Customize the `main.hbs` and `style.css` files to achieve this layout.

### Step 6: Integration of Assignment 1

Integrate the code from Assignment 1 into the template. Create specific pages in the `views` folder for each route in Assignment 1. Use `res.render` to render the appropriate page for each route.

### Step 7: New Route Creation

Create a new route `/allData` to display all Sales information in an HTML table using Handlebars helpers and expressions.

### Step 8: Data Filtering

Modified the `/allData` route to remove records with blank `class` attributes.

### Step 9: Custom Handlebar Helper

Designed a custom helper to change "blank" to "unknown" for records with blank `class` attributes, highlighting affected rows.

### Step 10: Further Enhancements

Implemented row color changes for records with blank `class` attributes. Discussed the use of Partial Templates for code reuse.

### Step 11:

1. Pushed the code to GitHub.
2. Deployed the application to Cyclic.

Deployed Application Link: [https://thankful-crab-onesies.cyclic.app/](https://thankful-crab-onesies.cyclic.app/)

## Additional Steps and Screenshots

For additional steps and screenshots, please refer to the Word file located in the [Asn2-yash](https://github.com/yashpatel05/Asn2-yash/blob/master/Assignment2_Yash_Patel.docx).

## Author

**Yash Ashokkumar Patel**  
**ID:** N01537676  
**Subject:** Web Programming and Framework 1
