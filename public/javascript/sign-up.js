async function signupFormHandler(event) {
    event.preventDefault();
    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];
    const username = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    console.log(" I am here")
    // console.log(userName)
    console.log(email)
    console.log(password)
    // console.log(stock)

    if (username && password && email) {
      const response = await fetch(`/api/users`, {
          method: 'POST',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        // console.log(" I am here")
        // document.location.replace('/');

          // check response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
  }
};

document.querySelector('#submitButton').addEventListener('click', signupFormHandler);
