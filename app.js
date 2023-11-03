/*********************************************************************************
 *** 
 * ITE5315 – Assignment 2 
 * I declare that this assignment is my own work in accordance with Humber Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source 
 * (including web sites) or distributed to other students. 
 *  
 * Name: Yash Ashokkumar Patel     Student ID: N01537676     Date: 03/11/2023 
 * 
 * 
 * ********************************************************************************/
// Import the express module
var express = require('express');

// Import the fs module
var fs = require('fs');

// Import the path module
var path = require('path');

// Import the body-parser module
var bodyParser = require('body-parser');

// Create a new express application
var app = express();

// Import the express-handlebars module
const exphbs = require('express-handlebars');

// Set the port for the server to listen on
const port = process.env.port || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the view engine to use Handlebars
app.engine('.hbs', exphbs.engine({ 
  extname: '.hbs',
  defaultLayout: 'main',
    helpers:{ 
      replaceBlank: function(classValue) {
        if (classValue === '') {
            return 'unknown';
        }
        return classValue;
      },
      isEqual: function(value1, value2) {
        return value1 === value2;
      }
    } 
}));
app.set('view engine', 'hbs');

// Define a route for the root URL ('/')
app.get('/', function(req, res) {
  // Render the 'index' view, passing in a title
  res.render('index', { title: 'Express' });
});

// Define a route for the '/cv' URL
app.get('/cv', function(req, res) {
  // Render the 'cv' view, passing in a title
  res.render('cv', { title: 'CV' });
});

// Define a route for the '/alldata/invoiceNo/:index' URL
app.get('/alldata/invoiceNo/:index', (req, res) => {
  // Extract the 'index' parameter from the URL
  const index = parseInt(req.params.index);
  const jsonFilePath = path.join(__dirname, 'CarSales.json');

  // Read and parse the JSON file, then send the InvoiceNo if found
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      if (index >= 0 && index < jsonData.length) {
        const invoiceNo = jsonData[index].InvoiceNo;
        res.render('invoice', { invoiceNo: invoiceNo, title: 'Invoice No' });
      } else {
        res.render('error', { title: 'Error', message:'Invoice No not found' });
      }
    }
  });
});

// Define a route for the '/search/invoice' URL
app.get('/search/invoice', function(req, res) {
  // Render the 'search_invoice' view, passing in a title
  res.render('search_invoice', { title: 'Invoice Search' });
});

// Handle the form submission for InvoiceNo search
app.post('/search/invoiceNo', (req, res) => {
  const searchInvoiceNo = req.body.invoiceNo;
  const jsonFilePath = path.join(__dirname, 'CarSales.json');

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      const result = jsonData.find((entry) => entry.InvoiceNo === searchInvoiceNo);

      if (result) {
        res.render('search_invoice_result', { result });
      } else {
        res.render('error', { title: 'Error', message:'No car sales record found for the specified InvoiceNo' });
      }
    }
  });
});

// Define a route to display the search form for Manufacturer
app.get('/search/manufacturer', (req, res) => {
  res.render('search_manufacturer', { title: 'Search for Manufacturer' });
});

// Handle the form submission for Manufacturer search
app.post('/search/manufacturerResult', (req, res) => {
  const searchManufacturer = req.body.manufacturer.toLowerCase();
  const jsonFilePath = path.join(__dirname, 'CarSales.json');

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      const results = jsonData.filter((entry) =>
        entry.Manufacturer.toLowerCase().includes(searchManufacturer)
      );

      if (results.length > 0) {
        res.render('search_manufacturer_result', {
          title: 'Search Manufacturer Results',
          searchManufacturer: searchManufacturer,
          results: results,
        });
      } else {
        res.render('error', { title: 'Error', message:`No sales records found for "${searchManufacturer}" Manufacturer.` });
      }
    }
  });
});

// Define a route for the '/allData' URL
app.get('/allData', function(req, res) {
  // Read and parse a JSON file containing data
  const jsonFilePath = path.join(__dirname, 'CarSales.json');
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      // Render the 'allData' view and pass the JSON data to it
      res.render('allData', { jsonData, title: 'All Sales Info'  });
    }
  });
});

// Define a route for the '/allData/Class' URL
app.get('/allData/Class', function(req, res) {
  // Read and parse a JSON file containing data
  const jsonFilePath = path.join(__dirname, 'CarSales.json');
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      // Render the 'allData_with_class' view and pass the JSON data to it
      res.render('allData_with_class', { jsonData, title: 'All Sales Info with class'  });
    }
  });
});

// Define a route for the '/users' URL
app.get('/users', function(req, res) {
  // Send a response with a message
  res.send('respond with a resource');
});

// Define a route for any other URL
app.get('*', function(req, res) {
  // Render the 'error' view, passing in a title and error message
  res.render('error', { title: 'Error', message:'Wrong Route' });
});

// Start the server and listen for incoming connections
app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}')
})