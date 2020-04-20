({
    doInit : function(component, event, helper) {
        component.set("v.rat1", JSON.stringify(component.get("v.rating1")));
        component.set("v.rat2", JSON.stringify(component.get("v.rating2")));
        component.set("v.rat3", JSON.stringify(component.get("v.rating3")));
        component.set("v.rat4", JSON.stringify(component.get("v.rating4")));
        component.set("v.rat5", JSON.stringify(component.get("v.rating5")));
        //console.log('complete? '+ component.get("v.complete"));
    },
    
    calcComplete : function(component, event, helper) {
        component.set("v.rating1", parseInt(component.get("v.rat1")));
        component.set("v.rating2", parseInt(component.get("v.rat2")));
        component.set("v.rating3", parseInt(component.get("v.rat3")));
        component.set("v.rating4", parseInt(component.get("v.rat4")));
        component.set("v.rating5", parseInt(component.get("v.rat5")));
        
        var complete1 = !$A.util.isEmpty(component.get("v.tabName1")) === !isNaN(component.get("v.rating1"));
        var complete2 = !$A.util.isEmpty(component.get("v.tabName2")) === !isNaN(component.get("v.rating2"));
        var complete3 = !$A.util.isEmpty(component.get("v.tabName3")) === !isNaN(component.get("v.rating3"));
        var complete4 = !$A.util.isEmpty(component.get("v.tabName4")) === !isNaN(component.get("v.rating4"));
        var complete5 = !$A.util.isEmpty(component.get("v.tabName5")) === !isNaN(component.get("v.rating5"));
        
        var fullComplete = complete1 && complete2 && complete3 && complete4 && complete5
        //console.log(complete1+' '+ complete2+' '+complete3+' '+complete4+' '+complete5);
        //console.log(fullComplete);
        component.set("v.complete", fullComplete);
	},
})