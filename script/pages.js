const url =location.search;
const articleId = new URLSearchParams(url).get('articles-_id');
const articleTitle = document.querySelector(".article-title");
const articleImg = document.querySelector(".article-img");
const articleDescription = document.querySelector(".article-description");

const renderData = (article) =>{
    articleTitle.innerHTML = article.title;
    articleImg.src = article.image;
    articleDescription.innerHTML = article.description;
    console.log(articleImg)
    console.log(articleTitle)
    console.log(articleDescription)
}

const loadData = () => {
    fetch(`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${articleId}`)
    .then(response => response.json())
    .then(data => renderData(data))
       
       
       
    }
loadData();