function christmasTrees(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(i * 2 - 1);
    result += spaces + stars + "\n";
  }
  return result;
}

function generateTree() {
  const n = parseInt(document.getElementById("layers").value);
  const output = document.getElementById("output");
  if (isNaN(n) || n <= 0) {
    output.textContent = "Please enter a valid positive number!";
    return;
  }
  output.textContent = christmasTrees(n);
}
