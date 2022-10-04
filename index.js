const container = document.getElementById("cards");

data.forEach((result) => {
  // Create card element
  const card = document.createElement("div");
  card.classList = "card-body";
  // set every tech stack a specific color
  
  const techstack = document.querySelectorAll(".techstack");
  const colors = ["#E34C26", "#2965f1", "#f0db4f",  "#61dafb", "#4dc0b5", "#4dc0b5"];
  techstack.forEach((item, id) => {
      if (item.innerText === "HTML") {
          item.style.color = colors[0];
        } else if (item.innerText === "CSS") {
              item.style.color = colors[1];
            } else if (item.innerText === "JavaScript") {
                  item.style.color = colors[2];
                } else if (item.innerText === "React JS") {
                    //   item.style.backgroundColor = colors[3];
                      item.style.color = colors[3];
                    } else if (item.innerText === "Next JS") {
                          item.style.color = colors[4];
                        } else if (item.innerText === "Tailwind CSS") {
                              item.style.color = colors[5];
                            } else if (item.innerText === "MongoDB") {
                                    item.style.color = colors[6];
                                    }
                                    console.log(item);
  });

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

                <div class="stack-list">
                    ${result.techStack.map((item) => `<span class="techstack">${item}</span>`).join("")}
                </div>
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
