# This is a picture sharing application built using Next.js V 14

To run the app please ensure you have node version of at least v18. 17.0

# Working with the API
The app reaches out to a local API which can be found in the api.zip file. Instructions on how to run the API can be found within the API README.
It is important not to change the Port or anything else inside the API - this is due to the way Next.JS needs to be configured to load images.

If you do update the API, please ensure you also update the `next.config.mjs` accordingly, otherwise you may encounter an error with image loading.

# Install

Get started by running

```sh
npm i
```

to install all dependencies. Once that has been completed successfully you can run 

```sh
npm run build
```
This should generate a production ready application. 

You can then run the application with 

```sh
npm run start
```

Visit your localhost on the port mentioned in your terminal which should look something like:

▲ Next.js 14.2.3
  - Local:        http://localhost:XXXX

If your API is running correctly you should see the posts from the API.