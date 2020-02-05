# cloud-instance-url

Library to get the current url for the deployed instance in the cloud.

```
let getUrl = require('cloud-instance-url');
let publicUrl = getUrl();
console.log('publicUrl', publicUrl);
```

## Supported cloud environments

- [] Azure Functions
- [ ] Azure App Service on Linux
- [ ] Azure Containers
- [ ] Azure AKS
- [x] Azure App Service on Windows, https://whatazurewebsiteenvironmentvariablesareavailable.azurewebsites.net/
- [x] Netlify build and function,s https://docs.netlify.com/configure-builds/environment-variables/
- [ ] AWS Lambda
- [ ] GCP Cloud run?
- [ ] GCP Functions
- [ ] Heroku?
