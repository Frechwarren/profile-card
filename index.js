const githubBtn = document.getElementById("github");
const githubGraph = document.getElementById("githubContainer");
const linkedinBtn = document.getElementById("linkedin");
const linkedinDiv = document.getElementById("linkedinContainer");
const igBtn = document.getElementById("instagram");
const igDiv = document.getElementById("igContainer");

githubGraph.style.display = "none";
linkedinDiv.style.display = "none";
igDiv.style.display = "none";

githubBtn.addEventListener("click", () => {
  if (githubGraph.style.display === "none") {
    githubGraph.style.display = "block";
    linkedinDiv.style.display = "none";
    igDiv.style.display = "none";
  } else {
    githubGraph.style.display = "none";
  }
});

linkedinBtn.addEventListener("click", () => {
  if (linkedinDiv.style.display === "none") {
    linkedinDiv.style.display = "block";
    githubGraph.style.display = "none";
    igDiv.style.display = "none";
  } else {
    linkedinDiv.style.display = "none";
  }
});

igBtn.addEventListener("click", () => {
  if (igDiv.style.display === "none") {
    igDiv.style.display = "block";
    linkedinDiv.style.display = "none";
    githubGraph.style.display = "none";
  } else {
    igDiv.style.display = "none";
  }
});
