function fusion(obj, obj2) {
    const result = {};
    const allKeys = [...Object.keys(obj), ...Object.keys(obj2)]
    for (const key of allKeys) {
        let val1 = obj[key];
        let val2 = obj2[key];
        if (val2 !== undefined) {
            if (typeof val1 === 'number' && typeof val2 === 'number') {
                result[key] = val1 + val2;
            }
            else if (Array.isArray(val1) && Array.isArray(val2)) {
                result[key] = [...val1, ...val2];
            }
            else if (typeof val1 === 'string' && typeof val2 === 'string') {
                result[key] = `${val1} ${val2}`;
            }
            else if (typeof val1 === 'object' && typeof val2 === 'object' && val1 && val2) {

                result[key] = fusion(val1, val2);
            }
            else {
                result[key] = val2;
            }
        } else {
            result[key] = val1;
        }
    }
    return result
}