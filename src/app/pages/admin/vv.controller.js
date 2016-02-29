export default class VvController {
  constructor (managerFirebaseService, $scope) {
    'ngInject';

    this.oneThing = [];
    this.awesomeThings = [];
    this.userName = [];
    var temp = [];
    this.classAnimation = '';
    this.activate(managerFirebaseService);
    this.calendarView = 'month';
    this.calendarDay = new Date();
    this.$scope =  $scope;


    // $scope.$watch('this.oneThing.name', function(){
    // console.log('changed', this.oneThing );
    // });

    // scope.obj.vacations.list[0].startDate
    // scope.obj.vacations.list[0].endDate

    this.events = [];
// endsAt: new Date(2016,8,10,15)
  }


// button test 
  showEvents1() {
    console.log("EVENTS1");
     //debugger
    this.events = [
      {
        title: 'My event title', // The title of the event 
        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special 
        startsAt: new Date('Thu Feb 25 2016 21:11:58 GMT+0200 (Финляндия (зима))'), // A javascript date object for when the event starts 
        endsAt: new Date('Thu Feb 26 2016 21:11:58 GMT+0200 (Финляндия (зима))'), // Optional - a javascript date object for when the event ends 
        editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable. If set to false will also prevent the event from being dragged and dropped. 
        deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable 
        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view 
        recursOn: 'year' // If set the event will recur on the given period. Valid values are year or month 
      }]
  }

  activate(managerFirebaseService) {
    var _this = this;
    managerFirebaseService.getUsersList().then( d => {debugger;
      _this.awesomeThings = d;
    });
  }

}
