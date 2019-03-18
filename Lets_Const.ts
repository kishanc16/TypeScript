function declaratonexample(){
    var x =1;
    let y=2;
    const z = 3;
    {
        var x =100;
        let y=200;
        const z=300;

        console.log('x in block scope i s: ',x)
        console.log('y in block scope i s: ',y)
        console.log('z in block scope i s: ',z)
    }
    console.log('x in outside block scope i s: ',x)
    console.log('y in outside block scope i s: ',y)
    console.log('z in outside block scope i s: ',z)

};
declaratonexample()