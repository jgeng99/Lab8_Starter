# Lab 8 - Starter

## Name
- Jianming Geng

### **1)** Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

- The answer is apparently 1. This is because automated tests integrated within a CI/CD pipeline (such as Github Actions) enable early detection of issues or bugs. They run on every code push, catching any regressions introduced by the new changes. In addition, by running tests on a dedicated CI server, you ensure that tests are run in a consistent environment. This can help prevent "worked on my machine" issues. Once it's set up, automated testing within a pipeline doesn't consume developer time, leaving them free to work on other tasks while tests run.

### **2)** Would you use an end to end test to check if a function is returning the correct output? (yes/no)

- No. End-to-end (E2E) tests are designed to test the entire application flow from start to finish, simulating a real user scenario. They are typically used to verify that the whole system, including all its components and integrations, works together as expected.

### **3)** Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No, I would not use unit test to test the message feature. Although we can use unit test to test some independent features of the message, such as "when a message is sent, is it properly stored in the database?" or "can a message be successfully retrieved from the database?" However, unit tests have their limits and are not designed to test interactions between components or the behavior of the system as a whole.

### **4)** Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- Yes, testing the "max message length" feature of a messaging application is an ideal use case for a unit test. This feature has a clear, defined behavior that can be tested in isolation, which is the main characteristic of what should be unit tested.