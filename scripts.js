document.addEventListener('DOMContentLoaded', function () {
    
    const cases = document.querySelectorAll('.case');
    const project_desc = document.querySelector('.project-desc');

    cases[0].addEventListener('mouseout', function () {
        project_desc.firstChild.nodeValue = 
        "While invocies are key elements in most business activities, retrieving their data consistently requires an easy way to extract it in a structured output. This POC uses computer vision to extract the invoice information and send it to a Google Sheet for further analysis.";
    });
    
    cases[1].addEventListener('mouseover', function () {
        project_desc.firstChild.nodeValue = 
        "Several frameworks of the python ecosystem are targeted towards data apps development. These frameworks offer an alternative way to develop BI solutions without relying on traditional vendors like Microsoft or Salesforce. This demo app uses the Dash Plotly framework.";
    });

    cases[2].addEventListener('mouseout', function () {
        project_desc.firstChild.nodeValue = 
        "Product categorization is an important process in domains such as digital commerce. A precise categorization contributes to an optimal customer experience and better conversion rate. This POC leverages AI capabilities to streamline and automate the categorization process.";
    });
});