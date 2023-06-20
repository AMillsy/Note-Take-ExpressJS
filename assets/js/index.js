function init() {
  fetch("/api/notes").then((response) => {
    console.log("Hello", response);
  });
}

init();
