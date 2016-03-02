Package.describe({
  name: "test:package",
  summary: "Testpackage to test big files in package folder",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom("1.3-beta.12");
  api.use(["ecmascript"], "client");
});
