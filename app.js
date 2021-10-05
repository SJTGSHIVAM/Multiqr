var QRCode = require("qrcode-svg");

const inp = document.querySelectorAll(".inp");
const outputDiv = document.querySelector(".output");
const QRSIZE = 128;
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
        width: QRSIZE,
        height: QRSIZE,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
      }).svg();
      qr2 = new QRCode({
        content: `${basestr}${i + 1}`,
        padding: 4,
        width: QRSIZE,
        height: QRSIZE,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
      }).svg();
      output += `<div class="content">
    <div class="inner-content"><div>${basestr}${i}</div><div>${qr1}</div></div>
    <div class="inner-content"><div>${basestr}${
        i + 1
      }</div><div>${qr2}</div></div>
    </div>`;
    }

    outputDiv.innerHTML = `${output}`;
  } else {
    outputDiv.innerHTML = `please make sure start number  and end number are valid and  start number is smaller than end number.`;
  }
});
