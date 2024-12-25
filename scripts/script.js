// AngularJS app module and controller
angular.module('lunchChecker', [])
  .controller('LunchController', function() {
    this.items = '';  // Holds the input value
    this.message = ''; // Holds the message to be shown

    this.checkLunch = function() {
      if (!this.items.trim()) { // Check if input is empty or only spaces
        this.message = 'Please enter data first';
      } else {
        // Split the input string by commas and filter out empty strings (in case of extra commas)
        var itemsArray = this.items.split(',').filter(item => item.trim() !== '');

        if (itemsArray.length <= 3) {
          this.message = 'Enjoy!';
        } else {
          this.message = 'Too much!';
        }
      }
    };
  });
