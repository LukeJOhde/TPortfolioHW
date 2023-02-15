const Manager = require('../lib/manager');

describe('Manager class', () => {
    it("getName returns the name for the specified class..", () => {
        const testManagerName = 'Jennifer';
        const testManager = new Manager('Jennifer', 3456, 'jenny@email.com', 256);
        expect(testManager.name).toBe(testManagerName);
    });

    it("getId returns the id for the specified class.", () => {
        const testManagerId = 3456;
        const testManager = new Manager('Jennifer', 3456, 'jenny@email.com', 256);
        expect(testManager.id).toBe(testManagerId);
    });

    it("getEmail returns the email for the specified class.", () => {
        const testManagerEmail = 'jenny@email.com';
        const testManager = new Manager('Jennifer', 3456, 'jenny@email.com', 256);
        expect(testManager.email).toBe(testManagerEmail);
    });

    it("getOfficeNumber returns the office number for the specified class.", () => {
        const testOfficeNumber = 256;
        const testManager = new Manager('Jennifer', 3456, 'jenny@email.com', 256);
        expect(testManager.officeNumber).toBe(testOfficeNumber);
    });

    it("getRole returns 'Manager'.", () => {
        const testManager = new Manager('Jennifer', 3456, 'jenny@email.com', 256);
        expect(testManager.getRole()).toBe('Manager');
    });
});