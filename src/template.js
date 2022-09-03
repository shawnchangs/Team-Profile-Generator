// Create the cards for Team 
const generateTeam = (team) => {
    
    // Manager html
    const generateManager = (manager) => {
      return `
          <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title">${manager.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
          `;
    };
  
    // create the html for engineers
    const generateEngineer = (engineer) => {
      return `
          <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
          `;
    };
  
    // create the html for interns
    const generateIntern = (intern) => {
      return `
          <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
          `;
    };
  
    const html = [];
  
    html.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
  
  // export function to generate entire page
  module.exports = (team) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous"/>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center text-white">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };