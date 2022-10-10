var autumn;
var ctx;

function draw() {
  document.getElementById("introScreen").style.display = "none";
  document.getElementById("drawScreen").style.display = "initial";

  autumn = document.getElementById("autumn");
  ctx = autumn.getContext("2d");
  var ground = "#a36a14";
  var sky = "#c7eaff";
  var path = "#999999";
  var door = "#7d0000";
  var tree = "#3b2300";
  var frontHouse = "#bd8555";
  var sideHouse = "#ab784d";
  var sideHouseLines = "#8a5e3b";
  var frontRoof = "#ab784d";
  var sideRoof = "#4d1515";
  var roofShingles = "#2e0505";
  var windowBorder = "#dbdbdb";
  var windowGlass = "#cf5c1f";
  var doorknob = "#85792e";
  var leaves = ctx.createLinearGradient(0, 0, 640, 0);
  leaves.addColorStop(0, "#a10000");
  leaves.addColorStop(0.2, "#bd4200");
  leaves.addColorStop(0.3, "#ba8900");
  leaves.addColorStop(0.4, "#bd4200");
  leaves.addColorStop(0.6, "#ba8900");
  leaves.addColorStop(0.7, "#bd4200");
  leaves.addColorStop(0.8, "#a10000");

  ctx.fillStyle = ground;
  ctx.fillRect(0, 500, 1475, 800);

  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, 1475, 500);

  ctx.fillStyle = frontHouse;
  ctx.fillRect(492, 325, 492, 375);

  ctx.fillStyle = door;
  ctx.beginPath();
  ctx.fillRect(645.75, 450, 184.5, 250);

  ctx.fillStyle = doorknob;
  ctx.beginPath();
  ctx.arc(676, 590, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = path;
  ctx.beginPath();
  ctx.moveTo(645.75, 700);
  ctx.quadraticCurveTo(630, 750, 389, 800);
  ctx.lineTo(730, 800);
  ctx.quadraticCurveTo(814.25, 750, 830.25, 700);
  ctx.fill();

  ctx.fillStyle = frontRoof;
  ctx.beginPath();
  ctx.moveTo(492, 325);
  ctx.lineTo(984, 325);
  ctx.lineTo(738, 50);
  ctx.fill();

  ctx.fillStyle = windowBorder;
  ctx.beginPath();
  ctx.arc(738, 210, 55, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = windowGlass;
  ctx.beginPath();
  ctx.arc(738, 210, 45, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = windowBorder;
  ctx.fillRect(735, 165, 6, 90);
  ctx.fillRect(693, 207, 90, 6);

  ctx.fillStyle = sideHouse;
  ctx.beginPath();
  ctx.moveTo(984, 700);
  ctx.lineTo(1475, 650);
  ctx.lineTo(1475, 275);
  ctx.lineTo(984, 325);
  ctx.fill();

  ctx.strokeStyle = sideHouseLines;
  ctx.lineWidth = 5;
  for (i = 387.5; i < 700; i += 62.5) {
    ctx.beginPath();
    ctx.moveTo(984, i);
    ctx.lineTo(1475, i - 50);
    ctx.stroke();
  }

  ctx.fillStyle = sideRoof;
  ctx.beginPath();
  ctx.moveTo(1475, 275);
  ctx.lineTo(984, 325);
  ctx.lineTo(738, 50);
  ctx.lineTo(1229, 0);
  ctx.fill();

  ctx.strokeStyle = roofShingles;
  ctx.lineWidth = 3;
  var x = 738;
  var y = 50;
  var x2 = 738;
  var y2 = 50;
  for (i = 0; i < 5; i++) {
    x = x2;
    y = y2;
    for (j = 0; j < 8; j++) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 49.2, y + 55);
      ctx.fill();
      ctx.stroke();

      if (j != 7) {
        if (j == 6 && i != 4) {
          ctx.beginPath();
          ctx.arc(x + 81, y, 62.8, 0.9, 2.1);
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(x + 81, y, 62.8, 0.85, 2.1);
          ctx.fill();
          ctx.stroke();
        }
      }
      x += (1475 - 984) / 7;
      y -= (325 - 275) / 7;
    }
    x2 += 49.2;
    y2 += 55;
  }
  ctx.beginPath();
  ctx.moveTo(738, 50);
  ctx.lineTo(492, 325);
  ctx.lineTo(484, 325);
  ctx.lineTo(730, 50);
  ctx.fill();

  ctx.fillStyle = tree;
  ctx.beginPath();
  ctx.moveTo(103, 700);
  ctx.quadraticCurveTo(164, 700, 194, 50);
  ctx.lineTo(298, 50);
  ctx.quadraticCurveTo(328, 700, 389, 700);
  ctx.fill();

  ctx.fillStyle = leaves;
  ctx.beginPath();
  ctx.arc(368, -25, 100, 1, 2.35);
  ctx.arc(475, -25, 100, 0, 2.14);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(150, -10, 75, 0.95, 2);
  ctx.arc(62, -25, 100, 0.97, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(194, 50);
  ctx.lineTo(298, 50);
  ctx.lineTo(500, 0);
  ctx.fill();

  ctx.fillStyle = tree;
  ctx.beginPath();
  ctx.moveTo(298, 50);
  ctx.quadraticCurveTo(300, 30, 350, 0);
  ctx.lineTo(266, 0);
  ctx.lineTo(256, 10);
  ctx.lineTo(256, 0);
  ctx.lineTo(220, 0);
  ctx.lineTo(220, 5);
  ctx.lineTo(200, 0);
  ctx.lineTo(80, 0);
  ctx.quadraticCurveTo(190, 20, 194, 50);
  ctx.fill();

  ctx.fillStyle = leaves;
  ctx.beginPath();
  ctx.moveTo(400, 200);
  ctx.quadraticCurveTo(380, 215, 405, 250);
  ctx.quadraticCurveTo(420, 215, 400, 200);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.quadraticCurveTo(160, 140, 170, 100);
  ctx.quadraticCurveTo(200, 130, 180, 150);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(50, 600);
  ctx.quadraticCurveTo(60, 580, 100, 590);
  ctx.quadraticCurveTo(60, 620, 50, 600);
  ctx.fill();
}
