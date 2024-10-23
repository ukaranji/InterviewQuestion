# Installing and Running this project
Before running the page locally, you'll need to install packages by running:
```
npm install
```

Run the following command to run the page locally:
```
npm run dev
```

# Interview Question

We have a very basic sign-up form written in React. We have the following fields…
1. Name
2. Date of Birth
3. User name
4. Password

...and a submit button.


## Primary Goal:
We'd like you to connect this to our backend service that will either accept or reject the signup: https://react-interview-question-backend-evdphnararfqcvcm.canadacentral-01.azurewebsites.net
The service expects a POST request with a json body that conforms to the spec described here: https://react-interview-question-backend-evdphnararfqcvcm.canadacentral-01.azurewebsites.net/swagger

**Acceptance Criteria:** successful response from the backend is shown, either in an alert, or in a console log.


## Secondary Goal:
Provide some kind of feedback to the user if their input is invalid or rejected.
   - Bonus: Render feedback for a specific inputs separately.

**Acceptance Criteria:** html elements added to the page that become visible when an error has occured, displaying the error message to the user.


## Bonus Goal:
Implement local validation for each field
    - Name should not contain numbers or special characters
    - The date of birth must be that of someone who is at least 18 years of age and born after December 31st, 1899
    - User name must be at least 8 characters, start with a letter and not have special characters.
    - Password should be between 8 and 18 characters, and must contain each of the following
        - An upper-case letter
        - A lower-case letter
        - A number

**Acceptance Criteria:** each input is validated on the page locally, and a request to the backend is not sent unless all fields match their requirements.
