const inp = document.querySelectorAll(".inp");
inp[3].addEventListener("click", () => {
  inp[0].value = inp[1].value + inp[2].value;
});
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
