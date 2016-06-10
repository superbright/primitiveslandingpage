var coordinates = AFRAME.utils.coordinates;

AFRAME.registerComponent('head', {
  // Allow line component to accept vertices and color.
  schema: {
    rotation: {
      default: [
        { x: 0, y: 0, z: 0 },
      ],

      // Deserialize path in the form of comma-separated vec3s: `0 0 0, 1 1 1, 2 0 3`.
      parse: function (value) {
        return value.split(',').map(coordinates.parse);
      },

      // Serialize array of vec3s in case someone does
      // setAttribute('line', 'path', [...]).
      stringify: function (data) {
        return data.map(coordinates.stringify).join(',');
      }
    }
  },

  // Create or update the line geometry.
  update: {},

  // Remove the line geometry.
  remove: {}
});
