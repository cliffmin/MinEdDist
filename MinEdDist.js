Array.prototype.max = function () {
        return Math.max.apply(null, this);
};

Array.prototype.min = function () {
        return Math.min.apply(null, this);
};

var minimumEditDistance = function (a, b) {
        //to get to null string, it's the cost of deletion
        if (a.length == 0) return b.length;
            if (b.length == 0) return a.length;

                var costMatrix = [];

                    // init first row
                    for (var i = 0; i <= b.length; i++) {
                                costMatrix[i] = [i];
                                    }

                        // increment each column in the first row
                        for (var j = 0; j <= a.length; j++) {
                                    costMatrix[0][j] = j;
                                        }

                            // Fill in the rest of the matrix
                            for (i = 1; i <= b.length; i++) {
                                        for (j = 1; j <= a.length; j++) {
                                                        if (b.charAt(i - 1) == a.charAt(j - 1)) {
                                                                            costMatrix[i][j] = costMatrix[i - 1][j - 1];

                                                                                        } else {
                                                                                                            var minArray = new Array();
                                                                                                                            minArray.push(costMatrix[i - 1][j - 1] + 1); //sub
                                                                                                                                            minArray.push(costMatrix[i][j - 1] + 1); //insert
                                                                                                                                                            minArray.push(costMatrix[i - 1][j] + 1); //delete
                                                                                                                                                                            costMatrix[i][j] = minArray.min();
                                                                                                                                                                                        }
                                                                }
                                            }

                                return costMatrix[b.length][a.length];
};

//alert(minimumEditDistance("sitting", "kitten"));
alert(minimumEditDistance("robot zig turtle ninja wonton tres blueberry special", "several small species of furry animals gathered together in a cave and grooving with a pict"));
