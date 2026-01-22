let sp = [];
const maxParticles = 300;

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.parent(document.body);
  clear();
}

function draw() {
  background(0, 0, 0, 40);

  for (let i = sp.length - 1; i >= 0; i--) {
    let p = sp[i];
    p.update();
    p.display();

    if (p.estaMuerta) {
      sp.splice(i, 1);
    }
  }
}

function spawn(x, y, n = 2) {
  for (let i = 0; i < n; i++) {
    if (sp.length < maxParticles) {
      sp.push(new Particula(x, y, random() < 0.5));
    }
  }
}

function mouseMoved() {
  spawn(mouseX, mouseY, 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
