// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 渲染作品卡片
    renderWorksCards();
    
    // 渲染网站卡片
    renderSiteCards();
    
    // 筛选按钮事件
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterWorksCards(filter);
        });
    });
    
    // 添加卡片按钮事件
    document.getElementById('addCardBtn').addEventListener('click', addNewCard);
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 渲染作品卡片函数
function renderWorksCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    worksData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${card.category}`;
        cardElement.setAttribute('data-category', card.category);
        
        cardElement.innerHTML = `
            <div class="card-image">
                <img src="${card.image}" alt="${card.title}" loading="lazy">
            </div>
            <div class="card-content">
                <span class="card-category">${categoryMap[card.category]}</span>
                <h3 class="card-title">${card.title}</h3>
                <p class="card-description">${card.description}</p>
                <a href="${card.link}" class="card-link">查看详细分析 <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        container.appendChild(cardElement);
    });
}

// 渲染网站卡片函数
function renderSiteCards() {
    const container = document.getElementById('sitesContainer');
    container.innerHTML = '';
    
    externalSites.forEach(site => {
        const siteElement = document.createElement('div');
        siteElement.className = 'site-card';
        
        siteElement.innerHTML = `
            <div class="site-icon">
                <i class="${site.icon}"></i>
            </div>
            <h3>${site.name}</h3>
            <p>${site.description}</p>
            <a href="${site.url}" target="_blank" class="site-link">访问网站 <i class="fas fa-arrow-right"></i></a>
        `;
        
        container.appendChild(siteElement);
    });
}

// 筛选作品卡片函数
function filterWorksCards(filter) {
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        if(filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// 添加新作品卡片函数（演示功能）
function addNewCard() {
    const titleInput = document.getElementById('newCardTitle');
    const categorySelect = document.getElementById('newCardCategory');
    const descriptionInput = document.getElementById('newCardDescription');
    
    if(!titleInput.value.trim() || !descriptionInput.value.trim()) {
        alert('请填写作品标题和描述');
        return;
    }
    
    // 创建新的作品对象
    const newCard = {
        id: worksData.length + 1,
        title: titleInput.value,
        category: categorySelect.value,
        description: descriptionInput.value,
        image: getRandomImageForCategory(categorySelect.value),
        link: `case-${worksData.length + 1}.html`
    };
    
    // 添加到数据数组
    worksData.push(newCard);
    
    // 重新渲染所有卡片
    renderWorksCards();
    
    // 重置表单
    titleInput.value = '';
    descriptionInput.value = '';
    
    // 显示成功消息
    alert('演示卡片已添加！注意：刷新页面后此卡片将消失。');
}

// 根据类别获取随机图片（演示用）
function getRandomImageForCategory(category) {
    const imageMap = {
        clothing: [
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80',
            'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        ],
        handmade: [
            'https://images.unsplash.com/photo-1531346688376-ab6275c4725e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
            'https://images.unsplash.com/photo-1594736797933-dafaa7324b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
        ],
        textile: [
            'https://images.unsplash.com/photo-1586363104864-071cddc086ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=658&q=80',
            'https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
        ],
        accessory: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80',
            'https://images.unsplash.com/photo-1590649887895-3d8f1b5a6d5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
        ],
        sustainable: [
            'https://images.unsplash.com/photo-1542327777-6ce406ea3ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80'
        ]
    };
    
    const images = imageMap[category] || imageMap.clothing;
    return images[Math.floor(Math.random() * images.length)];
}
