const campaignModal = document.getElementById('campaign-modal');
const openModalBtn = document.getElementById('open-campaign-modal-btn');
const closeModalBtn = document.getElementById('close-campaign-modal-btn');

openModalBtn.addEventListener('click', () => {
    campaignModal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    campaignModal.classList.remove('active');
});