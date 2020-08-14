var browsePage = function () {
    'use strict';

    //************** elements ********************
    this.heading = element(by.css('body > app-root > app-jobs > h1'));
    this.subHeading = element(by.css('body > app-root > app-jobs > h2'));
    this.jobTitle = element.all(by.css('body > app-root > app-jobs > ul > li > a > span.title'));
    this.jobLocation = element.all(by.css('body > app-root > app-jobs > ul > li > a > span.location'));
    this.jobDate = element.all(by.css('body > app-root > app-jobs > ul > li > a > span.date'));
    this.jobList =  element.all(by.css('body > app-root > app-jobs > ul > li'));
    this.jobApply = element(by.css('body > app-root > app-job > button'));
    this.applicantName = element(by.css('body > app-root > app-job > div > form > div:nth-child(1) > div:nth-child(1) > input'));
    this.applicantEmail = element(by.css('body > app-root > app-job > div > form > div:nth-child(1) > div:nth-child(2) > input'));
    this.applicantResume =  element(by.css('body > app-root > app-job > div > form > div:nth-child(2) > div > input'));
    this.applyNow = element(by.css('body > app-root > app-job > div > form > div.d-flex > div > button'));
    this.applySuccess = element(by.css('body > app-root > app-job > div > div'));
    this.jobHeading = element(by.css('body > app-root > app-job > h1'));
    this.jobLocationDetail = element(by.css('body > app-root > app-job > p'));
    this.jobDescription = element(by.css('body > app-root > app-job > h2:nth-child(4)'));
    this.jobSkills = element(by.css('body > app-root > app-job > h2:nth-child(6)'));
    this.jobOppor = element(by.css('body > app-root > app-job > h2:nth-child(8)'));
    this.jobDescriptionDetail = element(by.css('body > app-root > app-job > ul:nth-child(5) > li:nth-child(1)'));
    this.jobSkillsDetail = element(by.css('body > app-root > app-job > ul:nth-child(7) > li:nth-child(1)'));
    this.jobOpporDetail = element(by.css('body > app-root > app-job > ul:nth-child(9) > li:nth-child(1)'));
    this.applicantNameRequired = element(by.css('body > app-root > app-job > div > form > div:nth-child(1) > div:nth-child(1) > div > div'));
    this.applicantEmailRequired =  element(by.css('body > app-root > app-job > div > form > div:nth-child(1) > div:nth-child(2) > div > div'));
    this.applicantResumeRequired = element(by.css('body > app-root > app-job > div > form > div:nth-child(2) > div > div > div'));
};

module.exports = {
    job: new browsePage()
};