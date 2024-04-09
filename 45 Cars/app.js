var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carDetails(manufactures, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufactures: manufactures, modelName: modelName }, Object.fromEntries(additionalInfo));
    return car;
}
var myCarDetails = carDetails("Hundai", "Sonata", ["color", "black"], ["year", "2024"]);
console.log(myCarDetails);
