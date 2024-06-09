const heroCardsElement = document.querySelector('.hero__cards');

const truncate =(text, limit) =>{
  if(text.length > 50){
    text =text.slice(0, limit) + "..."
  }
  return text
}

const renderData = (data) => {
    data.data.forEach(blog => {
        const cardElement = document.createElement('div');
        cardElement.className = 'hero__card';
  
        cardElement.innerHTML = `
            <a href="../pages/pages.html?articles-_id=${blog._id}" class="hero__card">
              <img class="card__img" src="${blog.image}" alt="">
              <div class="hero-content">
               <h2 class="hero-content__title">${blog.title}</h2>
                 <p  class="hero-content__description">${truncate(blog.description, 50)}</p>
                 <div class="hero-content__content">
                    <i class="bi bi-person-circle"></i>
                    <p class="content">${blog.content}</p>
                 </div>
              </div>
            </a>
        `;

        heroCardsElement.appendChild(cardElement);
})
} 

fetch('https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderData(data);
})
    
    
    
    
    
    
    
    
    
    
