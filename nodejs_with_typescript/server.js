function isAdult(user) {
    console.log(user.age >= 18);
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 23,
};
var isJustineAnAdult = isAdult(justine);
isAdult(justine);
