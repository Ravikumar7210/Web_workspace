let doubleAndReturnArgs = (arr, ...args) =>[
    ...arr,
    ...args.map((n) => n*2),
];

console.log(doubleAndReturnArgs([2,3,4,4], 6,7))

