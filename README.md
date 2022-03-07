# Introduction

This application was created in order to make accessing recipes easy.  Ideally, it will run on a device in the kitchen that the user can use to access recpies very quickly.  Recpies are stored in PDF format in /public/pdfs directory.

# Installation 

1.  Run `npm install` to install all modules.
2.  Run application using `node app.js` or `nodemon app.js`.

Access application on [localhost:3000](http://localhost:3000)

# Use

Currently, the upload feature accepts all file types.  Eventually, only PDF format will be accepted.  When uploading, file will be uploaded to the `/public/pdfs` directory. 

# Coming Soon

- Integrate search capability to filter through list of recipes.
- When uploading, user can upload any file type.  Will change to only allow PDF.
- Clean up upload success/fail dialog.
- Decide wether to continue using boostrap for styling or bake one from scratch.
- File deletion