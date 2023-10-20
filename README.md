## OVERVIEW
EaseRead BACKEND API

* LANGUAGES : Node.js
* DATABASES : Mongodb
* ORM : Mongoose
* FRAMEWORK : Express.js
* BASE_URL : 

### ENDPOINTS

* REGISTRATION
    - This endpoint allows to create an account on the platform.
    - An email will be sent to the user before their account is created for verification
    
    - URL: {BASE_URL}/api/v1/register
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        username: data.firstName + '.' + data.lastName.charAt(0).toLowerCase()
        firstName: 'samuel',
        lastName: 'makinde',
        email: 'easereads@gmail.com',
        phoneNumber: "12345436361',
        university: "Unilag"
        password: "dfdasd123"
    }
    
    ```
    - RESPONSE:
    ```
        {
            message: "Account Created, Email has been sent to your mailbox",
            data:  {
                username: 'samuel.m',
                firstName: 'samuel',
                lastName: 'makinde',
                email: 'easereads@gmail.com',
                phone: "12345436361',
                university: "Unilag"
                password: "dfdasd123"
            }
        }
    ```

* VERIFY EMAIL
    - This endpoint makes the user to be Verified.
    - it will update the user verification status so as to allow the user login.

    - URL: {BASE_URL}/api/v1/verify-emai
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        email: 'easereads@gmail.com',
        verificationToken: verificationToken,
    }
    
    ```
    - RESPONSE:
    ```
        {
            message: "Email verified successfully"
        }
    ```

* RESEND EMAIL
    - if the user did not recieve mail in mail box, the user can hit this End point to resend the mail again

    - URL: {BASE_URL}/api/v1/resend-email
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        email: 'easereads@gmail.com',
        firstName: 'samuel',
    }
    
    ```
    - RESPONSE:
    ```
        {
            message: "New verification email sent"
        }
    ```

* LOGIN USER
    - this endpoints grants user Access to the site if they meet the required conditions(verified email).
    - accesstoken and refreshtoken will be returned for Authorization purposes.
    - A cookie will be set in the browser
    
    - URL: {BASE_URL}/api/v1/login
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        email: 'easeread@gmail.com',
        password: easeread212,
    }
    
    ```
    - RESPONSE:
    ```
        {
            message: "user Login successful",
            data: {accessToken}
        }
    ```

* FORGOT PASSWORD
    - the user will have to input their email for Authentication. If their mail exists, an email will be sent to their mailbox
    
    - URL: {BASE_URL}/api/v1/forgot-password
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        email: 'easeread@gmail.com',
    }
    
    ```
    - RESPONSE:
    ```
        {
            "message": "Please check your email for reset password link",
            "data": {
                "id": {user id},
                "email": "easeread@gmail.com",
                "firstName": "samuel"
            }
        }
    ```

* RESET PASSWORD
    - This endpoint updates the user password.
    - PARAM: `token`
    - URL: {BASE_URL}/api/v1/reset-password
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        token: {token from url_param},
        email: 'example@gmail.com',
        password: 'newpassword'
    }
    
    ```
    - RESPONSE:
    ```
        {
           "message": "password updated successfully"
        }
    ```

* LOGOUT USER
    - This endpoint allow the user to logout of there account 
    - Get user id from cookie sent during authorization for login
    - URL: {BASE_URL}/api/v1//logOut
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        user: {user_id from cookie},
    }
    
    ```
    - RESPONSE:
    ```
        {
           "message": "user logout sucessfully"
        }
    ```

    * Get Books
    - This endpoint allow the user to have access to the books 
    - Get user id from cookie sent during authorization for login
    - URL: {BASE_URL}/api/v1//logOut
    - METHOD: POST
    - REQUEST BODY: 
    ```
    {
        user: {user_id from cookie},
    }
    
    ```
    - RESPONSE:
    ```
        {
           "message": "user logout sucessfully"
        }
    ```

