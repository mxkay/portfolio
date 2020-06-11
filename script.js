const sheetURL = 'https://docs.google.com/spreadsheets/d/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/edit?usp=sharing';

const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/12WudbKp3rSdJJpJx7ANPEcC8J7unsYWwWaHBpXjtfPo/od6/public/values?alt=json'

// fetch project data
$.ajax({
    url: sheetAsJSON,
})
// then create an array containing each project's title, description, image, and url
.then( data => {
    // console.log('data', data)
    const projects = data.feed.entry.map( project => {
        return {
            title: project.gsx$title.$t,
            description: project.gsx$description.$t,
            image: project.gsx$image.$t,
            url: project.gsx$url.$t
        }
    })

    // initialize array for project card JQuery elements
    $projects = [];

    // build a JQuery element for each project
    projects.forEach( (project, index) => {
        $projects.push($(`
            <a href="${project.url}">
                <div class="portfolio__card" id="project${index}">
                    <h3 class="title">${project.title}</h3>
                    <div class="image" style="background-image: url(${project.image});"></div>
                    <div class="description">${project.description}</div>
                </div>
            </a>
            `));
        $('#portfolio__container').append($projects[index]);
    })
})
.catch( err => console.log('error loading ajax'));