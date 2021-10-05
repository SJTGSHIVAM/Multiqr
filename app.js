var QRCode = require("qrcode-svg");

const inp = document.querySelectorAll(".inp");
const outputDiv = document.querySelector(".output");
inp[4].addEventListener("click", () => {
  window.print();
});
inp[3].addEventListener("click", () => {
  //   basestr = inp[1].value + inp[2].value;
  let basestr = inp[0].value;
  let startNo = Number(inp[1].value);
  let endNo = Number(inp[2].value);
  let output = "";
  if (startNo <= endNo && !isNaN(startNo) && !isNaN(endNo)) {
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
      output += `<div class="content">
    <div><span>${basestr}${i}<span><span>${qr1}</span></div>
    <div><span>${basestr}${i + 1}<span><span>${qr2}</span></div>
    </div>`;
    }

    outputDiv.innerHTML = `${output}`;
  } else {
    outputDiv.innerHTML = `please make sure start number  and end number are valid and  start number is smaller than end number.`;
  }
});
