function declaratonexample() {
    var x = 1;
    var y = 2;
    var z = 3;
    {
        var x = 100;
        var y_1 = 200;
        var z_1 = 300;
        console.log('x in block scope i s: ', x);
        console.log('y in block scope i s: ', y_1);
        console.log('z in block scope i s: ', z_1);
    }
    console.log('x in outside block scope i s: ', x);
    console.log('y in outside block scope i s: ', y);
    console.log('z in outside block scope i s: ', z);
}
;
declaratonexample();
