document.addEventListener('DOMContentLoaded', function () {
    
    const elements = document.querySelectorAll('.case');
    const imageStuff = document.querySelector('.case-image');
    const project_desc = document.querySelector('.project-desc');

    elements[0].addEventListener('mouseout', function () {
        project_desc.firstChild.nodeValue = 
        "While invocies are key elements in most business activities, leveraging their data consistently requires a way to extract in a structured output. ";
    });
    
    elements[1].addEventListener('mouseover', function () {
        /*imageStuff.src = 'icons/price_monitoring_tool.png';*/
        project_desc.firstChild.nodeValue = 'ABC';
        console.log(project_desc)
    });

    elements[2].addEventListener('mouseout', function () {
        /*imageStuff.src = 'icons/image.png';*/
        project_desc.firstChild.nodeValue = 'GHI';
    });

    console.log(imageStuff)
});

document.addEventListener('DOMcontentLoaded', function () {

    const project_desc = document.querySelector('.project-desc');
    const projects = document.querySelectorAll('.case');

    projects[0].addEventListener('click', function () {
        project_desc.child = 'ABC';
    })
})