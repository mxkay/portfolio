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
            <div class="portfolio__card" id="project${index}">
                <h2 class="title">${project.title}</h2>
                <div class="image" style="background-image: url(${project.image});"></div>
                <div class="description">${project.description}</div>
            </div>
            `));
            // add background image
            // .css('background-image', `url(${project.image})`));
        $('#portfolio__container').append($projects[index]);
        // $(`#project${index} > .image`).css('background', `url(${project.url}`);
    })

    console.log($projects);
})
.catch( err => console.log('error loading ajax'));

/* template for project card
    <div class="card" id="project1">
        <div class="image">
            <h2 class="title">Title</h2>
            <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero neque voluptatem, repellat labore odio error ut minima!</div>
        </div>
    </div>
*/