// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

function User() {
    this.rank = -8
    this.progress = 0
}
  
User.prototype.incProgress = function (activityRank) {
    let rankDifference = activityRank - this.rank

    if (this.rank < 0 && activityRank > 0) {
        rankDifference--
    } else if (this.rank > 0 && activityRank < 0) {
        rankDifference++
    }

    if (activityRank < -8 || activityRank >8 || activityRank === 0) {
        throw new Error ("invalid input")
    }
    else if (rankDifference <= -2) {
      //
    } else if (rankDifference === -1) {
        this.progress++ 
    } else if (rankDifference === 0) {
        this.progress = this.progress + 3
    } else {
        this.progress = this.progress + 10 * rankDifference * rankDifference
    }
    this.updateRank()
}

User.prototype.updateRank = function() {
    if (this.rank === 8) {
        this.progress = 0
        return
    }
    while (this.progress >= 100 && this.rank < 8) {
        this.progress = this.progress - 100
        this.rank++
        if (this.rank === 0) this.rank++
        if (this.rank === 8) {
          this.progress = 0
          break
        }
    }
}