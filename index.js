const container = document.getElementById("cards");

data.forEach((result, idx) => {
  // Create card element
  const card = document.createElement("div");
  card.classList = "card-body";

  // Construct card content
  const content = `
    <div class="card">
            <img src="${result.image}" alt="project pic" />
            <div class="card-content card-body">
              <h3 class="title">${result.title}</h3>
              <p>
                ${result.description}
              </p>
              <h3 class="stack">Tech Stack</h3>
                <span class="techstack"> ${result.techStack} </span> 
              <hr>
              <div class="card-foot">
                <a href="${result.sourceCode}" class="sourcecode-btn" target="_blank"><i class="fa-brands fa-github"></i> Source Code</a >
                  
                  <a href="${result.livePreview}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Preview</a>
                </div>
              </div>
          </div>
    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
