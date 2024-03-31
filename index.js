var url = "https://cute-jade-binturong-boot.cyclic.app/api";

var signUp = async ({ name, surname, password, email }) => {
  var response = await fetch(
    `${url}/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`,
    {
      method: "POST",
      body: JSON.stringify({
        name: name,
        surname: surname,
        password: password,
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  var data = await response.json();
  console.log(data);
};

signUp({
  name: "azimjon",
  surname: "turakulov",
  password: "123456798",
  email: "turakulov9@gmail.com",
});

///

// var signIn = async () => {
//   var response = await fetch(
//     `${url}/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         password: "123456798",
//         email: "turakulov98@gmail.com",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   var data = await response.json();
//   console.log(data);
// };

// signIn({
//   password: "123456798",
//   email: "turakulov98@gmail.com",
// });
