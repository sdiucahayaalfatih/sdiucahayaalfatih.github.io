function handleFileChange() {
  var fileInput = document.getElementById("studentimage");
  var selectedFile = fileInput.files[0];

  // Memeriksa apakah file yang dipilih adalah gambar
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if (!allowedExtensions.exec(selectedFile.name)) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent =
      "Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.";

    var deleteButton = document.getElementById("delete-button");
    deleteButton.style.display = "inline-block";
  } else {
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    var deleteButton = document.getElementById("delete-button");
    deleteButton.style.display = "none";
  }
}

function deleteFile() {
  var fileInput = document.getElementById("studentimage");
  fileInput.value = "";

  var deleteButton = document.getElementById("delete-button");
  deleteButton.style.display = "none";

  var errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";
}
