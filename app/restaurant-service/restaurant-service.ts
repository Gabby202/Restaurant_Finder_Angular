export class Restaurant {
    constructor(public name: string, public category: string, public price: string, public address: string, public openingHours: string, public contact: string, public city: string, public county: string, public score: number, public image: string) {}
}

export class RestaurantService {
    getRestaurants(): Array<Restaurant> {
        var restaurants: Array<Restaurant> = [
            new Restaurant("Time Restaurant at Carlton Hotel Blanchardstown", "A La Carte", "Average", "Church Road, Tyrrelstown , Blanchardstown, Dublin", "Sun 08:00 AM-09:00 PM", "01 8275600", "Blanchardstown", "Dublin", 4.5, "image0.jpg"),
            new Restaurant("Aqua Restaurant", "Seafood", "Expensive", "1 West Pier, Howth, Dublin", "Mon-Sun 01:00 PM-10:00 PM", "01 832 0690", "Howth", "Dublin", 4.5, "image1.jpg"),
            new Restaurant("Abbey Tavern Loft Bar and Grill", "Grill", "Average", "Abbey Street, Dublin", "Mon-Sat 2:00 PM-11:00 PM", "01 8390307", "Howth", "Dublin", 4.5, "image2.jpg"),
            new Restaurant("Cibo Bar and Grill", "Grill", "Expensive", "4 East Pier, Howth, Dublin", "Wed-Sun 1:00 PM-10:00 PM", "01 8396344", "Howth", "Dublin", 4, "image3.jpg"),
            new Restaurant("La Banca Ristorante", "Italian", "Cheap", "Main Street, Lucan Village, Lucan, Dublin", "Mon-Sat 5:00 PM-12:00 AM", "01 6282400", "Lucan", "Dublin", 3.2, "image4.jpg"),
            new Restaurant("The Foxhunter", "European", "Cheap", "Ballydowd Lucan, Lucan, Dublin", "Tues-Sun 2:00 PM-11:00 PM", "01 6262599", "Lucan", "Dublin", 4, "image5.jpg"),
            new Restaurant("Khans Spices Trim", "Indian", "Cheap", "Emmet Street Trim, Meath", "Mon-Sun 2:00 PM-1:00 AM", "046 9437696", "Trim", "Meath", 5, "image6.jpg"),
            new Restaurant("La Scala", "Italian", "Average", "Emmet House, Finnegans Way, Trim, Meath", "Mon-Fri 12:00 AM-11:00 PM", "046 948323", "Trim", "Meath", 4.2, "image7.jpg"),
    //        new Restaurant("La Scala", "Italian", "Average", "Emmet House, Finnegans Way, Trim, Meath", "Mon-Fri 12:00 AM-11:00 PM", "046 948323", "Trim", "Meath", 4.2, "image7.jpg"),






        ];
        return restaurants;
    }


}
