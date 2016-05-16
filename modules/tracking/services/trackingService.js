(function(){
  'use strict';

  angular.module('cobuild.tracking')
    .service('TrackingService', TrackingService);

  TrackingService.$inject = ['$window','ga'];

  function TrackingService($window, ga){

    /**
     * Track a page view on Google Analytics
     * @param  {Object} eventParams [description]
    
     */
    var pageView = function (page, params) {

        if(!params){
          params = {};
        }      

        for(var key in params){     
          if(typeof params[key] === 'string'){   
            params[key] =  standarize(params[key]);
          }
        }

        //console.log("TRACK ", eventName, eventParams);

        //Google Analythics -- Remember to set up the key at ga_service!
        if($window._gaq){
          console.log('send', 'pageview', page, params)
          $window._gaq('send', 'pageview', page, params);
        }else{
          console.error('No _gaq set!!')
        }

        //Mixpanel tracking
        //mixpanel.track(eventName, eventParams);

    };


    var event = function (eventCategory, eventAction, eventParams) {

        if(!eventParams){
          eventParams = {};
        }      

        for(var key in eventParams){     
          if(typeof eventParams[key] === 'string'){   
            eventParams[key] =  standarize(eventParams[key]);
          }
        }

        eventParams.hitType = 'event';
        eventParams.eventCategory = eventCategory;
        eventParams.eventAction = eventAction;

        //console.log("TRACK ", eventName, eventParams);

        //Google Analythics -- Remember to set up the key at ga_service!
        if($window._gaq){
          console.log('event', eventParams)
          $window._gaq('send', eventParams);
        }else{
          console.error('No _gaq set!!')
        }

        //Mixpanel tracking
        //mixpanel.track(eventName, eventParams);

    };

    /*
    * @name setUser
    * @description Set user for tracking events
    * @param {object} user Object with user data
    */
    var setUser = function (user){

      //Mixpanel Set User
      // user = AuthService.currentUser();
      if(user){

        mixpanel.people.set({
          "$first_name": user.firstName,
          "$last_name": user.lastName,
          "$email": user.email
        });
        eventParams.email = user.email;

      }

    };

    //Implement here custom standarization of string inputs.
    function standarize(value){
      return value.toLowerCase();
    }

    return  {
      pageView: pageView,
      event: event, 
      setUser: setUser
    };

  }

})();