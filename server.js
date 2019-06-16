const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// View Engine =================== //
app.set('view engine', 'ejs');

// Static Public Assets ========== //
app.use(express.static(__dirname + '/public'));

// Data ========================== //
// About / Profile / Personal Links
const profile = require('./models/profile');

// Projects
const allProjects = require('./models/project');
const projects = allProjects.slice(0,2);

// Makeathons / Hackathons / Collabathons


// Meetups / Community


// Routes ======================== //
app.get('/', (req, res) => {
  // res.send('<h1>Test</h1>');
  // res.render('index');
  res.render('index', {projects: projects, profile: profile });
});


// Start Server ================== //
app.listen(PORT, () => console.log('Start started on port: ', PORT));