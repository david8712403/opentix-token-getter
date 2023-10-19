chrome.storage.local.get(["opentixRefreshToken"], (result) => {
    const responseContent = result.opentixRefreshToken || "N/A";
    document.getElementById("opentixRefreshToken").textContent = responseContent;
});

document.getElementById("copyButton").addEventListener("click", function () {
    var text = document.getElementById("opentixRefreshToken").textContent;
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    document.getElementById("copyButton").textContent = "copied!";
});