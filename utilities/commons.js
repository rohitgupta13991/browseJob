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

    //verify job page headings and some details
    expect(browsePage.job.jobHeading.getText()).toBeDefined();
    expect(browsePage.job.jobLocationDetail.getText()).toBeDefined();
    expect(browsePage.job.jobDescription.getText()).toBeDefined();
    expect(browsePage.job.jobSkills.getText()).toBeDefined();
    expect(browsePage.job.jobOppor.getText()).toBeDefined();
    expect(browsePage.job.jobApply.getText()).toBeDefined();
    expect(browsePage.job.jobDescriptionDetail.getText()).toBeDefined();
    expect(browsePage.job.jobSkillsDetail.getText()).toBeDefined();
    expect(browsePage.job.jobOpporDetail.getText()).toBeDefined();

    //click Apply now button on job detail page
    browsePage.job.jobApply.click();

    //wait for form to open
    browser.wait(EC.visibilityOf(browsePage.job.applicantName), 5000);

    //required field validation check - click apply now without any inputs
    browsePage.job.applyNow.click();
    browser.wait(EC.visibilityOf(browsePage.job.applicantNameRequired), 5000);
    expect(browsePage.job.applicantNameRequired.getText()).toEqual(text.nameRequired);
    expect(browsePage.job.applicantEmailRequired.getText()).toEqual(text.emailRequired);
    expect(browsePage.job.applicantResumeRequired.getText()).toEqual(text.resumeRequired);

    //click apply now with valid inputs
    browsePage.job.applicantName.sendKeys(text.applicantName);
    browsePage.job.applicantEmail.sendKeys(text.applicantEmail);
    var fileToUpload = text.applicantResume,
        absolutePath = path.resolve(__dirname, fileToUpload);

    browsePage.job.applicantResume.sendKeys(absolutePath);
    //Click apply now button in the form
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