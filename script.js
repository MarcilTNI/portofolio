// Fungsi helper untuk hide semua section dan remove active dari semua button
function resetAll() {
    // Hide semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Remove active dari semua button
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
}

// Fungsi untuk setiap section
function showStory() {
    resetAll();
    document.getElementById('story-section').style.display = 'block';
    document.querySelectorAll('.mode-btn')[0].classList.add('active');
}

function showLearning() {
    resetAll();
    document.getElementById('learning-section').style.display = 'block';
    document.querySelectorAll('.mode-btn')[1].classList.add('active');
}

function showSkill() {
    resetAll();
    document.getElementById('skill-section').style.display = 'block';
    document.querySelectorAll('.mode-btn')[2].classList.add('active');
}

function showOutside() {
    resetAll();
    document.getElementById('outside-section').style.display = 'block';
    document.querySelectorAll('.mode-btn')[3].classList.add('active');
}

function showFilosofi() {
    resetAll();
    document.getElementById('filosofi-section').style.display = 'block';
    document.querySelectorAll('.mode-btn')[4].classList.add('active');
}