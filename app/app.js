var applicationModule = require("application");

if(applicationModule.ios) {
  GMSServices.provideAPIKey("AIzaSyDiuRwKIU044ppK_GHVCZxcDHpw3aVpYh4");
}



applicationModule.start({ moduleName: "main-page" });
