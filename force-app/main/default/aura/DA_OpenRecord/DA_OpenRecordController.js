({
	invoke : function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
   		var recordId = component.get("v.recordToNavigate");
        navEvt.setParams({
            "recordId": recordId,
      		"slideDevName": "related"
    		});
    	navEvt.fire();
    },
})