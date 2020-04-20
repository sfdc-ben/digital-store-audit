@isTest
private class storePicklistControllerTest {
    @isTest static void testStorePicklist(){
        List<String> retList = storePicklistController.getPicklistvalues('Audit_Configuration__c','Source_Picklist_Store__c');
        List<String> expList = new list<String>{'The Friendly Grocer', 'Corner Street Market', 'Bulk Around Town'};
        System.assertEquals(expList,retList);
    }
}