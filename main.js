// main.js
function countdown() {
    
    var countDownDate = new Date("Jul 27, 2024 23:12:00").getTime();

    
    var x = setInterval(function() {
        
        var now = new Date().getTime();

        
        var distance = countDownDate - now;

        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

       
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

       
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);
}

function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles-container');
    const bubbleCount = 100;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 3 + 3;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 15}s`;
        bubble.style.background = `rgb(245, 191, 76, ${Math.random() * 0.5 + 0.2})`;

        bubblesContainer.appendChild(bubble);
    }
}

const YOUTUBE_RSS_FEED = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCxElbn4HsMP9hYoM_dYjX2g'; 
const RSS2JSON_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

async function fetchYouTubeVideos() {
    const response = await fetch(`${RSS2JSON_API_URL}${encodeURIComponent(YOUTUBE_RSS_FEED)}`);
    const data = await response.json();
    displayYouTubeVideos(data.items.slice(0, 5));
}

function displayYouTubeVideos(videos) {
    const youtubeVideosContainer = document.getElementById('youtube-videos');
    youtubeVideosContainer.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'youtube-video-card';
        videoCard.innerHTML = `
            <a href="${video.link}" target="_blank">
                <img src="${video.thumbnail.replace('hqdefault', 'maxresdefault')}" alt="${video.title}" class="youtube-video-thumbnail">
                <div class="youtube-video-title">${video.title}</div>
            </a>
        `;
        youtubeVideosContainer.appendChild(videoCard);
    });
}

window.onload = function() {
    countdown();
    fetchYouTubeVideos();

   
    const participateButton = document.querySelector('.how-to-participate');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupClose = document.getElementById('popup-close');

    const showWinnersButton = document.querySelector('.show-winners');
    const popupOverlayWinners = document.getElementById('popup-overlay-winners');
    const popupCloseWinners = document.getElementById('popup-close-winners');

    const howToClaimButton = document.querySelector('.how-to-claim-prize');
    const popupOverlayClaim = document.getElementById('popup-overlay-claim');
    const popupCloseClaim = document.getElementById('popup-close-claim');

    participateButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlay.style.display = 'flex';
    });

    popupClose.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    showWinnersButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayWinners.style.display = 'flex';
    });

    popupCloseWinners.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayWinners.style.display = 'none';
    });

    popupOverlayWinners.addEventListener('click', (event) => {
        if (event.target === popupOverlayWinners) {
            popupOverlayWinners.style.display = 'none';
        }
    });

    howToClaimButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayClaim.style.display = 'flex';
    });

    popupCloseClaim.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayClaim.style.display = 'none';
    });

    popupOverlayClaim.addEventListener('click', (event) => {
        if (event.target === popupOverlayClaim) {
            popupOverlayClaim.style.display = 'none';
        }
    });

    document.getElementById('contact-button').addEventListener('click', function(event) {
        event.preventDefault(); 
    }); 

    createBubbles();

    
    const contactButton = document.getElementById('contact-button');
    const popupOverlayContact = document.getElementById('popup-overlay-contact');
    const popupCloseContact = document.getElementById('popup-close-contact');

    contactButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayContact.style.display = 'flex';
    });

    popupCloseContact.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayContact.style.display = 'none';
    });

    popupOverlayContact.addEventListener('click', (event) => {
        if (event.target === popupOverlayContact) {
            popupOverlayContact.style.display = 'none';
        }
    });
};
