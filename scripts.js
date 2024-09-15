document.addEventListener('DOMContentLoaded', function () {
    
    const cases = document.querySelectorAll('.case');
    const project_desc = document.querySelector('.project-desc');

    cases[0].addEventListener('mouseout', function () {
        project_desc.firstChild.nodeValue = 
        "Pricing is a crucial part of a company strategy when trying to optimize sales performance. A pricing tool can benefit Sales teams by providing them with a status-based workflow and a complete visibility of price and request history with date data.";
    });
    
    cases[1].addEventListener('mouseover', function () {
        project_desc.firstChild.nodeValue = 
        "While invocies are key elements in most business activities, retrieving their data consistently requires an easy way to extract it in a structured output. This POC uses computer vision to extract the invoice information and send it to a Google Sheet for further analysis.";
    });

    cases[2].addEventListener('mouseout', function () {
        project_desc.firstChild.nodeValue = 
        "Product categorization is an important process in domains such as digital commerce. A precise categorization contributes to an optimal customer experience and better conversion rate. This POC leverages AI capabilities to streamline and automate the categorization process.";
    });
});