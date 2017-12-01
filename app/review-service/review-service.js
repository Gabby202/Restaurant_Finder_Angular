"use strict";
var Review = (function () {
    function Review(id, name, comment, score) {
        this.id = id;
        this.name = name;
        this.comment = comment;
        this.score = score;
    }
    return Review;
}());
exports.Review = Review;
var ReviewService = (function () {
    function ReviewService() {
    }
    ReviewService.prototype.getReviews = function () {
        var reviews = [
            new Review(0, "Alice Smith", "Very nice food!!", 3),
            new Review(1, "Caron Armbruster", "Very nice food!!", 2),
            new Review(2, "Dennis Persaud", "Very nice food!!", 5),
            new Review(3, "Erminia Wharton", "Very nice food!!", 3),
            new Review(4, "Jenna Scot", "Very nice food!!", 1),
            new Review(5, "Tarra Rowles", "Very nice food!!", 2),
            new Review(6, "Kevin Jusino", "Very nice food!!", 2),
            new Review(7, "Shantel Aliff", "Very nice food!!", 5),
            new Review(8, "Jerrell Coad", "Very nice food!!", 4),
            new Review(9, "Cinthia Montford", "Very nice food!!", 4),
            new Review(10, "Graciela Ginh", "Very nice food!!", 3),
            new Review(11, "Evangeline Mcshane", "Very nice food!!", 1),
            new Review(12, "Arlyne Haight", "Very nice food!!", 5)
        ];
        return reviews;
    };
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=review-service.js.map