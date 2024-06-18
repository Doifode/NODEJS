type User = {
    name: string;
    age: number;
};

function isAdult(user: User): boolean {
    console.log(user.age >= 18)
    return user.age >= 18;
}

const justine: User = {
    name: 'Justine',
    age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);
