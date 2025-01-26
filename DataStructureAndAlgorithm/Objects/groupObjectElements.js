// group object elements by property

function groupBy(arr, property) {
    return arr.reduce((groups, obj) => {
        const group = obj[property];
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(obj);
        return groups;
    }, {});
}

let people = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Alice', age: 30, city: 'London' },
    { name: 'Bob', age: 25, city: 'New York' },
    { name: 'Charlie', age: 30, city: 'Paris' },
    { name: 'David', age: 25, city: 'New York' }
];

console.log(groupBy(people, 'city'));

console.log(groupBy(people, 'age'));