exports.min = function min(array) {
    if (array == undefined || !array.length) {
        return 0
    } else {
        let sortedArray = array.sort((a, b) => {
            return a - b;
        })

        return sortedArray[0];
    }
}

exports.max = function max(array) {
    if (array == undefined || !array.length) {
        return 0
    } else {
        let sortedArray = array.sort((a, b) => {
            return a - b;
        }).reverse();

        return sortedArray[0];
    }

}

exports.avg = function avg(array) {
    if (array == undefined || !array.length) {
        return 0
    } else {
        let summ = null;
        array.forEach((it) => {
            summ += it;
        })

        return summ / array.length;
    }
}
