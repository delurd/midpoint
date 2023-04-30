window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    const header = document.querySelector("header");
    header.classList.toggle("blur", scrollPosition > 10);

    const profileDesc = document.querySelector(".about .profile-desc");
    const articles = document.querySelectorAll("article");
    for (const article of articles) {
        const articleId = article.getAttribute("id");

        if (article.offsetTop <= scrollPosition + 400) {
            document.querySelector(".navigation .active").classList.remove("active");
            document.querySelector('.navigation a[href*=' + articleId + ']').classList.add("active");
            if (articleId == "about") {
                profileDesc.classList.add("hover");
            } else {
                profileDesc.classList.remove("hover");

            }
        } else if(articleId == "contact" && article.offsetTop <= scrollPosition + 700){
            document.querySelector(".navigation .active").classList.remove("active");
            document.querySelector('.navigation a[href*=' + articleId + ']').classList.add("active");
        }
    }

});

// const profilePic = document.querySelector(".profile-pic");
// const profileDesc = document.querySelector(".about .profile-desc");
// profilePic.addEventListener("mouseover", function () {
//     profileDesc.classList.toggle("hover");
// })
