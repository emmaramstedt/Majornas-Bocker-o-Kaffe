const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  await mail.send({
    to: "amarinov78@gmail.com",
    from: "galya.marinova@hotmail.se",
    subject: "Contact form submission from",
    html: `<p>You have a new contact form submission</p><br>
    <p><strong>Name: </strong> ${body.name} </p><br>
    <p><strong>Email: </strong> ${body.email} </p><br>
    <p><strong>Message: </strong> ${body.message} </p><br>`,
  });

  res.status(200).json({ status: "Ok" });
};
