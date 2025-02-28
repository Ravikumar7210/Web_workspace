let obj ={
    name:'ravi',
    age: 25,
    country:'India',
};

let obj1 ={
    Sex:'Male',
    state: 'Delhi',
    Lanuage:'hindi',
};

let mergeObjects = (obj,obj1) => ({...obj,...obj1});
console.log(mergeObjects(obj,obj1));