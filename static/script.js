const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const previewSection = document.getElementById('previewSection');
const imagePreview = document.getElementById('imagePreview');
const removeBtn = document.getElementById('removeBtn');
const predictBtn = document.getElementById('predictBtn');
const resultsSection = document.getElementById('resultsSection');
const predictionClass = document.getElementById('predictionClass');
const confidenceBadge = document.getElementById('confidenceBadge');
const probabilityBars = document.getElementById('probabilityBars');

let selectedFile = null;

// Click to upload
uploadBox.addEventListener('click', () => {
    fileInput.click();
});

// File selection
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
});

// Drag and drop
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleFile(file);
    }
});

// Handle file
function handleFile(file) {
    selectedFile = file;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
        uploadBox.style.display = 'none';
        previewSection.style.display = 'block';
        predictBtn.disabled = false;
        resultsSection.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// Remove image
removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    selectedFile = null;
    fileInput.value = '';
    previewSection.style.display = 'none';
    uploadBox.style.display = 'block';
    predictBtn.disabled = true;
    resultsSection.style.display = 'none';
});

// Predict
predictBtn.addEventListener('click', async () => {
    if (!selectedFile) return;
    
    // Show loading state
    const btnText = predictBtn.querySelector('.btn-text');
    const btnLoader = predictBtn.querySelector('.btn-loader');
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    predictBtn.disabled = true;
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    
    try {
        const response = await fetch('/predict', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.error) {
            alert(data.error);
        } else {
            displayResults(data);
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
        console.error(error);
    } finally {
        // Reset button
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        predictBtn.disabled = false;
    }
});

// Display results
function displayResults(data) {
    resultsSection.style.display = 'block';
    resultsSection.classList.add('fade-in');
    
    // Main prediction
    predictionClass.textContent = data.class;
    confidenceBadge.textContent = data.confidence.toFixed(1);
    
    // Update confidence meter
    const meterFill = document.getElementById('confidenceMeter');
    if (meterFill) {
        meterFill.style.width = data.confidence + '%';
    }
    
    // Sort probabilities
    const sortedProbs = Object.entries(data.probabilities)
        .sort((a, b) => b[1] - a[1]);
    
    // Create probability bars
    probabilityBars.innerHTML = '';
    sortedProbs.forEach(([className, probability]) => {
        const item = document.createElement('div');
        item.className = 'probability-item';
        
        item.innerHTML = `
            <div class="probability-label">
                <span>${className.charAt(0).toUpperCase() + className.slice(1)}</span>
                <span>${probability.toFixed(1)}</span>
            </div>
            <div class="probability-bar-bg">
                <div class="probability-bar-fill" style="width: ${probability}%"></div>
            </div>
        `;
        
        probabilityBars.appendChild(item);
    });
    
    // Smooth scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}