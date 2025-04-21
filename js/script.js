document.addEventListener('DOMContentLoaded', function() {
    
    const newsData = {
      "news": [
        {
          "id": 1,
          "title": "Изменения в ОГЭ по русскому языку в 2025 году",
          "type": "text",
          "content": "В экзамен добавлено новое задание на анализ текста. Повышено внимание к орфографии и пунктуации. Подробности — в методических рекомендациях ФИПИ.",
          "link": "#",
          "linkText": "Перейти к новостям"
        },
        {
          "id": 2,
          "title": "ЕГЭ по химии: новый формат заданий в 2025",
          "type": "text",
          "content": "В экзамен добавлены задания на анализ экспериментальных данных и расчеты. Подробности — в методических рекомендациях ФИПИ.",
          "link": "#",
          "linkText": "Перейти к новостям"
        },
        {
          "id": 3,
          "title": "Пороговый балл ЕГЭ по математике повышен",
          "type": "text",
          "content": "В связи с изменением структуры экзамена пороговый балл для поступления на бюджетные места повышен. Подробности — в приказах Министерства образования.",
          "link": "#",
          "linkText": "Перейти к новостям"
        }
      ]
    };
  
    
    function renderNews(newsItems) {
      const newsContainer = document.getElementById('news-container');
      newsContainer.innerHTML = ''; 
  
      newsItems.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'new';
  
        const themeDiv = document.createElement('div');
        themeDiv.className = 'new-theme';
  
        
        const title = document.createElement('h1');
        title.textContent = item.title;
        themeDiv.appendChild(title);
  
        
        if (item.type === 'text') {
          const paragraph = document.createElement('p');
          paragraph.textContent = item.content;
          themeDiv.appendChild(paragraph);
        } else if (item.type === 'list') {
          const list = document.createElement('ul');
          
          item.items.forEach(listItem => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = listItem;
            li.appendChild(link);
            list.appendChild(li);
          });
          
          themeDiv.appendChild(list);
        }
  
        newsCard.appendChild(themeDiv);
  
        
        const link = document.createElement('a');
        link.href = item.link;
        link.className = 'news-link';
        link.textContent = item.linkText;
        
        newsCard.appendChild(link);
        newsContainer.appendChild(newsCard);
      });
    }
  
    
    function loadNewsFromFile() {
      fetch('./index.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          renderNews(data.news);
        })
        .catch(error => {
          console.error('Error loading news:', error);
          const newsContainer = document.getElementById('news-container');
          newsContainer.innerHTML = '<div class="loading">Ошибка загрузки новостей. Попробуйте позже.</div>';
        });
    }
  
    
    setTimeout(() => {
      
      renderNews(newsData.news);
      
      
    }, 500);
  });