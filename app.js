var QRCode = require("qrcode-svg");

const inp = document.querySelectorAll(".inp");
const outputDiv = document.querySelector(".output");

inp[3].addEventListener("click", () => {
  //   basestr = inp[1].value + inp[2].value;
  let basestr = inp[0].value;
  let startNo = Number(inp[1].value);
  let endNo = Number(inp[2].value);
  let output = "";
  let qr1, qr2;
  for (let i = startNo; i <= endNo; i = i + 2) {
    qr1 = new QRCode({
      content: `${basestr}${i}`,
      padding: 4,
      width: 256,
      height: 256,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
    }).svg();
    qr2 = new QRCode({
      content: `${basestr}${i + 1}`,
      padding: 4,
      width: 256,
      height: 256,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
    }).svg();
    output += `<div>
    <span><span>${basestr}${i}<span><span>${qr1}</span></span>
    <span><span>${basestr}${i + 1}<span><span>${qr2}</span></span>
    </div>`;
  }

  outputDiv.innerHTML = `${output}`;
});
