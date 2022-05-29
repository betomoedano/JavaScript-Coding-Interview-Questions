function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let e = 0;
    let w = 0;
    
    if(walk.length < 2 || !walk.length) return false;
    for(const direction of walk) {
        if(direction === 'n') n++;
        if(direction === 's') s++;
        if(direction === 'e') e++;
        if(direction === 'w') w++;
    }
    
    if(n + s + e + w > 10) return false;
    return ((n + s + e + w < 10) ? false :  n - s === 0 && e - w === 0);
}
    
    const walk =['n','n','n','s','n','s','n','s','n','s']
console.log(isValidWalk(walk));