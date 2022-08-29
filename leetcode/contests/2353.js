function comparator(tupleA, tupleB) {
    const [ratingA, foodA] = tupleA
    const [ratingB, foodB] = tupleB

    if (ratingA < ratingB) {
        return -1
    } else if (ratingA > ratingB) {
        return 1
    } else {
        return foodB.localeCompare(foodA)
    }
    
}

var FoodRatings = function(foods, cuisines, ratings) {
    this.sortedCuisines = {}
    this.foodToCuisine = {}

    // initial set up
    for (let i = 0; i < foods.length; i++) {
        let f = foods[i]
        let c = cuisines[i]
        let r = ratings[i]
        
        this.foodToCuisine[f] = c
        
        if (!(c in this.sortedCuisines)) {
            this.sortedCuisines[c] = []
        }
        
        this.sortedCuisines[c].push([r, f])
    }
    
    // sort cuisine foods by rating
    for (let cuisine in this.sortedCuisines) {
        this.sortedCuisines[cuisine].sort(comparator)
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const cuisine = this.foodToCuisine[food]
    
    for (let i = 0; i < this.sortedCuisines[cuisine].length; i++) {
        if (food === this.sortedCuisines[cuisine][i][1]) {
            this.sortedCuisines[cuisine][i][0] = newRating
            break
        }
    }
    
    this.sortedCuisines[cuisine].sort(comparator)
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    let last = this.sortedCuisines[cuisine].length-1 
    return this.sortedCuisines[cuisine][last][1] 
};