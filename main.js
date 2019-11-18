const projects_imgs = document.querySelectorAll("section#projects .imgs-container .project-img");
const projects_actions = document.querySelectorAll("section#projects .imgs-container .project-img .actions");

projects_imgs.forEach(project_img => {
    project_img.addEventListener('mouseenter', function() {
        this.querySelector('.actions').style.display = 'inline';
    });
    project_img.addEventListener('onmouseleave', function() {
        this.querySelector('.actions').style.display = 'none';
    });
});