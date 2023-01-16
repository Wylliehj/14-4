const filterOutOdds = (...arguments) => arguments.filter(nums => nums % 2 === 0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(nums => nums * 2)]

const removeRandom = items => {
    let rand = Math.floor(Math.random() * items.length);
    console.log(rand);
    return [...items.slice(0, rand), ...items.slice(rand + 1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2]

const addKeyVal = (obj, key, val) => ({...obj, [key] : val})

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}