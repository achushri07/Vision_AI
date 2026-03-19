# AI Image Classifier - Retro Edition

A retro-styled web application for real-time image classification using deep learning. Built with TensorFlow/Keras and deployed via Flask, featuring a nostalgic cartoon-comic aesthetic inspired by classic arcade gamesshowcasing the power of Convolutional Neural Networking.

---

## Overview

This project implements a Convolutional Neural Network (CNN) trained on the CIFAR-10 dataset to classify images into 10 distinct categories. The model is wrapped in a Flask web application with an engaging retro UI that provides real-time predictions with confidence scores and class probability distributions.

---

## Screenshots
<img width="1348" height="630" alt="image" src="https://github.com/user-attachments/assets/e035a074-c677-4c7b-8efb-32e276767811" />



<img width="1351" height="635" alt="image" src="https://github.com/user-attachments/assets/0336d550-bcd7-4a6d-9c02-0ef199514f2a" />

---

## Architecture

### Model Architecture

```
Input Layer (32x32x3)
    ↓
Conv2D (32 filters, 3x3) + ReLU
    ↓
MaxPooling2D (2x2)
    ↓
Conv2D (64 filters, 3x3) + ReLU
    ↓
MaxPooling2D (2x2)
    ↓
Conv2D (64 filters, 3x3) + ReLU
    ↓
Flatten
    ↓
Dense (64 units) + ReLU
    ↓
Dense (10 units) + Softmax
    ↓
Output (10 classes)
```

---

## Files Included

- `README.md` – This file
- `cnn.ipynb` – Python Notebook for model training
- `app.py` – Python File for flask
- `templates/index.html` – HTML file
- `static/style.css` – CSS file
- `static/script.js` - JS file

---

## Technologies Used

### Backend
- **Python**: Core programming language
- **TensorFlow/Keras**: Deep learning framework
- **Flask**: Lightweight WSGI web framework
- **NumPy**: Numerical computing library
- **Pillow**: Image processing library

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Async/await, Fetch API, DOM manipulation
- **Google Fonts**: Fredoka One, Baloo 2

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

### Contribution Guidelines

- Follow PEP 8 style guide for Python code
- Write descriptive commit messages
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before submitting PR

---

## Acknowledgments

- CIFAR-10 dataset by Alex Krizhevsky, Vinod Nair, and Geoffrey Hinton
- TensorFlow and Keras teams for the deep learning framework
- Flask community for the web framework
- Google Fonts for typography resources

---

**Made with ❤️ and Python** | **Powered by TensorFlow** | **Styled with Retro Vibes** 
