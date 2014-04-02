module.exports = function (pts, opts) {
    if (!opts) opts = {};
    var tolerance = opts.tolerance;
    if (tolerance === undefined) {
        tolerance = 1e-10;
    }
    var equal = function (a, b) {
        return Math.abs(a - b) <= tolerance;
    };
    
    if (pts.length !== 3) return false;
    
    var dim = pts[0].length;
    var a = pts[0], b = pts[1], c = pts[2];
    
    for (var pivot = 0; pivot < dim; pivot ++) {
        if (equal(a[pivot], b[pivot])) continue;
        if (equal(a[pivot], c[pivot])) continue;
        break;
    }
    if (a[pivot] - b[pivot] === 0) return false;
    
    var mb = [];
    var abp = a[pivot] - b[pivot];
    for (var i = 0; i < dim; i++) {
        if (i === pivot) continue;
        mb.push((a[i] - b[i]) / abp);
    }
    
    var mc = [];
    var acp = a[pivot] - c[pivot];
    for (var i = 0; i < dim; i++) {
        if (i === pivot) continue;
        mc.push((a[i] - c[i]) / acp);
    }
    
    for (var i = 0; i < dim - 1; i++) {
        if (!equal(mb[i], mc[i])) return true;
    }
    return false;
};
