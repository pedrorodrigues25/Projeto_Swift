/**
 * CLASSE DE REVIEW
 */

class review{
    idReview = "";
    idDestination = "";
    userName = "";
    userCoverPhoto = "";
    text = "";
    images = [

    ]

    constructor(idReview, idDestination, userName, userCoverPhoto, text, images){
        this.idReview = idReview;
        this. idDestination = idDestination;
        this.userName = userName;
        this.userCoverPhoto = userCoverPhoto;
        this.text = text;
        this. images = images;
    }
}

/**
 * CLASSE REVIEW'S COMMETENTS
 */

class reviewComments{
    idReview = "";
    idUser = "";
    date = "";
    text = "";

    constructor(idReview, idUser, date, text){
        this.idReview = idReview;
        this.idUser = idUser;
        this.date = date;
        this.text = text;
    }
}