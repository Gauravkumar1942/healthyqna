// $(document).ready(function(){
// 	$('.filter-item').click(function(){
// 		const value = $(this).attr('data-filter')
// 		if (value == 'all') {
// 			$('.post-box').show('1000');
// 		}
// 		else
// 		{
// 			$('.post-box').not('.' + value).hide(1000);
// 			$('.post-box').filter('.' + value).show(1000);
// 		}
// 	});

// 	// Add Active Button

// 	$('.filter-item').click(function(){
// 		$(this).addClass('active-filter').siblings().removeClass('active-filter');
// 	});
// });

// Header bg change while scrolling

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0);
});



// social media sharing code in js 




  // Function to get the current URL
        function getCurrentURL() {
            return window.location.href;
        }

        // Function to share on Facebook
        function shareOnFacebook() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(getCurrentURL()), '_blank');
        }

        // Function to share on Twitter
        function shareOnTwitter() {
            window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(getCurrentURL()), '_blank');
        }

        // Function to share on LinkedIn
        function shareOnLinkedIn() {
            window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(getCurrentURL()), '_blank');
        }

        // Function to share on Reddit
        function shareOnReddit() {
            window.open('https://www.reddit.com/submit?url=' + encodeURIComponent(getCurrentURL()), '_blank');
        }