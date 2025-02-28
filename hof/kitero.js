const fv1 = (a, b) => {

}

const fv2 = (a, b, cb) => {
    v1 = cb(a, 2);
    v2 = cb(b, 4);
    osszeg = cb(v1, v2);
    return osszeg;
}

const res1 = fv1(5, 7, (a, b) => {
    return a + b;
});

console.log(res1);

const res2 = fv2(5,7, fv1);
console.log(res2);

const fv3 = (operator) => {
    if (operator === "-"){
        return(a, b) => {
            return a - b;
        }
    }

    if (operator === "*2") {
        const multi = 2;
        return (a, b) => {
            return multi * (a + b);
        }
    }
}

const fv4 = fv3("-");
console.log(fv4(5, 7));

const res3 = fv2(5, 7, fv3("-"));
console.log(res3);

console.log(fv2(5, 7, fv3("*2")));