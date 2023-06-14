
let x =10;

{
    let x = 20;
    {
        let x = 30;
        {
            let x = 40;
            {
                {

                }
            }
            console.log('level - 5',x);
        }
        console.log('level - 3',x);
    }
    console.log('level - 2',x);
}

console.log('level - 1',x);