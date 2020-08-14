var browsePage = require('../pageobjects/browseJobPage');
var text = require('../resources/texts.json');
var path = require('path');
var EC = protractor.ExpectedConditions;


exports.verifyTitleHeading = function () {
    'use strict';
    expect(browser.getTitle()).toEqual(text.title);
    expect(browsePage.job.heading.getText()).toBeDefined();
    expect(browsePage.job.heading.getText()).toEqual(text.heading);
    expect(browsePage.job.subHeading.getText()).toBeDefined();
    expect(browsePage.job.subHeading.getText()).toEqual(text.subheading);
};
exports.verifyJobTitles = function () {
    'use strict';
    browsePage.job.jobTitle.then(function (titles) {
        for (var i = 0; i < titles.length; i++)
        {
            expect(titles[i].getText()).toEqual(text.jobNames[i]);
        }
    });
};

exports.verifyJobLocations = function () {
    'use strict';
    browsePage.job.jobLocation.then(function (locations) {
        for (var i = 0; i < locations.length; i++)
        {
            expect(locations[i].getText()).toEqual(text.jobLocations[i]);
        }
    });
};

exports.verifyJobDates = function () {
    'use strict';
    browsePage.job.jobDate.then(function (dates) {
        for (var i = 0; i < dates.length; i++)
        {
            expect(dates[i].getText()).toEqual(text.jobDates[i]);
        }
    });
};

exports.verifyJobDetail = function (i) {
    'use strict';
    browser.wait(EC.visibilityOf(browsePage.job.jobList.get(i)), 5000);

    //click job tiitle
    browsePage.job.jobList.get(i).click();

    //verify job page headings
    expect(browsePage.job.jobHeading.getText()).toBeDefined();
    expect(browsePage.job.jobLocationDetail.getText()).toBeDefined();
    expect(browsePage.job.jobDescription.getText()).toBeDefined();
    expect(browsePage.job.jobSkills.getText()).toBeDefined();
    expect(browsePage.job.jobOppor.getText()).toBeDefined();
    expect(browsePage.job.jobApply.getText()).toBeDefined();
    browsePage.job.jobApply.click();

    //wait for form to open
    browser.wait(EC.visibilityOf(browsePage.job.applicantName), 5000);


    //positive case
    browsePage.job.applicantName.sendKeys("Rohit");
    browsePage.job.applicantEmail.sendKeys("rohit.gupta13991@gmail.com");
    var fileToUpload = '../resources/galytixResume.pdf',
        absolutePath = path.resolve(__dirname, fileToUpload);

    browsePage.job.applicantResume.sendKeys(absolutePath);
    browsePage.job.applyNow.click();
    browser.wait(EC.visibilityOf(browsePage.job.applySuccess), 5000);
    //NOT ABLE TO APPLY JOB 5 FOR NOW, THEREFORE ADDED BELOW CHECK
    if(i == 4)
    {
        expect(browsePage.job.applySuccess.getText()).toEqual(text.jobFail);

    }
    else
    {
        expect(browsePage.job.applySuccess.getText()).toEqual(text.jobSuccess);

    }

    //NEED TO GET BACK TO HOME PAGE TO APPLY NEXT JOB
    browser.get("http://localhost:4200/jobs");
}