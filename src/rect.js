/**
 *  Just a basic rectangle
 *  it has a starting position (x, y)
 *  as well as a width and a height
 */
export default class Rect {

/**
 *@param {Number} x - top left x coordinate.
 *@param {Number} y - top left y coordinate.
 *@param {Number} width
 *@param {Number} height
 */
  constructor(x = 0, y = 0, width = 0, height = 0){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * performs a callback on every point in the rectangle
   * the callback is passed the row, column, and parent rect
   * @param {Function} action - the callback
   */
  forEach(action){
    for (let col = this.x; col < this.width; col++){
      for (let row = this.y; row < this.height; row++){
        action(col, row, this);
      }
    }
  }

  /**
   * determines if a given point is within its bounds
   * @param {Point} point - an object with x, y coords
   * @returns {Boolean} - true if in bounds, otherwise false
   */
  inBounds(point){
    if (point.x > this.x && point.x < this.width){
      if (point.y > this.y && point.y < this.height){
        return true;
      }
    }
    return false;
  }

  /**
   * return a new rectangle created from points
   */
  static fromPoints(startPoint, endPoint){
    return new Rect(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
  }
}


