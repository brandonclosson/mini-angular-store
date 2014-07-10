(function() {
  var app = angular.module("kanyeStore", []);

  var products = [
    { name: "Plain T", price: 225, canPurchase: true, soldOut: false,
      images: [ "images/blackT.jpg", "images/whitet.jpg" ],
      description: "Kanye West's version of a T-shirt. Same material, but more expensive!",
      reviews: [{
        stars: 4,
        body: "It was totally worth the price.",
        createdOn: '1403046837566',
        author: "aaaa@bbb.com"
      }, {
        stars: 2,
        body: "It was just a t-shirt.",
        createdOn: '1403011837566',
        author: "lorem@ipsum.org"
      }]
    },
    { name: "Air Yeezys", price: 600, canPurchase: true, soldOut: false,
      images: [ "images/blackyeezys.jpg", "images/whiteyeezys.jpeg" ],
      description: "Second Generation of Kanye's Nike Air Yeezys.",
      reviews: [{
        stars: 3,
        body: "Mehhhhh...",
        createdOn: '1402446837566',
        author: "aaaa@bbb.com"
      },{
        stars: 5,
        body: "Velcro and Strings!!!",
        createdOn: '1402246837566',
        author: "lorem@ipsum.org"
      }]
    },
    { name: "Yeezus", price: 14.95, canPurchase: true, soldOut: false,
      images: [ "images/yeezusalbum.jpg", "images/yeezuslist.jpg" ],
      description: "Kanye West's 6th studio album featuring Kim Kardashian and Jesus.",
      reviews: [{
        stars: 5,
        body: "Best album of all time.",
        createdOn: '1403022237566',
        author: "aaaa@bbb.com"
      },{
        stars: 1,
        body: "WTF was that",
        createdOn: '1403298837566',
        author: "lorem@ipsum.org"
      }]
    }
  ];

  app.directive('panelSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'panel-section.html',
      controller: function() {
        this.tab = 1;

        this.setTab = function(selectedTab) {
          this.tab = selectedTab;
        };

        this.isSet = function(checkedTab) {
          return this.tab === checkedTab;
        };
      },
      controllerAs: 'panel'
    };
  });

  app.controller("StoreController", function() {
    this.products = products;
  });

  app.controller("PanelController", function(){
    this.tab = 1;

    this.setTab = function(selectedTab) {
      this.tab = selectedTab;
    };

    this.isSet = function(checkedTab) {
      return this.tab === checkedTab;
    };
  });

  app.controller("GalleryController", function() {
    this.current = 0;

    this.setCurrent = function(selected) {
      this.current = selected || 0;
    };
  });

  app.controller("ReviewController", function() {
    this.review = { stars: 0 };

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = { stars: 0 };
    };
  });
})();
