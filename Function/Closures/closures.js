let x = 10;

function outer() {

    let y = 10;

    function inner() {
        console.log(x + y);
    }

    inner();
}

outer();