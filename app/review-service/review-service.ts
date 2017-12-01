export class Review {
    constructor(public id:number ,public name: string, public comment:string, public score: number) {}

}


export class ReviewService {
    getReviews(): Array<Review> {
        var reviews: Array<Review> = [
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
    }


}
