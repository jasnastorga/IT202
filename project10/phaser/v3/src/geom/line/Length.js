/**
 * [description]
 *
 * @function Phaser.Geom.Line.Length
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - [description]
 *
 * @return {number} [description]
 */
var Length = function (line)
{
    return Math.sqrt((line.x2 - line.x1) * (line.x2 - line.x1) + (line.y2 - line.y1) * (line.y2 - line.y1));
};

module.exports = Length;
