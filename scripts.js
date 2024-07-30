// Toggle theme and icons
        function toggleLinkMedia() {
            const cssLt = document.querySelector('link.css-lt');
            const cssDk = document.querySelector('link.css-dk');
            const accountIconDark = document.querySelector('.account-icon-dark');
            const accountIconLight = document.querySelector('.account-icon-light');
            const listIconDark = document.querySelector('.switcher-icon-dark');
            const listIconLight = document.querySelector('.switcher-icon-light');

            let isLightTheme = cssLt.media === 'all';

            // Toggle CSS media
            cssLt.media = isLightTheme ? 'not all' : 'all';
            cssDk.media = isLightTheme ? 'all' : 'not all';

            // Toggle Icons
            if (listIconDark && listIconLight) {
                listIconDark.classList.toggle('d-none', !isLightTheme);
                listIconLight.classList.toggle('d-none', isLightTheme);
            }
            if (accountIconDark && accountIconLight) {
                accountIconDark.classList.toggle('d-none', !isLightTheme);
                accountIconLight.classList.toggle('d-none', isLightTheme);
            }

            // Save the theme state to local storage
            localStorage.setItem('theme', isLightTheme ? 'dark' : 'light');
        }

        // Set initial theme state based on local storage or default preference
        function setInitialThemeState() {
            const cssLt = document.querySelector('link.css-lt');
            const cssDk = document.querySelector('link.css-dk');
            const accountIconDark = document.querySelector('.account-icon-dark');
            const accountIconLight = document.querySelector('.account-icon-light');
            const listIconDark = document.querySelector('.switcher-icon-dark');
            const listIconLight = document.querySelector('.switcher-icon-light');

            const savedTheme = localStorage.getItem('theme');
            const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)").matches;

            let isLightTheme = savedTheme ? savedTheme === 'light' : prefersLightScheme;

            // Set initial CSS media
            if (cssLt && cssDk) {
                cssLt.media = isLightTheme ? 'all' : 'not all';
                cssDk.media = isLightTheme ? 'not all' : 'all';
            }

            // Set initial icon visibility
            if (listIconDark && listIconLight) {
                listIconDark.classList.toggle('d-none', isLightTheme);
                listIconLight.classList.toggle('d-none', !isLightTheme);
            }
            if (accountIconDark && accountIconLight) {
                accountIconDark.classList.toggle('d-none', isLightTheme);
                accountIconLight.classList.toggle('d-none', !isLightTheme);
            }
        }
        // Initialize theme state on page load
        document.addEventListener('DOMContentLoaded', setInitialThemeState);
        window.autoResizeTextarea = (textArea) => {
            textArea.style.height = 'auto';
            textArea.style.height = textArea.scrollHeight + 'px';
        }
        window.scrollToLastMessage = () => {
            const chatBody = document.querySelector('.chat-body-inner');
            if (chatBody) {
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        };
