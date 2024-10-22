function replica(...objs) {
  const result = {};
  for (let obj of objs) {
      if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
          for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                  let value = obj[key];
                  if (Array.isArray(value)) {
                      result[key] = [...value];
                  } else if (typeof value === 'object' && value !== null && !(value instanceof RegExp)) {
                    result[key] = replica(result[key] || {}, value);
                  } else {
                      result[key] = value;
                  }
              }
          }
      }
  }
  return result;
}
 