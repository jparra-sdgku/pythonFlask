let catalog = [
    {
        "title": "orange",
        "category": "fruit",
        "price":15,
        "image": "picture",
        "_id":"1" //The id should be unique (it can not repeated)
    },
    {
        "title": "banana",
        "category": "fruit",
        "price":10,
        "image": "picture",
        "_id":"2" //The id should be unique (it can not repeated)
    },
    {
        "title": "cherry",
        "category": "fruit",
        "price":21,
        "image": "picture",
        "_id":"3" //The id should be unique (it can not repeated)
    },
    {
        "title": "grapes",
        "category": "fruit",
        "price":11,
        "image": "picture",
        "_id":"4" //The id should be unique (it can not repeated)
    },
    {
        "title": "milk",
        "category": "dairy",
        "price":5,
        "image": "picture",
        "_id":"5" //The id should be unique (it can not repeated)
    },
    {
        "title": "mint candy",
        "category": "candy",
        "price":5,
        "image": "picture",
        "_id":"6 " //The id should be unique (it can not repeated)
    },
];

class DataService {
    getProducts() {
        return catalog;
    }
};

export default DataService;

