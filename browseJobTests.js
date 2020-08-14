var coms =  require('./utilities/commons');
var browsePage =  require('./pageobjects/browseJobPage');

browser.get('http://localhost:4200');

describe('Browse jobs page automation', function() {

    it('should have a title, heading and subheading', function() {
        coms.verifyTitleHeading();
    });
    it('verify job titles', function(done) {
        coms.verifyJobTitles();
        done();
    });
    it('verify job locations', function(done) {
        coms.verifyJobLocations();
        done();
    });
    it('verify job dates', function(done) {
        coms.verifyJobDates();
        done();
    });
    it("verify and apply jobs", function (done) {
        browsePage.job.jobList.then(function (list) {
            for(var i=0;i<list.length;i++)
            {
                coms.verifyJobDetail(i);
            }
        });
        done();
    });
});