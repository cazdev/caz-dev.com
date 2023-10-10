const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("build") ? "build" : "dist";
    fs.copyFile('CNAME', `${folderName}/CNAME`, (err) => {
      if (err) throw err;
      console.log(`CNAME was copied to ${folderName}/CNAME`);
    });
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    console.log("Reverting local changes...");
    await execa("git", ["reset", "--hard", "HEAD~1"]);
    console.log("Successfully deployed.");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();