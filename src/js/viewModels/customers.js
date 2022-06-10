/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define([
  "../accUtils",
  "knockout",
  "ojs/ojinputtext",
  "ojs/ojinputnumber",

  "ojs/ojformlayout",
], function (accUtils, ko) {
  function CustomerViewModel() {
    this.userInput = ko.observable("m.hamza@techlogix.com");
    this.firstName = ko.observable("Hamza");
    this.lastName = ko.observable("Malik");
    this.userAge = ko.observable(0);
 
    this.fullName=ko.computed(

      function(){

        return this.firstName() + " " + this.lastName();
      },this
    );

    
    this.showUserInfo = ko.observable(false);

    this.userAgeChaned = function () {
      if (this.showUserInfo() == true) {
        this.showUserInfo(false);
      } else {
        this.showUserInfo(true);
      }
      console.log("this.showUserInfo");
      console.log(this.showUserInfo());
    }.bind(this);

    this.connected = () => {
      accUtils.announce("Customers page loaded.", "assertive");
      document.title = "Customers";
      // Implement further logic if needed
    };

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    this.disconnected = () => {
      // Implement if needed
    };

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    this.transitionCompleted = () => {
      // Implement if needed
    };
  }

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return CustomerViewModel;
});