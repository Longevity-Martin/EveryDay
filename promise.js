const p1 = Promise.resolve("first");
const p2 = Promise.resolve("second");
const p3 = Promise.reject("third");
const p4 = Promise.resolve("forth");

const a = async () => {
    let b1 = await Promise.all(p1, p2);
    let b2 = await Promise.all(p3, p4);
    return [b1, b2];
}
a().then(res => console.log(res))
    .catch(err = console.log(err))