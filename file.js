// enum Name {
//     Feb=1,
//     March,
//     jan,
//     jun,
//     jul,
//     aug
// };
// console.log(Name)
// function us ....
// export {}
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
