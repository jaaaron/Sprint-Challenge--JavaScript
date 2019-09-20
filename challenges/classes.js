// 1. Copy and paste your prototype in here and refactor into class syntax.
// Test your volume and surfaceArea methods by uncommenting the logs below:

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker{
    constructor (prop) {
      this.length = prop.length;
      this.width = prop.width;
      this.height = prop.height;
    }
    volume() {    
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  
  class Cubemaker extends CuboidMaker {
    constructor (prop) {
      super(prop)
    }
    cubeVolume() {
      return Math.pow(this.length, 3); 
    }
    cubeSurfaceArea() {
      return 6 * Math.pow(this.length, 2);
    }
  }
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });
  
  const cube = new Cubemaker({
    length: 5,
    width: 5,
    height: 5
  });