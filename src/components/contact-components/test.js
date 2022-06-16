

function TestScript(){
    var numbers = [1,5,11,20,0];

    var newMap = numbers.map(function (num)  {
        num += 1
        return num;
    });
    console.log(newMap);

    var filterNumber = numbers.filter(function (num){
        const lessThanTwenty = num < 20;
        return lessThanTwenty;
    })


    console.log(`Filter Number ${filterNumber}`);

    var newNumbers = [];

    numbers.forEach(function(num) {
        newNumbers.push(num);
        return num;
    });

    console.log(`New Numbers: ${newNumbers}`);

    var objectDictionary = [{
        name: "Ma-aruf",
        job: "Programmer"
    }];

    var mapObj = objectDictionary.map(function(obj)
    {
        console.log(obj.name);
    });


    // using arrow functions
    var arrowNumbers = [2, 20, 40, 0, -1]
    // with single parameter
    const newArrow = arrowNumbers.map( x => x +1 );
    // filtering
    const filteredArrow = newArrow.filter(x => x < 10);
    
    console.log(`newArrows: ${newArrow}`);
    console.log(`filtered: ${filteredArrow}`);


    let testFunction = (a, b) => {
        console.log(`a: ${a} b: ${b}`);
        return a+b;
    }

    let add = testFunction(1,2);
    

}

export default TestScript;