// function to generate markdown for README

  function generateMarkdown(data) {
    return `# ${data.title}
    ![GitHub](https://img.shields.io/github/license/${data.github}/${data.repo})
    ## Table of Contents
    - [Description](#description)
    - [Installation Instructions](#install)
    - [Usage Information](#usage)
    - [Contributers](#contributers)
    - [Test](#test)
    - [License](#license)
    - [Questions](#questions)
    
    <hr>
    
    ## Description <a name="description"></a>
    
    ${data.description}
    
    <hr>
    
    ## Installation Instructions <a name="install"></a>
    
    ${data.installation}
    
    <hr>
    
    ## Usage <a name="usage"></a>
    
    ${data.usage}
    
    <hr>
    
    ## Test <a name="test"></a>
    
    ${data.test}
    
    <hr>
    
    ## License <a name="license"></a>
    
    Please refer to the following license for guidelines, usage details, and information.
    
    ${data.license}
    
    <hr>

    ## Contributers <a name="contributers"></a>
    
    ${data.contribution}
    
    <hr>
    
    ## Questions <a name="questions"></a>
    
    For any questions regarding this project, contact me at the following:
    
    Email: ${data.email}
    
    Github: ${data.github}
    
    `;
  }
  
  module.exports = generateMarkdown;