document.addEventListener('DOMContentLoaded', () => {
    const showEmailBtn = document.getElementById('show-email-btn');
    const emailContainer = document.getElementById('email');

    if (showEmailBtn && emailContainer) {
        showEmailBtn.addEventListener('click', () => {
            const chars = ['p','r','o','.','m','o','r','v','a','n','.','s','t','e','v','e','n','@','g','m','a','i','l','.','c','o','m'];
            const email = chars.join('');
            emailContainer.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
            emailContainer.style.display = 'block';
            showEmailBtn.style.display = 'none';
        });
    }
});
