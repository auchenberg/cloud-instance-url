let getCloudUrl = () => {
  let env = process.ENV;

  // Azure Functions

  // Azure App Service on Linux

  // Azure Containers

  // Azure AKS

  // Azure App Service on Windows, https://whatazurewebsiteenvironmentvariablesareavailable.azurewebsites.net/
  if (env.WEBSITE_HOSTNAME) {
    return env.WEBSITE_HOSTNAME;
  } else if (env.URL) {
    // Netlify build and function variables, https://docs.netlify.com/configure-builds/environment-variables/
    return env.URL;
  }

  // AWS Lambda

  // GCP Cloud run?

  // GCP Functions

  // Heroku?

  return null;
};
module.exports = getCloudUrl;
