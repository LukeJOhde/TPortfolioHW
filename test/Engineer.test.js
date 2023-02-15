const Engineer = require('../lib/engineer')

describe('Engineer class', () => {
    it("getName returns the name for the specified class.", () => {
        const testEngineerName = 'Eugine';
        const testEngineer = new Engineer('Eugine', 6789, 'eugine@email.com', 'eugine@github');
        expect(testEngineer.name).toBe(testEngineerName);
    });

    it("getId returns the id for the specified class.", () => {
        const testEngineerId = 6789;
        const testEngineer = new Engineer('Eugine', 6789, 'eugine@email.com', 'eugine@github');
        expect(testEngineer.id).toBe(testEngineerId);
    });

    it("getEmail returns the email for the specified class.", () => {
        const testEngineerEmail = 'eugine@email.com';
        const testEngineer = new Engineer('Eugine', 6789, 'eugine@email.com', 'eugine@github');
        expect(testEngineer.email).toBe(testEngineerEmail);
    });

    it("getGitHib returns the GitHub username for the specified class.", () => {
        const testEngGitHub = 'eugine@github';
        const testEngineer = new Engineer('Eugine', 6789, 'eugine@email.com', 'eugine@github');
        expect(testEngineer.gitHub).toBe(testEngGitHub);
    });

    it("getRole returns 'Engineer'.", () => {
        const testEngineer = new Engineer('Eugine', 6789, 'eugine@email.com', 'eugine@github');
        expect(testEngineer.getRole()).toBe('Engineer');
    });
});