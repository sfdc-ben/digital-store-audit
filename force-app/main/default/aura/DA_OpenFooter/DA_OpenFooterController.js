({
	navigate1 : function(component, event, helper) {
		var navigate = component.get('v.navigateFlow');
        navigate("NEXT");
        var dest = component.get('v.nav1');
        component.set('v.navOut', dest);
        console.log(dest);
	},
})