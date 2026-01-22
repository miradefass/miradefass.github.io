class Particula {
  constructor(_x, _y, esMini = false) {
    this.pos = createVector(_x, _y);

    let ang = random(0, TWO_PI);
    let mag = esMini ? random(0.5, 2) : random(1.5, 4);
    this.vel = p5.Vector.fromAngle(ang).mult(mag);

    this.tVida = int(esMini ? random(40, 90) : random(80, 180));
    this.tVidaInicial = this.tVida;

    this.estaMuerta = false;
    this.diam = esMini ? random(3, 6) : random(6, 14);

    this.velAngular = random(-0.03, 0.03);

    this.c = color(255, 255, 255, 220);
    this.esMini = esMini;
  }

  reset(_x, _y, esMini = false) {
    this.pos.set(_x, _y);
    this.esMini = esMini;
    let ang = random(0, TWO_PI);
    let mag = esMini ? random(0.5, 2) : random(1.5, 4);
    this.vel = p5.Vector.fromAngle(ang).mult(mag);
    this.tVida = int(esMini ? random(40, 90) : random(80, 180));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;
    this.diam = esMini ? random(3, 6) : random(6, 14);
    this.velAngular = random(-0.03, 0.03);
  }

  update() {
    if (this.estaMuerta) return;
    this.vel.rotate(this.velAngular);
    this.vel.mult(0.99);
    this.pos.add(this.vel);

    this.tVida--;
    if (this.tVida <= 0) this.estaMuerta = true;
  }

  display() {
    noStroke();
    fill(this.c);

    let d = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
    d = max(d, 0.1);

    dibujaEstrella(this.pos.x, this.pos.y, d * 0.5, d, 5);
  }
}

function dibujaEstrella(x, y, r1, r2, n) {
  let ang = TWO_PI / n;
  let half = ang / 2;

  beginShape();
  for (let a = 0; a < TWO_PI; a += ang) {
    vertex(x + cos(a) * r2, y + sin(a) * r2);
    vertex(x + cos(a + half) * r1, y + sin(a + half) * r1);
  }
  endShape(CLOSE);
}
