# Front End interview

We have a very basic sign-up form written in React that we'd like you to flesh out.  We have the following fields…
1. First name
2. Last name
3. Phone number
4. User name
5. Password
6. Date of Birth

...and a submit button.

We'd like you to do the following:
1. Connect this to our backend service that will either accept or reject the signup: https://react-interview-question-backend-evdphnararfqcvcm.canadacentral-01.azurewebsites.net
    - The service expects a json body that will conforms to the spec described here: <insert swagger url>
2. Implement validation for each field
    - Names should not contain numbers or special characters
    - Phone number should have 10 digits
    - The date of birth must be that of someone who is at 18 years of age and born after December 31st, 1899
    - User name must be at least 8 characters, start with a letter and not have special characters.
    - Password should be between 8 and 18 characters, and must contain each of the following
        - An upper-case letter
        - A lower-case letter
        - A number
3. Provide some kind of feedback to the user if their input is invalid or rejected.
   - Bonus: identify what field or fields are invalid and why.
