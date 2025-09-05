document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    // Replace with your own image data
    const imageData = [
        {
            id: 1,
            title: 'Mountain Landscape',
            description: 'A breathtaking view of mountains under a clear blue sky.',
            imageUrl: 'https://images.unsplash.com/photo-1615485925575-b93558a25b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG1vdW50YWlufGVufDB8fHx8MTY4MTM5OTY5Nw&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
        {
            id: 2,
            title: 'Coastal Scenery',
            description: 'Waves crashing against a rocky shore during sunset.',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723a996f3d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJlYWNofGVufDB8fHx8MTY4MTM5OTc3Mg&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
        {
            id: 3,
            title: 'Forest Path',
            description: 'A serene path winding through a lush green forest.',
            imageUrl: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGZvcmVzdHxlbnwwfHx8fDE2ODEzOTk4MTA&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
        {
            id: 4,
            title: 'Urban Exploration',
            description: 'A bustling city street with vibrant lights at night.',
            imageUrl: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxjaXR5fGVufDB8fHx8MTY4MTM5OTg0Mw&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
        {
            id: 5,
            title: 'Desert Dunes',
            description: 'Golden sand dunes under a vast, open sky.',
            imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRlc2VydHxlbnwwfHx8fDE2ODEzOTk4NzI&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
        {
            id: 6,
            title: 'Winter Wonderland',
            description: 'A peaceful, snow-covered landscape with pine trees.',
            imageUrl: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3aW50ZXJ8ZW58MHx8fHwxNjgxMzk5OTAx&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
        {
            id: 7,
            title: 'Tropical Paradise',
            description: 'Crystal clear water and a white sandy beach with palm trees.',
            imageUrl: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHx0cm9waWNhbHxlbnwwfHx8fDE2ODEzOTk5Mjg&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
        {
            id: 8,
            title: 'Abstract Art',
            description: 'A colorful and vibrant display of abstract patterns.',
            imageUrl: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFic3RyYWN0fGVufDB8fHx8MTY4MTM5OTk1NQ&ixlib=rb-4.0.3&q=80&w=400',
            linkUrl: '#'
        },
         {
            id: 9,
            title: 'Wildlife',
            description: 'A majestic lion gazing into the distance.',
            imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D',
            linkUrl: '#'
        },
         {
            id: 10,
            title: 'Architecture',
            description: 'Modern architectural design with clean lines.',
            imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJjaGl0ZWN0dXJlfGVufDB8fHx8fA%3D%3D',
            linkUrl: '#'
        }
    ];

    // --- STATE ---
    const galleryContainer = document.getElementById('gallery-container');
    const paginationContainer = document.getElementById('pagination-container');
    const itemsPerPage = 6;
    let currentPage = 1;

    // --- FUNCTIONS ---
    function displayGalleryPage(page) {
        galleryContainer.innerHTML = '';
        currentPage = page;

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = imageData.slice(startIndex, endIndex);

        pageItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}" class="card-image">
                <div class="card-content">
                    <h2 class="card-title">${item.title}</h2>
                    <p class="card-description">${item.description}</p>
                </div>
            `;
            // Add click event listener to navigate
            card.addEventListener('click', () => {
                window.location.href = item.linkUrl;
            });
            galleryContainer.appendChild(card);
        });

        setupPagination();
    }

    function setupPagination() {
        paginationContainer.innerHTML = '';
        const pageCount = Math.ceil(imageData.length / itemsPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const button = document.createElement('button');
            button.className = 'pagination-button';
            button.innerText = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                displayGalleryPage(i);
            });
            paginationContainer.appendChild(button);
        }
    }

    // --- INITIALIZATION ---
    displayGalleryPage(1);
});