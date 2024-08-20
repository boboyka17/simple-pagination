function pagination(current, total) {
    var data = [];
    function create_array(set, index, isActive = true) {
        data[index] = {
            label: set,
            currentNumber: current == set,
            active: isActive
        }
    }

    // Create Simple
    function createSimplePagination() {
        for (let i = 0; i < total; i++) {
            let number = i + 1;
            create_array(number, i)
        }
    }
    // Create Pagination from left
    function createLeftPagination() {
        for (let i = 0; i < 7; i++) {
            let number = Number(i + 1);
            if (number == 6) {
                create_array("...", i, false)
            } else if (number == 7) {
                create_array(total, i)
            } else {
                create_array(number, i)
            }
        }
    }
    // Create Pagination from Right
    function createRightPagination() {
        for (let i = 0; i < 7; i++) {
            let number = Number(i + 1);
            if (number == 1) {
                create_array(number, i)
            } else if (number == 2) {
                create_array("...", i, false)
            } else {
                create_array(total + Number(number - 7), i)
            }
        }
    }
    // Create Full Pagination 
    function createFullPagination() {
        for (let i = 0; i < 7; i++) {
            let number = Number(i + 1);
            if (number == 1) {
                create_array(number, i)
            } else if (number == 2 || number == 6) {
                create_array("...", i, false)
            } else if (number >= 3 && number <= 5) {
                create_array((Number(current) + (Number(number) - Number(4))), i)
            } else {
                create_array(total, i)
            }
        }
    }

    // Condition for check total number
    if (total <= 7) {
        createSimplePagination();
    } else if (current < 5) {
        createLeftPagination();
    } else if (current > total - 4) {
        createRightPagination();
    } else {
        createFullPagination();
    }

    return data;
}

export default pagination;
