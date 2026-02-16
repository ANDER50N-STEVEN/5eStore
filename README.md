# Shop Generator - GitHub Pages Deployment Guide

## Files Included
- `index.html` - Main HTML structure
- `styles.css` - All styling
- `script.js` - All JavaScript functionality

## How to Deploy to GitHub Pages

### Method 1: Web Upload (Easiest)

1. **Create a new repository on GitHub**
   - Go to https://github.com and sign in
   - Click the "+" icon → "New repository"
   - Name it something like `shop-generator`
   - Make it **Public**
   - Click "Create repository"

2. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all three files: `index.html`, `styles.css`, and `script.js`
   - Commit with message: "Initial commit"

3. **Enable GitHub Pages**
   - Go to Settings → Pages (in left sidebar)
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`, folder: `/root`
   - Click "Save"

4. **Access your site**
   - Wait 1-2 minutes
   - Your site will be live at: `https://YOUR-USERNAME.github.io/shop-generator/`

### Method 2: Git Command Line

```bash
# Navigate to where you saved the files
cd /path/to/your/files

# Initialize git repository
git init

# Add all files
git add index.html styles.css script.js README.md

# Commit
git commit -m "Initial commit: Shop Generator"

# Connect to GitHub (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/shop-generator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in Settings → Pages as described above.

## Project Structure

```
shop-generator/
├── index.html       # Main page
├── styles.css       # All CSS styling
├── script.js        # All JavaScript logic
└── README.md        # This file
```

## Benefits of Separated Files

- **Easier maintenance**: Edit CSS and JS independently
- **Better caching**: Browsers cache CSS/JS separately
- **Cleaner code**: Each file has a single responsibility
- **Version control**: See changes to each file type clearly
- **Best practices**: Industry-standard project structure

## Testing Locally

Before deploying, you can test locally by opening `index.html` in your browser. All files must be in the same directory for it to work properly.

## Notes

- All three files must be in the same directory
- The file names are case-sensitive
- GitHub Pages may take a few minutes to deploy initially
