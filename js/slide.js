class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    // this.onStart = this.onStart.bind(this);
  }

  onStart = (event) => {
    event.preventDefault();
    this.slide.addEventListener('mousemove', this.onMove);
    this.onMove();
  };

  onMove = (event) => {
    this.slide.style.transform = `translate3d(0, 0, 0)`;
  };

  onEnd = (event) => {
    this.slide.removeEventListener('mousemove', this.onMove);
  };

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  init() {
    this.addSlideEvents();
    return this;
  }
}
export default Slide;
