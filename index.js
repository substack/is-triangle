module.exports = function (pts) {
    if (pts.length !== 3) return false;
    
    var dim = pts[0].length;
    var a = pts[0], b = pts[1], c = pts[2];
    
    for (var pivot = 0; pivot < dim; pivot ++) {
        if (a[pivot] - b[pivot] === 0) continue;
        if (a[pivot] - c[pivot] === 0) continue;
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
        if (mb[i] === mc[i]) return false;
    }
    return true;
};
