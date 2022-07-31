class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  baseRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.baseRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.baseRGB()}, ${a})`;
  }
}

const colors = [];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const r = this.elements.r.value;
  const g = this.elements.g.value;
  const b = this.elements.b.value;
  const a = this.elements.a.value;
  colors.push(new Color(r, g, b));
  document.querySelector("div").style.backgroundColor =
    colors[colors.length - 1].rgba(a);
});
