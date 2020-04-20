({
	doInit: function(component, event, helper) {
        var picklist = component.get("v.sourcePicklist");
        var action = component.get("c.getPicklistvalues");
        action.setParams({
            'objectName': "Audit_Configuration__c",
            'field_apiname': picklist
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS"){
                console.log(a.getReturnValue());
                component.set("v.storeList", a.getReturnValue());
            } 
        });
        $A.enqueueAction(action);   
	},
    
    editStore: function(component, event, helper) {
        component.set("v.storeEditMode", "edit");
    },
    
    storeValueChange: function(component, event, helper) {
        component.set("v.storeEditMode", "view");
    },
})