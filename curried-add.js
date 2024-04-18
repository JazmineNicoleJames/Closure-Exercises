function curriedAdd(total) {
    if(total !== undefined){
        return function newFunc(num) {
            if(num === undefined) return total;
            total+=num;
            return newFunc;
        }
    } else {
        return 0;
    }
}

module.exports = { curriedAdd };
