const crypto = require('crypto');

// callback structure should of form callback({err, ...args})
module.exports = function(string, callback) {
  // console.log('string, callback: ', string, callback);
  
  let withCallback = typeof callback === 'function';

  try {
    
    let hash = crypto.createHash('md5')
      .update(string)
      .digest('hex');
    
    withCallback && callback(null, hash);
  } catch (error) {
    // console.log('error: ', error);

    if(withCallback) callback(error);
    else throw errow;
  }
}