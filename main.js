// main.js
function countdown() {
    // Calculate the target countdown date, 14 days from now at 4:00 PM UTC
    var now = new Date();
    var countDownDate = new Date(Date.UTC(
        now.getUTCFullYear(), 
        now.getUTCMonth(), 
        now.getUTCDate() + 14, // 14 days from now
        16, 0, 0 // 16:00 hours (4:00 PM) UTC
    ));

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate.getTime() - now;

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
// Show Winners Popup
const showWinnersButton = document.querySelector('.show-winners');
const popupOverlayWinners = document.getElementById('popup-overlay-winners');
const popupCloseWinners = document.getElementById('popup-close-winners');

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
                <img src="${video.thumbnail}" alt="${video.title}" class="youtube-video-thumbnail">
                <div class="youtube-video-title">${video.title}</div>
            </a>
        `;
        youtubeVideosContainer.appendChild(videoCard);
    });
}


window.onload = function() {
    countdown();
    fetchYouTubeVideos();
    createBubbles();

    // Participate Popup
    const participateButton = document.querySelector('.how-to-participate');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupClose = document.getElementById('popup-close');

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

    // Show Winners Popup
    const showWinnersButton = document.querySelector('.show-winners');
    const popupOverlayWinners = document.getElementById('popup-overlay-winners');
    const popupCloseWinners = document.getElementById('popup-close-winners');

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

    // How to Claim Prize Popup
    const howToClaimButton = document.querySelector('.how-to-claim-prize');
    const popupOverlayClaim = document.getElementById('popup-overlay-claim');
    const popupCloseClaim = document.getElementById('popup-close-claim');

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

    // Contact Popup
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

    // Disclaimer Popup
    const disclaimerButton = document.getElementById('disclaimer-button');
    const popupOverlayDisclaimer = document.getElementById('popup-overlay-disclaimer');
    const popupCloseDisclaimer = document.getElementById('popup-close-disclaimer');

    disclaimerButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayDisclaimer.style.display = 'flex';
    });

    popupCloseDisclaimer.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayDisclaimer.style.display = 'none';
    });

    popupOverlayDisclaimer.addEventListener('click', (event) => {
        if (event.target === popupOverlayDisclaimer) {
            popupOverlayDisclaimer.style.display = 'none';
        }
    });
};
