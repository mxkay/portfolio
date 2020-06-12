# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 1| Core Application Structure (HTML, CSS) | Complete
|Day 2| Responsive design | Complete
|Day 2| Project previews | Complete
|Day 3| Contact modal | Complete
|Day 3| Finishing touches on styling | Incomplete
|Day 4| Project hover animation | Incomplete
|Day 4| List languages & libraries for each project | Incomplete
|Day 4| About me animation | Canceled
|Day 5| Present | Incomplete

## Project Description

This is a web application for showcasing my skills as a full-stack software developer. It includes a project portfolio, information about me, and methods to contact me. New projects can be easily added to the page by adding information (title, description, image, url) to the spreadsheet below.

## Google Sheet

https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit#gid=0

## Wireframes

- [Mobile](images/wireframe_mobile.jpg)
- [Mobile with Modal](images/wireframe_mobile_modal.jpg)
- [Desktop](images/wireframe_desktop.jpg)
- [Desktop with Modal](images/wireframe_desktop_modal.jpg)
- [Landing Section](images/wireframe_landing_section.jpg) (not part of original draft)

## Time/Priority Matrix 

[Chart](images/time_priority_matrix.jpg)

### MVP/PostMVP

#### MVP (examples)

- Core app structure
- Project previews 
- Contact modal
- Finishing touches on styling
- Responsive design changes

#### PostMVP 

- Project hover animation
- List languages & libraries for each project
- About me animation

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Core app structure | H | 2hr | 0hr | 2hr|
| Project previews | H | 2hr | 0hr | 4hr|
| Contact modal | H | 3hr | 0hr | 1hr |
| Finishing touches on styling | H | 5hr | 0hr | 10hr|
| Responsive design changes | H | 3hr | 0hr | 3hr|
| Total |  | 15hrs| 0hrs | 20hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project hover animation | M | 1hr | -hr | -hr|
| List languages & libraries for each project | L | 3hrs| -hr | -hr |
| About me animation | L | 1hr | -hr | -hr|
| Total |  | 5hrs| -hrs | -hrs |

## Additional Libraries
- JQuery
- Bootstrap

## Code Snippet
 

This is how I build project cards into the DOM using jQuery. This is nested inside of the ajax.then function that we learned in class. It was challenging and educational to learn the proper syntax to make this work correctly.
```
// build a jQuery element for each project
projects.forEach( (project, index) => {
	$projects.push($(`
	<a href="${project.url}" class="portfolio__card" id="project${index}">
		<h3 class="title">${project.title}</h3>
		<div class="image" style="background-image: url(${project.image});"></div>
		<div class="description">${project.description}</div>
	</a>
	`));
	$('#portfolio__container').append($projects[index]);
})
```
This is the CSS I used to style the cards on the page within the portfolio__container div
```
/* BEGIN PORTFOLIO */

#portfolio {
    padding: 25px;
    background-color: #0D1F2D;
}

.portfolio__body {
    margin: 0 auto;
    max-width: 1100px;
}

#portfolio__container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

/* BEGIN PROJECT CARD */

.portfolio__card {
    display: block;
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    margin: 20px;
    background-color: #F2F7F2;
    border: 1px solid #0D1F2D;
}
```


## Issues and Resolutions
***see all issues on [github](https://github.com/mxkay/portfolio/issues)***

* I noticed the amount of content on the page was overwhelming, and it felt like I was skipping the introduction and going straight into projects. To make a more comfortable and inviting experience, I added a landing section at the top of my page that acts as an introduction.

* The iframe I used on the landing page would trigger horizontal scrolling on some screen sizes. I resolved this by limitting the iframe's width, so it is never larger than the viewport.

* I wanted to fit more projects on the page at once in my portfolio section (they were originally in a single column). To achieve this, I limited the width of the cards and arranged them in a flexbox. It took some experimentation to get the flex attributes just how I wanted them.

* I got this error,
```
jQuery.Deferred exception: url is not defined ReferenceError: url is not defined
    at file:///home/kay/seir-526/project1/project-1-portfolio/script.js:27:20
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (file:///home/kay/seir-526/project1/project-1-portfolio/script.js:25:14)
    at e (https://code.jquery.com/jquery-3.5.1.min.js:2:30005)
    at t (https://code.jquery.com/jquery-3.5.1.min.js:2:30307) undefined
```

because I forgot to write the project method before calling the url property

```// build a jQuery element for each project
projects.forEach( (project, index) => {
	$projects.push($(`
	<a href="${url}" class="port...
```

The correct syntax looks like,

```// build a jQuery element for each project
projects.forEach( (project, index) => {
	$projects.push($(`
	<a href="${project.url}" class="port...
```